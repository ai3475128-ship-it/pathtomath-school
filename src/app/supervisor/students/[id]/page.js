import { displayNumberForModule } from '@/lib/ege-sections';
import { connectDB } from '@/lib/db';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { requireManagement,requireAdmin } from '@/lib/auth';
import { notFound } from 'next/navigation';
import { getEgeProgress } from '@/lib/task-modules';
import { checkHomeworkMark as saveHomeworkMark,checkTrialMark as saveTrialScore } from '../../../course-actions';
import Link from 'next/link';

// 🚀 СИНХРОНИЗИРОВАНО С PROFILE: Точные относительные импорты разделов один в один
import { section1Tasks } from '../../../math-profile/[taskNumber]/sectoin1';
import { section2Tasks } from '../../../math-profile/[taskNumber]/sectoin2';
import { section3Tasks } from '../../../math-profile/[taskNumber]/sectoin3';
import { section4Tasks } from '../../../math-profile/[taskNumber]/sectoin4';
import { section5Tasks } from '../../../math-profile/[taskNumber]/sectoin5';
import { section6Tasks } from '../../../math-profile/[taskNumber]/sectoin6';
import { section7Tasks } from '../../../math-profile/[taskNumber]/sectoin7';
import { section8Tasks } from '../../../math-profile/[taskNumber]/sectoin8';
import { section9Tasks } from '../../../math-profile/[taskNumber]/sectoin9';
import { section10Tasks } from '../../../math-profile/[taskNumber]/sectoin10';
import { section11Tasks } from '../../../math-profile/[taskNumber]/sectoin11';
import { section12Tasks } from '../../../math-profile/[taskNumber]/sectoin12';
import { section13Tasks } from '../../../math-profile/[taskNumber]/section13';
import { section14Tasks } from '../../../math-profile/[taskNumber]/section14';
import { section15Tasks } from '../../../math-profile/[taskNumber]/section15';
import { section16Tasks } from '../../../math-profile/[taskNumber]/sectoin16';
import { section17Tasks } from '../../../math-profile/[taskNumber]/sectoin17';
import { section18Tasks } from '../../../math-profile/[taskNumber]/sectoin18';
import { section19Tasks } from '../../../math-profile/[taskNumber]/sectoin19';

// SERVER ACTION 1: Изменение тарифа подписки (Доступно только ADMIN)
async function toggleStudentPremium(formData) {
  'use server';
  await requireAdmin();
  const studentId = formData.get('studentId');
  let db;
  try {
    db = await connectDB();
    await db.run("UPDATE User SET role=CASE WHEN role='PREMIUM_STUDENT' THEN 'STUDENT' ELSE 'PREMIUM_STUDENT' END WHERE id=? AND role IN ('STUDENT','PREMIUM_STUDENT')",[studentId]);
    revalidatePath(`/supervisor/students/${studentId}`);
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    if (db) await db.close();
  }
}

export default async function StudentProfilePage({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams?.id;

  const currentUser = await requireManagement();

  let db;
  let rawStudent = null;
  let solvedStatsBySection = {}; // Строка 102 в profile/page.js
  let totalSolvedCount = 0;
  let currentHomeworks = [];
  let currentTrials = [];

  try {
    db = await connectDB();
    
    rawStudent = await db.get("SELECT id, name, email, role, createdAt FROM User WHERE id = ?", [id]);
    if (!rawStudent || !['STUDENT','PREMIUM_STUDENT'].includes(rawStudent.role)) notFound();
    const progressRows = await getEgeProgress(db,rawStudent.id);
    totalSolvedCount = progressRows.length;

    // Расчет решенных задач ученика по секциям (Строки 103-108 в profile/page.js)
    progressRows.forEach(({ section: sectionNum }) => {
      if (sectionNum >= 1 && sectionNum <= 20) {
        solvedStatsBySection[sectionNum] = (solvedStatsBySection[sectionNum] || 0) + 1;
      }
    });

    currentHomeworks = await db.all("SELECT * FROM Homework WHERE userId = ? ORDER BY createdAt DESC", [rawStudent.id]);
    currentTrials = await db.all("SELECT * FROM Trial WHERE userId = ? ORDER BY date DESC", [rawStudent.id]);

  } catch (e) {
    throw e;
  } finally {
    if (db) await db.close();
  }

  // 🚀 КЛОНИРОВАНО ИЗ PROFILE: Точное название объекта и подсчет .length (Строки 110-118 в profile/page.js)
  const oldTotalsBySection = {
    1: section1Tasks?.length || 0, 2: section2Tasks?.length || 0, 3: section3Tasks?.length || 0,
    4: section4Tasks?.length || 0, 5: section5Tasks?.length || 0, 6: section6Tasks?.length || 0,
    7: section7Tasks?.length || 0, 8: section8Tasks?.length || 0, 9: section9Tasks?.length || 0,
    10: section10Tasks?.length || 0, 11: section11Tasks?.length || 0, 12: section12Tasks?.length || 0,
    13: section13Tasks?.length || 0, 14: section14Tasks?.length || 0, 15: section15Tasks?.length || 0,
    16: section16Tasks?.length || 0, 17: section17Tasks?.length || 0, 18: section18Tasks?.length || 0,
    19: section19Tasks?.length || 0
  };
  const totalStatsBySection = {};
  for (const [module, count] of Object.entries(oldTotalsBySection)) {
    const number = displayNumberForModule(module);
    if (number) totalStatsBySection[number] = (totalStatsBySection[number] || 0) + count;
  }

  const isPremium = rawStudent.role === 'PREMIUM_STUDENT';
  const platformTotalTasks = Object.values(totalStatsBySection).reduce((a, b) => a + b, 0);
  const platformPercentage = platformTotalTasks > 0 ? Math.min(Math.round((totalSolvedCount / platformTotalTasks) * 100), 100) : 0;
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#03000a] p-6 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-500">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Навигация */}
        <div className="flex items-center justify-between">
          <Link href="/teacher-dashboard" className="text-xs font-bold text-slate-400 hover:text-sky-500 transition-colors">
            ← Назад в личный кабинет
          </Link>

          {/* Кнопка подписки скрыта от преподавателей и доступна только для ADMIN */}
          {currentUser.role === 'ADMIN' && (
            <form action={toggleStudentPremium}>
              <input type="hidden" name="studentId" value={rawStudent.id} />
              <input type="hidden" name="currentStatus" value={isPremium ? 'true' : 'false'} />
              <button type="submit" className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-sm ${
                isPremium ? 'bg-sky-500 text-white shadow-sky-500/10' : 'bg-slate-200 text-slate-600 dark:bg-purple-950/40 dark:text-purple-300'
              }`}>
                {isPremium ? '💎 Платный курс: Активен (Выключить)' : 'Перевести на Платный курс'}
              </button>
            </form>
          )}
        </div>

        {/* Досье ученика */}
        <div className="bg-white/80 dark:bg-[#140e24]/80 backdrop-blur-md p-6 rounded-3xl border border-blue-100/60 shadow-xl flex flex-col sm:flex-row gap-4 items-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-sky-400 to-blue-600 flex items-center justify-center text-white font-black text-2xl shrink-0">
            {rawStudent.name ? rawStudent.name.charAt(0) : 'U'}
          </div>
          <div>
            <h1 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">{rawStudent.name}</h1>
            <p className="text-xs text-slate-400 font-medium mt-0.5">{rawStudent.email}</p>
          </div>
        </div>

        {/* Сводный прогресс банка */}
        <div className="w-full sm:w-64 bg-white dark:bg-purple-950/10 p-4 rounded-2xl border dark:border-purple-500/5 shadow-sm">
          <div className="flex justify-between items-center mb-1.5 text-[11px] font-black uppercase text-slate-400">
            <span>Общий прогресс</span>
            <span className="text-sky-600 dark:text-purple-400 font-mono">{platformPercentage}%</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-purple-950/40 h-2 rounded-full overflow-hidden mb-1">
            <div className="bg-gradient-to-r from-sky-400 to-blue-500 h-full rounded-full transition-all duration-500" style={{ width: `${platformPercentage}%` }} />
          </div>
          <span className="text-[10px] text-slate-400 font-medium">Решено {totalSolvedCount} из {platformTotalTasks} задач</span>
        </div>

        {/* Сетка шкал банка задач */}
        <div className="bg-white/80 dark:bg-[#140e24]/80 backdrop-blur-md p-6 rounded-3xl border border-blue-100/60 shadow-sm space-y-6">
          
          {/* Первая часть ЕГЭ (Задания 1-13) */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-sky-500 dark:text-purple-400 mb-3 border-b dark:border-purple-950/20 pb-1">Первая часть ЕГЭ (Задания 1-13)</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {[...Array(13)].map((_, i) => {
                const taskNum = i + 1;
                
                // 🚀 СИНХРОНИЗИРОВАНО С ЛК УЧЕНИКА: Строки 158-159 из profile/page.js
                const sectionSolved = solvedStatsBySection[taskNum] || 0;
                const sectionTotal = totalStatsBySection[taskNum] || 10;
                
                const finalSolved = Math.min(sectionSolved, sectionTotal);
                const pct = sectionTotal > 0 ? Math.min(Math.round((finalSolved / sectionTotal) * 100), 100) : 0;

                return (
                  <div key={taskNum} className="p-3 bg-slate-50/50 dark:bg-purple-950/5 rounded-2xl border border-slate-100 dark:border-purple-500/5">
                    <div className="flex justify-between items-center mb-1 text-[11px] font-black uppercase text-slate-400">
                      <span>№{taskNum}</span>
                      <span className="font-mono text-sky-600 dark:text-purple-400">{finalSolved}/{sectionTotal}</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-purple-950/40 h-1 rounded-full overflow-hidden">
                      <div className="bg-sky-500 dark:bg-[#634EE4] h-full rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Вторая часть ЕГЭ (Задания 14-20) */}
          <div className="pt-4 border-t border-slate-100 dark:border-purple-950/20">
            <h3 className="text-xs font-black uppercase tracking-wider text-sky-500 dark:text-purple-400 mb-3 border-b dark:border-purple-950/20 pb-1">Вторая часть ЕГЭ (Задания 14-20)</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {[...Array(7)].map((_, i) => {
                const taskNum = i + 14;
                
                // 🚀 СИНХРОНИЗИРОВАНО С ЛК УЧЕНИКА: Строки 158-159 из profile/page.js
                const sectionSolved = solvedStatsBySection[taskNum] || 0;
                const sectionTotal = totalStatsBySection[taskNum] || 10;
                
                const finalSolved = Math.min(sectionSolved, sectionTotal);
                const pct = sectionTotal > 0 ? Math.min(Math.round((finalSolved / sectionTotal) * 100), 100) : 0;

                return (
                  <div key={taskNum} className="p-3 bg-slate-50/50 dark:bg-purple-950/5 rounded-2xl border border-slate-100 dark:border-purple-500/5">
                    <div className="flex justify-between items-center mb-1 text-[11px] font-black uppercase text-slate-400">
                      <span>№{taskNum}</span>
                      <span className="font-mono text-sky-600 dark:text-purple-400">{finalSolved}/{sectionTotal}</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-purple-950/40 h-1 rounded-full overflow-hidden">
                      <div className="bg-sky-500 dark:bg-[#634EE4] h-full rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Панели контроля ведомостей оценок куратора */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          
          {/* Блок Проверки ДЗ */}
          <div className="bg-white/80 dark:bg-[#140e24]/80 backdrop-blur-md p-6 rounded-3xl border-none shadow-sm space-y-4">
            <h3 className="text-xs font-black uppercase tracking-wider text-sky-600 dark:text-purple-400 border-b dark:border-purple-950/40 pb-2">домашние задания</h3>
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-1">
              {currentHomeworks.length === 0 ? (
                <p className="text-xs font-bold text-slate-400 text-center py-6"></p>
              ) : (
                currentHomeworks.map((hw) => (
                  <div key={hw.id} className="p-4 bg-slate-50/50 dark:bg-purple-950/5 border-none shadow-sm rounded-2xl flex flex-col gap-3">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="text-sm font-black text-slate-800 dark:text-slate-200 tracking-tight">{hw.title}</h4>
                        <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-md mt-1 inline-block ${hw.status === 'Проверено' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>{hw.status}</span>
                      </div>
                      {hw.solutionUrl && <a href={hw.solutionUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-sky-500 font-black uppercase tracking-wider underline cursor-pointer shrink-0">📄 Бланки решения</a>}
                    </div>

                    <form action={saveHomeworkMark} className="flex gap-2 pt-2 border-t border-slate-200/40">
                      <input type="hidden" name="hwId" value={hw.id} />
                      <input type="hidden" name="studentId" value={rawStudent.id} />
                      <input type="text" name="mark" defaultValue={hw.mark} placeholder="Оценка" required className="bg-white dark:bg-[#0c0714] border dark:border-purple-500/10 rounded-xl px-2 py-2 text-xs w-16 text-center font-black text-sky-600 focus:outline-none" />
                      <input type="text" name="comment" defaultValue={hw.comment} placeholder="Комментарий куратора..." className="bg-white dark:bg-[#0c0714] border dark:border-purple-500/10 rounded-xl px-3 py-2 text-xs flex-grow font-medium focus:outline-none focus:border-sky-500" />
                      <button type="submit" className="bg-sky-500 dark:bg-[#634EE4] hover:brightness-105 text-white text-[10px] font-black uppercase tracking-wider px-3 py-2 rounded-xl transition-all cursor-pointer">ОК</button>
                    </form>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Блок Проверки Пробников */}
          <div className="bg-white/80 dark:bg-[#140e24]/80 backdrop-blur-md p-6 rounded-3xl border-none shadow-sm space-y-4">
            <h3 className="text-xs font-black uppercase tracking-wider text-sky-600 dark:text-purple-400 border-b dark:border-purple-950/40 pb-2">пробники ЕГЭ</h3>
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-1">
              {currentTrials.length === 0 ? (
                <p className="text-xs font-bold text-slate-400 text-center py-6"></p>
              ) : (
                currentTrials.map((t) => (
                  <div key={t.id} className="p-4 bg-slate-50/50 dark:bg-purple-950/5 border-none shadow-sm rounded-2xl flex flex-col gap-3">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="text-sm font-black text-slate-800 dark:text-slate-200 tracking-tight">{t.title}</h4>
                        <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-md mt-1 inline-block ${t.status === 'Проверено' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>{t.status === 'Проверено' ? `Проверено: ${t.score} б.` : 'Ожидает проверки'}</span>
                      </div>
                      {t.solutionUrl && <a href={t.solutionUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-sky-500 font-black uppercase tracking-wider underline cursor-pointer shrink-0">📄 Бланки ответов</a>}
                    </div>

                    <form action={saveTrialScore} className="flex gap-2 pt-2 border-t border-slate-200/40">
                      <input type="hidden" name="trialId" value={t.id} />
                      <input type="hidden" name="studentId" value={rawStudent.id} />
                      <input type="number" name="score" defaultValue={t.score ?? ''} placeholder="Балл" required className="bg-white dark:bg-[#0c0714] border dark:border-purple-500/10 rounded-xl px-2 py-2 text-xs w-16 text-center font-black text-sky-600 focus:outline-none" />
                      <button type="submit" className="bg-sky-500 dark:bg-[#634EE4] hover:brightness-105 text-white text-[10px] font-black uppercase tracking-wider px-3 py-2 rounded-xl transition-all cursor-pointer">ОК</button>
                    </form>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
