import { getCurrentUser } from '@/lib/auth';
import { getEgeProgress } from '@/lib/task-modules';
import { saveDailyNote } from '../profile/actions';
import { connectDB } from '@/lib/db';
import { redirect } from 'next/navigation';
import Link from 'next/link';

// Импорты 19 разделов Банка задач АЗИМУТ для динамических счетчиков шкал
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



// 🚀 ИСПРАВЛЕНО: Запрос заметок завернут в try/catch. Отсутствие таблицы в SQLite больше никогда не сломает вход!
async function getDashboardData() {
  const user = await getCurrentUser();
  if (!user) return null;
  let db;
  try {
    db = await connectDB();
    // Решенные задачи ученика
    const solvedTasks = await getEgeProgress(db,user.id);
    const notesMap = {};
    for (const note of await db.all('SELECT dateText,content FROM Notes WHERE userId=?',[user.id])) notesMap[note.dateText] = note.content;
    return { user, solvedTasks, notesMap };
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    if (db) await db.close();
  }
}

export default async function FreeStudentDashboardPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  
  // Рассчитываем сегодняшнюю дату календаря
  const now = new Date();
  const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const selectedDate = resolvedSearchParams?.date || todayStr;

  const data = await getDashboardData();
  if (!data) redirect('/login');

  const { user, solvedTasks, notesMap } = data;
  
  // Если зашел Платник или Преподаватель — плавно перенаправляем на /profile
  if (user.role === 'PREMIUM_STUDENT' || user.role === 'ADMIN' || user.role === 'TEACHER') {
    redirect('/profile');
  }

  const currentNoteContent = notesMap[selectedDate] || '';

  // Распределяем решенные задачи ученика по 19 секциям
  const solvedStatsBySection = {};
  solvedTasks.forEach(({ section: sectionNum }) => {
    if (sectionNum >= 1 && sectionNum <= 19) {
      solvedStatsBySection[sectionNum] = (solvedStatsBySection[sectionNum] || 0) + 1;
    }
  });

  // Длины массивов Банка задач
  const totalStatsBySection = {
    1: section1Tasks?.length || 0, 2: section2Tasks?.length || 0, 3: section3Tasks?.length || 0,
    4: section4Tasks?.length || 0, 5: section5Tasks?.length || 0, 6: section6Tasks?.length || 0,
    7: section7Tasks?.length || 0, 8: section8Tasks?.length || 0, 9: section9Tasks?.length || 0,
    10: section10Tasks?.length || 0, 11: section11Tasks?.length || 0, 12: section12Tasks?.length || 0,
    13: section13Tasks?.length || 0, 14: section14Tasks?.length || 0, 15: section15Tasks?.length || 0,
    16: section16Tasks?.length || 0, 17: section17Tasks?.length || 0, 18: section18Tasks?.length || 0,
    19: section19Tasks?.length || 0
  };

  const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#03000a] p-6 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-12 flex flex-col lg:flex-row gap-8 items-start">
        
        {/* ЛЕВАЯ КОЛОНКА (2/3): Профиль и Интерактивные шкалы прогресса Банка */}
        <div className="w-full lg:w-2/3 space-y-6">
          
          {/* Визитка бесплатного студента */}
          <div className="bg-white dark:bg-[#140e24]/75 p-6 rounded-3xl border border-blue-100/40 dark:border-purple-500/10 shadow-sm space-y-4 hover:scale-[1.005] transition-all duration-300">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase text-sky-500 dark:text-purple-400 tracking-wider">Профиль: Базовый Банк</span>
              <h2 className="text-xl font-black text-slate-800 dark:text-white tracking-tight">{user.name}</h2>
              <p className="text-xs font-semibold text-slate-400 font-mono">{user.email}</p>
            </div>
          </div>

          {/* Сетка 19 шкал Банка Задач АЗИМУТ */}
          <div className="bg-white dark:bg-[#140e24]/75 p-6 rounded-3xl border border-blue-100/40 dark:border-purple-500/10 shadow-sm space-y-4">
            <h3 className="text-sm font-black uppercase text-sky-500 dark:text-purple-400 tracking-wider border-b dark:border-purple-950/40 pb-2">Прогресс подготовки по темам КИМ</h3>
            <div className="space-y-3 max-h-[340px] overflow-y-auto pr-1 scrollbar-thin">
              {Object.keys(totalStatsBySection).map(numKey => {
                const taskNum = parseInt(numKey);
                const solved = solvedStatsBySection[taskNum] || 0;
                const total = totalStatsBySection[taskNum] || 10;
                const finalSolved = Math.min(solved, total);
                const pct = total > 0 ? Math.min(Math.round((finalSolved / total) * 100), 100) : 0;

                return (
                  <div key={taskNum} className="p-3 bg-slate-50/50 dark:bg-purple-950/5 rounded-2xl border border-slate-100/40 dark:border-purple-500/5 flex items-center justify-between gap-4 hover:bg-slate-100/50 dark:hover:bg-purple-950/20 transition-colors duration-200">
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300 min-w-[100px]">Задание №{taskNum}</span>
                    <div className="flex-grow bg-slate-200 dark:bg-purple-950/40 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-sky-500 dark:bg-[#634EE4] h-full rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="text-xs font-mono font-black text-sky-600 dark:text-purple-400 w-12 text-right">{finalSolved}/{total}</span>
                  </div>
                );
              })}
            </div>
          </div>
          {/* 🚀 СИНХРОНИЗИРОВАНО: Заглушка-баннер Мастер-группы в премиальном стиле АЗИМУТ */}
          <div className="bg-white dark:bg-[#140e24]/75 p-8 rounded-3xl border border-blue-100/40 dark:border-purple-500/10 shadow-sm text-center space-y-3 hover:scale-[1.005] transition-all duration-300">
            <div className="inline-block bg-sky-500/10 dark:bg-purple-500/10 text-sky-600 dark:text-purple-400 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest">
              Доступ ограничен 🔒
            </div>
            <h3 className="text-base font-black text-slate-800 dark:text-white uppercase tracking-tight">
              Разделы ДЗ и официальных пробников доступны только в Мастер-Группе
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium max-w-lg mx-auto leading-relaxed">
              Вы успешно тренируетесь в Банке задач! Чтобы открыть экспертную проверку бланков КИМ кураторами, индивидуальный трек на 90+ баллов и ведомости домашних работ, перейдите в Мастер-Группу школы <span className="font-bold text-sky-500 dark:text-purple-400">АЗИМУТ 2026</span>.
            </p>
          </div>

        </div>
        {/* ПРАВАЯ КОЛОНКА (1/3): Полная интерактивная копия календаря планов Данилы */}
        <div className="w-full lg:w-1/3 space-y-6">
          <div className="bg-white dark:bg-[#140e24]/80 p-5 rounded-3xl border border-blue-100/60 dark:border-purple-500/5 shadow-sm space-y-4 hover:scale-[1.005] transition-all duration-300">
            <h3 className="font-black text-slate-800 dark:text-slate-200 text-xs mb-4 flex justify-between items-center uppercase tracking-wider">
              <span>План подготовки</span>
              <span className="text-xs font-mono font-black text-sky-500 dark:text-purple-400 bg-sky-50 dark:bg-purple-950/40 px-2 py-0.5 rounded-md">
                {monthNames[currentMonth]} {currentYear}
              </span>
            </h3>

            {/* Дни недели */}
            <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2">
              <span>Пн</span><span>Вт</span><span>Ср</span><span>Чт</span><span>Пт</span><span>Сб</span><span>Вс</span>
            </div>

            {/* Сетка чисел месяца */}
            <div className="grid grid-cols-7 gap-1 text-xs font-mono font-bold">
              {[...Array(31)].map((_, i) => {
                const dayNum = i + 1;
                const isToday = dayNum === now.getDate();

                return (
                  <div
                    key={dayNum}
                    className={`p-2 rounded-xl text-center transition-all cursor-pointer flex flex-col items-center justify-center h-9 ${
                      isToday
                        ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                        : 'bg-slate-50 dark:bg-purple-950/10 text-slate-700 dark:text-slate-300 hover:bg-sky-100 dark:hover:bg-purple-950/40'
                    }`}
                  >
                    <span>{dayNum}</span>
                  </div>
                );
              })}
            </div>

            {/* Текстовая форма отправки заметок в таблицу Note */}
            <div className="pt-4 border-t border-slate-100 dark:border-purple-950/20 space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Планы на дату: Сегодня</span>
              <form action={saveDailyNote} className="space-y-3">
                <input type="hidden" name="dateText" value={selectedDate} />
                <textarea
                  name="content"
                  defaultValue={currentNoteContent}
                  placeholder="Запишите ваши учебные планы или задачи на день..."
                  className="w-full bg-slate-50 dark:bg-[#0c0714] border border-slate-200 dark:border-purple-500/10 rounded-2xl p-4 text-xs font-medium focus:outline-none focus:border-sky-500 resize-none h-24 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full bg-sky-500 dark:bg-[#634EE4] hover:brightness-105 text-white text-[10px] font-black uppercase tracking-wider py-2.5 rounded-xl transition-all shadow-sm cursor-pointer"
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
