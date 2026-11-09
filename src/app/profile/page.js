import { displayNumberForModule } from '@/lib/ege-sections';
import { getCurrentUser } from '@/lib/auth';
import { getEgeProgress } from '@/lib/task-modules';
import { connectDB } from '@/lib/db';
import Link from 'next/link';
import { redirect } from 'next/navigation';

// ИМПОРТЫ СЕКЦИЙ БАНКА ЗАДАНИЙ: Для автоматического расчёта живых знаменателей платформы
import { section1Tasks } from '../math-profile/[taskNumber]/sectoin1';
import { section2Tasks } from '../math-profile/[taskNumber]/sectoin2';
import { section3Tasks } from '../math-profile/[taskNumber]/sectoin3';
import { section4Tasks } from '../math-profile/[taskNumber]/sectoin4';
import { section5Tasks } from '../math-profile/[taskNumber]/sectoin5';
import { section6Tasks } from '../math-profile/[taskNumber]/sectoin6';
import { section7Tasks } from '../math-profile/[taskNumber]/sectoin7';
import { section8Tasks } from '../math-profile/[taskNumber]/sectoin8';
import { section9Tasks } from '../math-profile/[taskNumber]/sectoin9';
import { section10Tasks } from '../math-profile/[taskNumber]/sectoin10';
import { section11Tasks } from '../math-profile/[taskNumber]/sectoin11';
import { section12Tasks } from '../math-profile/[taskNumber]/sectoin12';
import { section13Tasks } from '../math-profile/[taskNumber]/section13';
import { section14Tasks } from '../math-profile/[taskNumber]/section14';
import { section15Tasks } from '../math-profile/[taskNumber]/section15';
import { section16Tasks } from '../math-profile/[taskNumber]/sectoin16';
import { section17Tasks } from '../math-profile/[taskNumber]/sectoin17';
import { section18Tasks } from '../math-profile/[taskNumber]/sectoin18';
import { section19Tasks } from '../math-profile/[taskNumber]/sectoin19';
import { egeOptimizationTasks } from '../math-profile/[taskNumber]/ege-optimization';

// Один чистый импорт функции базы данных из init-db и экшена из actions
import { initProgressTable } from './init-db';
import { saveDailyNote } from './actions';



async function getProfileData() {
  await initProgressTable();
  const user = await getCurrentUser();
  if (!user) return null;

  let db;
  try {
    db = await connectDB();
    const solvedTasks = await getEgeProgress(db, user.id);

    const allNotes = await db.all('SELECT dateText, content FROM Notes WHERE userId = ?', [user.id]);
    const notesMap = {};
    allNotes.forEach(note => {
      notesMap[note.dateText] = note.content;
    });

    const homeworks = await db.all('SELECT * FROM Homework WHERE userId = ? ORDER BY createdAt DESC', [user.id]);
    const trials = await db.all('SELECT * FROM Trial WHERE userId = ? ORDER BY date DESC', [user.id]);

    return { user, solvedTasks, notesMap, homeworks, trials };
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    if (db) await db.close();
  }
}
export default async function ProfilePage({ searchParams }) {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  
  const resolvedSearchParams = await searchParams;
  const todayStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  const selectedDate = resolvedSearchParams?.date || todayStr;

  const data = await getProfileData();
  if (!data) redirect('/login');

  const { user, solvedTasks, notesMap, homeworks, trials } = data;
  const currentNoteContent = notesMap[selectedDate] || '';

  const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
  const startOffset = firstDayIndex === 0 ? 6 : firstDayIndex - 1;

  const solvedStatsBySection = {};
  solvedTasks.forEach(({ section: sectionNum }) => {
    if (sectionNum >= 1 && sectionNum <= 20) {
      solvedStatsBySection[sectionNum] = (solvedStatsBySection[sectionNum] || 0) + 1;
    }
  });

  const oldTotalsBySection = {
    1: section1Tasks?.length || 0,  2: section2Tasks?.length || 0,  3: section3Tasks?.length || 0,
    4: section4Tasks?.length || 0,  5: section5Tasks?.length || 0,  6: section6Tasks?.length || 0,
    7: section7Tasks?.length || 0,  8: section8Tasks?.length || 0,  9: section9Tasks?.length || 0,
    10: section10Tasks?.length || 0, 11: section11Tasks?.length || 0, 12: section12Tasks?.length || 0,
    13: section13Tasks?.length || 0, 14: section14Tasks?.length || 0, 15: section15Tasks?.length || 0,
    16: section16Tasks?.length || 0, 17: section17Tasks?.length || 0, 18: section18Tasks?.length || 0,
    19: section19Tasks?.length || 0, 'ege-optimization': egeOptimizationTasks.length
  };
  const totalStatsBySection = {};
  for (const [module, count] of Object.entries(oldTotalsBySection)) {
    const number = displayNumberForModule(module);
    if (number) totalStatsBySection[number] = (totalStatsBySection[number] || 0) + count;
  }

  const totalTasks = 20;
  const solvedTasksList = Array.from(new Set(solvedTasks.map(({ section }) => section))).filter(num => num >= 1 && num <= 20);

  const validTrials = trials.filter(t => t.status === 'Проверено');
  const averageTrialScore = validTrials.length > 0
    ? Math.round(validTrials.reduce((sum, t) => sum + t.score, 0) / validTrials.length)
    : 0;

  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (averageTrialScore / 100) * circumference;

  return (
    <div className="min-h-screen p-6 transition-colors duration-500 bg-slate-50 dark:bg-[#03000a] text-slate-800 dark:text-slate-100 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 pt-24">
        
        {/* ЛЕВАЯ КОЛОНКА (2/3) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Профиль ученика */}
          <div className="bg-white dark:bg-[#140e24]/80 p-5 rounded-3xl border border-blue-100/60 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-[10px] font-black uppercase text-sky-600 dark:text-purple-400 bg-sky-50 dark:bg-purple-950/40 px-2 py-0.5 rounded-md mt-1.5 tracking-tight">Профиль ученика</span>
              <h1 className="text-xl font-black text-slate-600 dark:text-purple-400 tracking-tight mt-1">{user.name}</h1>
              <p className="text-xs text-slate-400 font-medium mt-0.5">{user.email}</p>
            </div>
            <span className="text-xs font-black uppercase tracking-wider text-sky-600 dark:text-purple-400">
               {user.role === 'PREMIUM_STUDENT' ? '' : user.role === 'ADMIN' ? 'Руководитель' : user.role === 'TEACHER' ? 'Преподаватель' : ''}
            </span>
          </div>

          {/* Чек-лист подготовки шкал */}
          <div className="bg-white dark:bg-[#140e24]/80 p-6 rounded-3xl border border-blue-100/60 shadow-sm">
            <h3 className="text-sm font-black text-slate-600 dark:text-purple-400 tracking-tight mb-4 uppercase">Прогресс подготовки по темам КИМ</h3>
            <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-sky-200 dark:scrollbar-thumb-purple-950">
              {[...Array(totalTasks)].map((_, i) => {
                const taskNum = i + 1;
                const isSolved = solvedTasksList.includes(taskNum);
                const sectionSolved = solvedStatsBySection[taskNum] || 0;
                const sectionTotal = totalStatsBySection[taskNum] || 10;
                const sectionPercentage = sectionTotal > 0 ? Math.min(Math.round((sectionSolved / sectionTotal) * 100), 100) : 0;

                return (
                  <Link
                    key={taskNum} href={`/math-profile/${taskNum}`} scroll={false}
                    className={`group flex flex-col p-3 rounded-xl border transition-all duration-300 hover:scale-[1.002] ${
                      isSolved
                        ? 'bg-blue-50/30 border-blue-100/40 dark:bg-purple-950/10 dark:border-purple-500/10 hover:bg-sky-500 dark:hover:bg-[#634EE4]'
                        : 'bg-white border-slate-100 dark:bg-slate-900/10 dark:border-purple-500/5 hover:bg-sky-500 dark:hover:bg-[#634EE4]'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full text-xs font-bold">
                      <div className="flex items-center gap-3">
                        <span className="text-slate-600 dark:text-purple-400 group-hover:text-white transition-colors">Задание №{taskNum}</span>
                      </div>
                      <span className="font-mono text-sky-600 dark:text-purple-400 group-hover:text-white transition-colors">
                        {sectionSolved}/{sectionTotal}
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-purple-950/40 h-1 rounded-full overflow-hidden mt-2 group-hover:bg-white/20">
                      <div className="bg-sky-500 dark:bg-[#634EE4] h-full rounded-full transition-all group-hover:bg-white" style={{ width: `${sectionPercentage}%` }} />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          {/* 🚀 ИСПРАВЛЕНО: Карточки теперь загораются точь-в-точь как чек-лист заданий! Полная заливка голубым цветом и белый текст при наведении курсора */}
          {(user.role === 'PREMIUM_STUDENT' || user.role === 'ADMIN' || user.role === 'TEACHER') && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Домашние задания */}
              <Link
                href="/homeworks"
                className="bg-white dark:bg-[#140e24]/75 p-6 rounded-3xl border border-blue-100/40 dark:border-purple-500/10 shadow-sm flex flex-col justify-between group transition-all duration-300 hover:scale-[1.002] hover:bg-sky-500 dark:hover:bg-[#634EE4] hover:border-transparent dark:hover:border-transparent"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase text-slate-400 group-hover:text-sky-100/80 dark:group-hover:text-purple-200/80 tracking-wider transition-colors">Раздел обучения</span>
                  <h3 className="text-lg font-black text-sky-600 dark:text-purple-400 group-hover:text-white transition-colors tracking-tight">Домашние задания</h3>
                </div>
                
                <div className="border-t border-slate-100 dark:border-purple-950/40 group-hover:border-white/20 pt-3 flex justify-between items-center text-xs font-bold text-slate-400 transition-colors">
                  <span className="px-2 py-0.5 rounded bg-sky-50 text-sky-600 dark:bg-purple-950/40 dark:text-purple-300 group-hover:bg-white/20 group-hover:text-white transition-all">
                    Домашние задания: {homeworks.length}
                  </span>
                  <span></span>
                </div>
              </Link>

              {/* Пробные экзамены */}
              <Link
                href="/trials"
                className="bg-white dark:bg-[#140e24]/75 p-6 rounded-3xl border border-blue-100/40 dark:border-purple-500/10 shadow-sm flex flex-col justify-between group transition-all duration-300 hover:scale-[1.002] hover:bg-sky-500 dark:hover:bg-[#634EE4] hover:border-transparent dark:hover:border-transparent"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase text-slate-400 group-hover:text-sky-100/80 dark:group-hover:text-purple-200/80 tracking-wider transition-colors">Официальный трек</span>
                    <h3 className="text-lg font-black text-sky-600 dark:text-purple-400 group-hover:text-white transition-colors tracking-tight">Пробные экзамены</h3>
                  </div>

                  <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="32" cy="32" r={radius} className="stroke-slate-100 dark:stroke-purple-950/60 fill-none group-hover:stroke-white/10 transition-colors" strokeWidth="4" />
                      <circle
                        cx="32" cy="32" r={radius}
                        className="stroke-sky-500 dark:stroke-purple-400 fill-none group-hover:stroke-white transition-all duration-500"
                        strokeWidth="4"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-black tracking-tight text-sky-600 dark:text-purple-400 group-hover:text-white transition-colors">
                        {averageTrialScore < 10 && averageTrialScore > 0 ? `0${averageTrialScore}` : averageTrialScore === 0 ? '00' : averageTrialScore}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-100 dark:border-purple-950/40 group-hover:border-white/20 pt-3 flex justify-between items-center text-xs font-bold text-slate-400 transition-colors">
                  <span className="px-2 py-0.5 rounded bg-sky-50 text-sky-600 dark:bg-purple-950/40 dark:text-purple-300 group-hover:bg-white/20 group-hover:text-white transition-all">
                    Пробники: {trials.length}
                  </span>
                  <span></span>
                </div>
              </Link>

            </div>
          )}


        </div>
        {/* ПРАВАЯ КОЛОНКА (1/3): Календарь планов */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-[#140e24]/80 p-5 rounded-3xl border border-blue-100/60 shadow-sm">
            <h3 className="font-black text-slate-800 dark:text-slate-200 text-xs mb-4 flex justify-between items-center uppercase tracking-wider">
              <span>план подготовки</span>
              <span className="text-xs font-bold bg-blue-50 text-sky-600 px-2 py-0.5 rounded dark:bg-purple-950/40 dark:text-purple-400">
                {monthNames[currentMonth]} {currentYear}
              </span>
            </h3>

            <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2">
              <span>Пн</span><span>Вт</span><span>Ср</span><span>Чт</span><span>Пт</span><span>Сб</span><span>Вс</span>
            </div>

            <div className="grid grid-cols-7 gap-1">
              {[...Array(startOffset)].map((_, i) => (
                <div key={`empty-${i}`} className="aspect-square" />
              ))}

              {[...Array(daysInMonth)].map((_, i) => {
                const dayNum = i + 1;
                const formattedDayStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
                const isSelected = selectedDate === formattedDayStr;
                const isToday = todayStr === formattedDayStr;
                const hasNote = !!notesMap[formattedDayStr];

                {/* 🚀 ИСПРАВЛЕНО: Серые плашки заменены на глубокий полупрозрачный фиолетовый неон, а при ховере карточка сочно загорается в цвет кнопки! */}
                return (
                  <Link
                    key={dayNum} href={`/profile?date=${formattedDayStr}`} scroll={false}
                    className={`aspect-square rounded-xl text-xs font-mono font-bold flex flex-col items-center justify-center relative border transition-all duration-300 hover:scale-[1.05] ${
                      isSelected
                        ? 'bg-sky-500 dark:bg-[#634EE4] text-white border-transparent shadow-lg shadow-sky-500/20 dark:shadow-[#634EE4]/30'
                        : isToday
                        ? 'border-sky-500 text-sky-600 font-black dark:border-purple-500 dark:text-purple-400 bg-sky-500/5 dark:bg-purple-500/5'
                        : 'bg-slate-100/70 border-slate-200/60 hover:bg-sky-500 hover:text-white hover:border-transparent dark:bg-purple-950/20 dark:border-purple-500/10 dark:text-purple-200 dark:hover:bg-[#634EE4] dark:hover:text-white dark:hover:border-transparent dark:hover:shadow-[0_0_15px_rgba(99,78,228,0.4)]'
                    }`}
                  >
                    <span>{dayNum}</span>
                    {hasNote && !isSelected && (
                      <span className="w-1.5 h-1.5 bg-sky-500 dark:bg-purple-400 rounded-full absolute bottom-1.5 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                    )}
                  </Link>
                );

              })}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-purple-950/20">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-1">Планы на дату:</h4>
              <form action={saveDailyNote} className="space-y-4 mt-3">
                <input type="hidden" name="selectedDate" value={selectedDate} />
                <textarea
                  name="noteContent"
                  rows="4"
                  placeholder="Планы..."
                  defaultValue={currentNoteContent}
                  key={selectedDate}
                  className="w-full bg-slate-50 dark:bg-[#0c0714] border border-blue-100 rounded-xl p-3 text-sm text-slate-800 dark:text-white focus:outline-none focus:border-sky-500 resize-none h-24"
                />
                <button
                  type="submit"
                  className="w-full bg-sky-500 dark:bg-[#634EE4] hover:brightness-105 text-white font-bold text-xs py-2.5 rounded-xl transition-all shadow-sm cursor-pointer"
                >
                  Сохранить заметку
                </button>
              </form>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
