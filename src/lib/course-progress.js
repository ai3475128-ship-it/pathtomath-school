import catalog from './task-catalog.json' with { type: 'json' };
import { EGE_SECTIONS, EGE_INTRO_SECTIONS } from './ege-sections.js';
import { OLYMPIAD_TOPICS, PHYSICS_SECTIONS } from './learning-catalog.js';
import { competitionTasksByGrade } from './olympiad-competition-tasks.js';
import { olympiads } from './olympiad-calendar.js';

const OLYMPIAD_PREP = [
  ['Логика', 'olympiad-1-intro'], ['Теория чисел', 'olympiad-2-intro'],
  ['Тождественные преобразования', 'olympiad-3-intro'], ['Комбинаторика и теория вероятности', 'olympiad-4-intro'],
  ['Текстовые задачи', 'olympiad-5-intro'], ['Классическая алгебра', 'olympiad-6-intro'], ['Функции', 'olympiad-7-intro'],
];
function item(label, modules, solved, href) {
  let total = 0, done = 0;
  for (const moduleId of modules) {
    const ids = catalog[moduleId] || [];
    total += ids.length;
    done += ids.filter((id) => solved.has(`${moduleId}:${id}`)).length;
  }
  return { label, modules, total, done, href };
}
export function practiceGroups(course, progress) {
  const solved = new Set(progress.map((p) => `${p.module}:${p.taskId}`));
  if (course === 'ege-math') return [
    { title: 'Подготовительные задачи', rows: EGE_INTRO_SECTIONS.map((s) => item(`№${s.number} · ${s.title}`, [s.module], solved, `/math-profile/${s.number}-intro`)) },
    { title: 'Банк заданий', rows: EGE_SECTIONS.map((s) => item(`№${s.number} · ${s.title}`, s.number === 9 ? [s.module, '12'] : [s.module], solved, `/math-profile/${s.number}`)) },
  ];
  if (course === 'olympiad-math') return [
    { title: 'Подготовительные задачи', rows: OLYMPIAD_PREP.map(([title, moduleId], i) => item(title, [moduleId], solved, `/math-profile/olympiad-${i+1}-intro`)) },
    { title: 'Задачи с олимпиад по темам', rows: OLYMPIAD_TOPICS.map((s, i) => item(s.title, [`olympiad-${i+1}-main`], solved, `/math-profile/olympiad-${i+1}-main`)) },
    { title: 'Задачи по олимпиадам', rows: olympiads.flatMap((olympiad) => Object.entries(competitionTasksByGrade[olympiad.id] || {}).map(([grade, groups]) => {
      const keys = new Set(groups.flatMap((group) => (group.ids || []).filter((id) => catalog[group.module]?.includes(id)).map((id) => `${group.module}:${id}`)));
      return { label: `${olympiad.name} · ${grade} класс`, taskKeys: [...keys], total: keys.size, done: [...keys].filter((key) => solved.has(key)).length, href: `/olympiads/tasks/${olympiad.id}?grade=${encodeURIComponent(grade)}` };
    })) },
  ];
  if (course === 'physics') return [
    { title: 'Подготовительные задачи', rows: [] },
    { title: 'Банк заданий', rows: PHYSICS_SECTIONS.map((s) => ({ label: `№${s.number} · ${s.title}`, modules: [], total: 0, done: 0, href: `/math-profile/physics/main/${s.number}` })) },
  ];
  return [];
}
export function trialInsights(trials, results, course) {
  const limit = course === 'ege-math' ? 20 : course === 'physics' ? 26 : course === 'olympiad-math' ? 100 : 0;
  const checked = trials.filter((t) => t.status === 'Проверено' && Number.isFinite(t.score) && t.maxScore > 0 && t.score >= 0 && t.score <= t.maxScore)
    .sort((a, b) => String(a.date).localeCompare(String(b.date)) || String(a.id).localeCompare(String(b.id)));
  const permitted = new Set(checked.filter((t) => t.courseId === course).map((t) => t.id));
  const sums = new Map(), byTrialMap = new Map();
  for (const r of results) {
    if (!permitted.has(r.trialId) || !Number.isInteger(r.taskNumber) || r.taskNumber < 1 || r.taskNumber > limit || ![0,1].includes(r.solved)) continue;
    if (course === 'olympiad-math') {
      const rows = byTrialMap.get(r.trialId) || [];
      rows.push({ number: r.taskNumber, solved: r.solved });
      byTrialMap.set(r.trialId, rows);
      continue;
    }
    const v = sums.get(r.taskNumber) || { number: r.taskNumber, solved: 0, checked: 0 };
    v.checked++; v.solved += r.solved; sums.set(r.taskNumber, v);
  }
  const byTask = [...sums.values()].map((v) => ({ ...v, percent: Math.round(v.solved / v.checked * 100) })).sort((a,b) => a.number-b.number);
  const weak = [...byTask].sort((a,b) => a.percent-b.percent || b.checked-a.checked || a.number-b.number);
  const byTrial = checked.filter((t) => byTrialMap.has(t.id)).map((t) => ({ trial: t, rows: byTrialMap.get(t.id).sort((a,b) => a.number-b.number) }));
  return { checked, byTask, weak, byTrial };
}
function groupTaskKeys(groups) {
  return new Set(groups.flatMap((g) => g.rows.flatMap((row) => row.taskKeys || (row.modules || []).flatMap((moduleId) => (catalog[moduleId] || []).map((id) => `${moduleId}:${id}`)))));
}
export function practiceTotals(course, progress) {
  const keys = groupTaskKeys(practiceGroups(course, progress));
  const done = new Set(progress.map((p) => `${p.module}:${p.taskId}`).filter((key) => keys.has(key)));
  return { done: done.size, total: keys.size };
}
export async function getCourseProgress(db, studentId, course, includeWork) {
  const progress = await db.all('SELECT module,taskId,completedAt FROM TaskProgress WHERE userId=?', [studentId]);
  const groups = practiceGroups(course, progress);
  const courseKeys = groupTaskKeys(groups);
  const perDay = new Map();
  const formatter = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Moscow' });
  for (const p of progress) {
    const date = new Date(p.completedAt);
    if (!courseKeys.has(`${p.module}:${p.taskId}`) || Number.isNaN(date.valueOf())) continue;
    const day = formatter.format(date);
    perDay.set(day, (perDay.get(day) || 0) + 1);
  }
  let cumulative = 0;
  const practiceTimeline = [...perDay].sort(([a], [b]) => a.localeCompare(b)).map(([date, count]) => ({ date, value: cumulative += count }));
  const homework = includeWork ? await db.all("SELECT id,title,status,mark,createdAt,courseId FROM Homework WHERE userId=? AND (courseId=? OR courseId='legacy') ORDER BY createdAt DESC", [studentId, course]) : [];
  const trials = includeWork ? await db.all("SELECT id,title,status,score,maxScore,date,courseId,comment,solutionUrl FROM Trial WHERE userId=? AND (courseId=? OR courseId='legacy') ORDER BY date,id", [studentId, course]) : [];
  const results = includeWork ? await db.all("SELECT r.trialId,r.taskNumber,r.solved FROM TrialTaskResult r JOIN Trial t ON t.id=r.trialId WHERE t.userId=? AND t.courseId=? AND t.status='Проверено'", [studentId, course]) : [];
  return { groups, homework, trials, results, practiceTimeline, ...trialInsights(trials, results, course) };
}
