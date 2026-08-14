import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { redirect } from 'next/navigation';
import { getCurrentUser } from '../../../login/actions';
import { revalidatePath } from 'next/cache';
import { InlineMath, BlockMath } from 'react-katex';

// Автоматический сбор живого объема задач платформы из файлов банка
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

async function connectDB() {
  return open({
    filename: path.join(process.cwd(), 'prisma', 'dev.db'),
    driver: sqlite3.Database
  });
}

// SERVER ACTION 1: Переключение тарифа подписки
async function toggleStudentPremium(formData) {
  'use server';
  const studentId = formData.get('studentId');
  const currentStatus = formData.get('currentStatus') === 'true';
  let db;
  try {
    db = await connectDB();
    const newRole = currentStatus ? 'STUDENT' : 'PREMIUM_STUDENT';
    await db.run("UPDATE User SET role = ? WHERE id = ?", [newRole, studentId]);
    revalidatePath(`/supervisor/students/${studentId}`);
  } catch (err) { console.error(err); } finally { if (db) await db.close(); }
}

// SERVER ACTION 2: Живое сохранение оценки ДЗ куратором
async function saveHomeworkMark(formData) {
  'use server';
  const hwId = formData.get('hwId');
  const studentId = formData.get('studentId');
  const mark = formData.get('mark');
  const comment = formData.get('comment');

  let db;
  try {
    db = await connectDB();
    await db.run(
      "UPDATE Homework SET mark = ?, comment = ?, status = 'Проверено' WHERE id = ?",
      [mark.trim() || '—', comment.trim(), hwId]
    );
    revalidatePath(`/supervisor/students/${studentId}`);
  } catch (err) { console.error(err); } finally { if (db) await db.close(); }
}

// SERVER ACTION 3: Живое сохранение баллов за пробник
async function saveTrialScore(formData) {
  'use server';
  const trialId = formData.get('trialId');
  const studentId = formData.get('studentId');
  const score = parseInt(formData.get('score')) || 0;

  let db;
  try {
    db = await connectDB();
    await db.run("UPDATE Trial SET score = ? WHERE id = ?", [score, trialId]);
    revalidatePath(`/supervisor/students/${studentId}`);
  } catch (err) { console.error(err); } finally { if (db) await db.close(); }
}
export default async function StudentProfilePage({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams?.id;
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== 'ADMIN') redirect('/login?error=wrong');

  let db;
  let rawStudent = null;
  let solvedTasksBySections = {}; 
  let totalSolvedCount = 0;
  let currentHomeworks = [];
  let currentTrials = [];

  try {
    db = await connectDB();
    rawStudent = await db.get("SELECT id, name, email, role, createdAt FROM User WHERE id = ?", [id]);
    if (!rawStudent && !isNaN(id)) {
      rawStudent = await db.get("SELECT id, name, email, role, createdAt FROM User WHERE id = ?", [Number(id)]);
    }
    if (!rawStudent) {
      rawStudent = await db.get("SELECT id, name, email, role, createdAt FROM User WHERE email = ?", [id]);
    }

    if (!rawStudent) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#03000a]">
          <p className="text-sm font-bold text-slate-400">Ученик не найден в базе данных.</p>
        </div>
      );
    }

    const progressRows = await db.all("SELECT taskNumber FROM Progress WHERE userId = ?", [rawStudent.id]);
    totalSolvedCount = progressRows.length;

    progressRows.forEach(row => {
      const sectionNum = Math.floor(row.taskNumber / 100);
      if (sectionNum >= 1 && sectionNum <= 19) {
        solvedTasksBySections[sectionNum] = (solvedTasksBySections[sectionNum] || 0) + 1;
      }
    });

    // 🚀 Считываем только реальные записи из таблиц SQLite - никаких захардкоженных массивов-заглушек!
    currentHomeworks = await db.all("SELECT * FROM Homework WHERE userId = ? ORDER BY createdAt DESC", [rawStudent.id]);
    currentTrials = await db.all("SELECT * FROM Trial WHERE userId = ? ORDER BY date DESC", [rawStudent.id]);

  } catch (e) { console.error(e); } finally { if (db) await db.close(); }

  const isPremium = rawStudent.role === 'PREMIUM_STUDENT';

  const totalTasksConfig = {
    1: section1Tasks?.length || 0, 2: section2Tasks?.length || 0, 3: section3Tasks?.length || 0,
    4: section4Tasks?.length || 0, 5: section5Tasks?.length || 0, 6: section6Tasks?.length || 0,
    7: section7Tasks?.length || 0, 8: section8Tasks?.length || 0, 9: section9Tasks?.length || 0,
    10: section10Tasks?.length || 0, 11: section11Tasks?.length || 0, 12: section12Tasks?.length || 0,
    13: section13Tasks?.length || 0, 14: section14Tasks?.length || 0, 15: section15Tasks?.length || 0,
    16: section16Tasks?.length || 0, 17: section17Tasks?.length || 0, 18: section18Tasks?.length || 0,
    19: section19Tasks?.length || 0
  };

  const platformTotalTasks = Object.values(totalTasksConfig).reduce((a, b) => a + b, 0);
  const platformPercentage = platformTotalTasks > 0 ? Math.min(Math.round((totalSolvedCount / platformTotalTasks) * 100), 100) : 0;
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#03000a] p-6 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-500">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Кнопка управления */}
        <div className="flex items-center justify-between">
          <a href="/admin-panel" className="text-xs font-black uppercase tracking-wider text-slate-400 hover:text-sky-500 transition-colors">
            ← Назад в админку
          </a>
          
          <form action={toggleStudentPremium}>
            <input type="hidden" name="studentId" value={rawStudent.id} />
            <input type="hidden" name="currentStatus" value={String(isPremium)} />
            <button type="submit" className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-sm cursor-pointer ${
              isPremium ? 'bg-sky-500 text-white shadow-sky-500/10' : 'bg-slate-200 text-slate-600 dark:bg-purple-950/40 dark:text-purple-300'
            }`}>
              {isPremium ? 'Платный курс: Активен (Выключить)' : 'Перевести на Платный курс'}
            </button>
          </form>
        </div>

        {/* Досье студента */}
        <div className="bg-white/80 dark:bg-[#140e24]/80 backdrop-blur-md p-6 rounded-3xl border border-blue-100/60 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-400 to-blue-600 text-white font-black text-2xl flex items-center justify-center uppercase select-none shadow-md">
              {rawStudent.name ? rawStudent.name.charAt(0) : 'U'}
            </div>
            <div>
              <h1 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">{rawStudent.name}</h1>
              <p className="text-xs text-slate-400 font-medium mt-0.5">{rawStudent.email}</p>
              <p className="text-[10px] text-slate-400 mt-1">Доступ: {isPremium ? 'Мастер-группа' : 'Обычный доступ'}</p>
            </div>
          </div>

          <div className="w-full sm:w-64 bg-slate-50/50 dark:bg-purple-950/10 p-4 rounded-2xl border border-slate-100">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider">Общий прогресс банка</span>
              <span className="text-xs font-bold text-sky-600 dark:text-purple-400">{platformPercentage}%</span>
            </div>
            <div className="w-full bg-slate-200/60 dark:bg-purple-950/40 h-2 rounded-full overflow-hidden mb-1">
              <div className="bg-gradient-to-r from-sky-400 to-blue-500 h-full rounded-full" style={{ width: `${platformPercentage}%` }} />
            </div>
            <span className="text-[10px] text-slate-400 font-medium">Решено: {totalSolvedCount} из {platformTotalTasks} задач</span>
          </div>
        </div>

        {/* Сетка шкал банка */}
        <div className="bg-white/80 dark:bg-[#140e24]/80 backdrop-blur-md p-6 rounded-3xl border border-blue-100/60 shadow-sm space-y-6">
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-sky-500 dark:text-purple-400 mb-3">Первая часть ЕГЭ (Краткий ответ)</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {Object.keys(totalTasksConfig).slice(0, 12).map((numKey) => {
                const num = parseInt(numKey);
                const solved = solvedTasksBySections[num] || 0;
                const total = totalTasksConfig[num] || 5;
                const pct = Math.min(Math.round((solved / total) * 100), 100);
                return (
                  <div key={num} className="p-3.5 bg-slate-50/50 dark:bg-purple-950/5 rounded-2xl border border-slate-100">
                    <div className="flex justify-between items-center mb-1"><span className="text-[11px] font-black text-slate-600 dark:text-slate-400">№{num} задание</span><span className="text-[10px] font-bold text-slate-500">{solved}/{total}</span></div>
                    <div className="w-full bg-slate-200 dark:bg-purple-950/40 h-1 rounded-full overflow-hidden"><div className="bg-sky-400 h-full rounded-full" style={{ width: `${pct}%` }} /></div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-purple-950/20">
            <h3 className="text-xs font-black uppercase tracking-wider text-sky-500 dark:text-purple-400 mb-3">Вторая часть ЕГЭ (Развёрнутый ответ)</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {Object.keys(totalTasksConfig).slice(12, 19).map((numKey) => {
                const num = parseInt(numKey);
                const solved = solvedTasksBySections[num] || 0;
                const total = totalTasksConfig[num] || 10;
                const pct = Math.min(Math.round((solved / total) * 100), 100);
                return (
                  <div key={num} className="p-4 bg-slate-50/60 dark:bg-purple-950/10 rounded-2xl border border-slate-100">
                    <div className="flex justify-between items-center mb-1"><span className="text-xs font-black text-slate-700 dark:text-slate-300">Задание №{num}</span><span className="text-[11px] font-bold text-sky-600 dark:text-purple-400">{solved}/{total}</span></div>
                    <div className="w-full bg-slate-200 dark:bg-purple-950/40 h-1.5 rounded-full overflow-hidden"><div className="bg-sky-500 h-full rounded-full" style={{ width: `${pct}%` }} /></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Ведомости с проверкой на отсутствие выданных элементов */}
        {isPremium ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Домашние задания */}
            <div className="md:col-span-2 bg-white/80 dark:bg-[#140e24]/80 backdrop-blur-md p-6 rounded-3xl border border-blue-100/60 shadow-sm space-y-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">Управление домашними заданиями (Проверка куратора)</h3>
              <div className="space-y-4">
                {currentHomeworks.length === 0 ? (
                  <p className="text-xs font-bold text-slate-400 text-center py-6">Этому ученику пока не выдано ни одной домашней работы.</p>
                ) : (
                  currentHomeworks.map((hw) => (
                    <div key={hw.id} className="p-4 bg-slate-50/50 dark:bg-purple-950/5 rounded-2xl border border-slate-100 space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-sm font-black text-slate-800 dark:text-slate-200 tracking-tight">{hw.title}</h4>
                          <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md mt-1 inline-block ${
                            hw.status === 'Проверено' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                          }`}>{hw.status}</span>
                        </div>
                        <span className="text-base font-black text-sky-500 dark:text-purple-400">{hw.mark}</span>
                      </div>

                      <form action={saveHomeworkMark} className="flex items-center gap-2 pt-2 border-t border-slate-200/40">
                        <input type="hidden" name="hwId" value={hw.id} />
                        <input type="hidden" name="studentId" value={rawStudent.id} />
                        <input type="text" name="mark" placeholder="Балл (напр. 5/5)" defaultValue={hw.mark !== '—' ? hw.mark : ''} required className="bg-slate-50 border rounded-lg px-2 py-1 text-xs w-20 text-center font-bold" />
                        <input type="text" name="comment" placeholder="Комментарий куратора..." defaultValue={hw.comment || ''} className="bg-slate-50 border rounded-lg px-3 py-1 text-xs flex-grow" />
                        <button type="submit" className="bg-sky-500 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-lg">Оценить</button>
                      </form>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Официальные пробники */}
            <div className="bg-white/80 dark:bg-[#140e24]/80 backdrop-blur-md p-6 rounded-3xl border border-blue-100/60 shadow-sm h-fit space-y-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">Официальные пробники ЕГЭ</h3>
              <div className="space-y-4">
                {/* 🚀 ИСПРАВЛЕНО: Полностью зачистили фейковый пробник! Теперь тут выводится честный чистый текст */}
                {currentTrials.length === 0 ? (
                  <p className="text-xs font-bold text-slate-400 text-center py-8">Ученик ещё не писал пробные экзамены.</p>
                ) : (
                  currentTrials.map((t) => (
                    <div key={t.id} className="p-4 bg-slate-50/50 dark:bg-purple-950/5 rounded-2xl border border-slate-100 space-y-3">
                      <div className="flex justify-between items-center text-xs font-bold">
                        <span className="text-slate-700 dark:text-slate-300">{t.title}</span>
                        <span className="text-sky-500 dark:text-purple-400 font-black">{t.score} б.</span>
                      </div>

                      <form action={saveTrialScore} className="flex gap-2">
                        <input type="hidden" name="trialId" value={t.id} />
                        <input type="hidden" name="studentId" value={rawStudent.id} />
                        <input type="number" name="score" placeholder="Балл" defaultValue={t.score || ''} required className="bg-white dark:bg-[#0c0714] border dark:border-purple-500/10 rounded-xl px-2 py-1.5 text-xs w-16 text-center font-bold focus:outline-none" />
                        <button type="submit" className="bg-sky-500 hover:bg-sky-600 text-white text-[10px] font-black uppercase tracking-wider py-1.5 rounded-xl flex-grow shadow-md transition-colors cursor-pointer">Записать</button>
                      </form>
                    </div>
                  ))
                )}
              </div>
            </div>

          </div>
        ) : (
          <div className="bg-slate-100/50 dark:bg-[#140e24]/30 p-8 rounded-3xl text-center border border-dashed border-slate-200">
            <p className="text-sm font-bold text-slate-700 dark:text-slate-300">Интеграция кураторского трекера отключена</p>
            <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1 leading-relaxed">
              Переведите ученика на платный курс мастер-группы, чтобы открыть кураторские ведомости.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
