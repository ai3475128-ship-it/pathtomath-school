import Link from 'next/link';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { initProgressTable } from './init-db';

/* Сквозные импорты из текущей папки профиля */
import { saveDailyNote, toggleTaskProgress } from './actions';

async function getProfileData() {
  await initProgressTable();
  const cookieStore = await cookies();
  
  // ИСПРАВЛЕНО: Декодируем и читаем данные из новой защищенной куки сессии userSession
  const sessionCookie = cookieStore.get('userSession');
  if (!sessionCookie) return null;

  let userId = null;
  try {
    const sessionData = JSON.parse(Buffer.from(sessionCookie.value, 'base64').toString('utf8'));
    userId = sessionData.id;
  } catch (e) {
    return null;
  }

  if (!userId) return null;

  const db = await open({
    filename: path.join(process.cwd(), 'prisma', 'dev.db'),
    driver: sqlite3.Database
  });

  try {
    const user = await db.get('SELECT * FROM User WHERE id = ?', [userId]);
    if (!user) return null;

    const solvedRecords = await db.all('SELECT taskNumber FROM Progress WHERE userId = ?', [user.id]);
    const solvedTasks = solvedRecords.map(r => r.taskNumber);

    const allNotes = await db.all('SELECT dateText, content FROM Notes WHERE userId = ?', [user.id]);
    const notesMap = {};
    allNotes.forEach(note => {
      notesMap[note.dateText] = note.content;
    });

    return { user, solvedTasks, notesMap };
  } catch (error) {
    console.error('Ошибка чтения профиля из БД:', error);
    return null;
  } finally {
    if (db) await db.close();
  }
}

export default async function ProfilePage({ searchParams }) {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const todayStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  const queryParams = await searchParams;
  const selectedDate = queryParams?.date || todayStr;

  const data = await getProfileData();
  if (!data) redirect('/login');

  const { user, solvedTasks, notesMap } = data;
  const currentNoteContent = notesMap[selectedDate] || '';

  const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
  const startOffset = firstDayIndex === 0 ? 6 : firstDayIndex - 1;

  const handleSaveDailyNote = async (formData) => {
    'use server';
    const content = formData.get('noteContent');
    await saveDailyNote(selectedDate, content);
  };

  // РАСЧЁТ ПРОГРЕССА ДЛЯ КАЖДОГО ИЗ 19 РАЗДЕЛОВ
  const solvedStatsBySection = {};
  solvedTasks.forEach(taskNumber => {
    const sectionNum = Math.floor(taskNumber / 100);
    if (sectionNum >= 1 && sectionNum <= 19) {
      solvedStatsBySection[sectionNum] = (solvedStatsBySection[sectionNum] || 0) + 1;
    }
  });

  // Общее количество задач для каждого раздела ЕГЭ.
  const totalStatsBySection = {
    1: 15, 2: 12, 3: 8, 4: 15, 5: 10,
    6: 14, 7: 10, 8: 9, 9: 11, 10: 13,
    11: 15, 12: 12, 13: 111, 14: 10, 15: 122,
    16: 8, 17: 10, 18: 14, 19: 15
  };

  const totalTasks = 19;
  const solvedTasksSet = new Set(solvedTasks.map(num => Math.floor(num / 100)));
  const solvedTasksList = Array.from(solvedTasksSet).filter(num => num >= 1 && num <= 19);

  return (
    <div className="min-h-screen p-8 transition-colors duration-500 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/10 dark:from-[#03000a] dark:via-[#0c0714] dark:to-[#03000a]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* ЛЕВАЯ КОЛОНКА */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* КАРТОЧКА УЧЕНИКА */}
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-blue-100/50 shadow-sm flex flex-col sm:flex-row items-center gap-5 dark:bg-[#140e24]/80 dark:border-purple-500/20">
            <div>
              <span className="text-xs font-bold bg-blue-50 text-blue-500 px-2.5 py-1 rounded-md border border-blue-100/30 uppercase tracking-wider dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-500/20">
                Ученик платформы
              </span>
              <h1 className="text-2xl font-black mt-2 text-slate-800 dark:text-slate-100">{user.name}</h1>
              <p className="text-slate-400 dark:text-slate-500 text-sm">{user.email}</p>
            </div>
          </div>
          {/* ЧЕК-ЛИСТ С ИНДИВИДУАЛЬНЫМ ПРОГРЕССОМ-БАРАМИ */}
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-blue-100/50 shadow-sm dark:bg-[#140e24]/80 dark:border-purple-500/20">
            <h3 className="font-black text-xl mb-5 text-slate-800 dark:text-slate-200 tracking-tight">
              Ваш чек-лист подготовки
            </h3>

            <div className="space-y-2.5 max-h-[550px] overflow-y-auto pr-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {[...Array(totalTasks)].map((_, i) => {
                const taskNum = i + 1;
                const isSolved = solvedTasksList.includes(taskNum);

                const sectionSolved = solvedStatsBySection[taskNum] || 0;
                const sectionTotal = totalStatsBySection[taskNum] || 10;
                const sectionPercentage = Math.min(Math.round((sectionSolved / sectionTotal) * 100), 100);

                return (
                  <Link 
                    key={taskNum}
                    href={`/math-profile/${taskNum}`}
                    className={`group flex flex-col p-4 rounded-xl border transition-all duration-300 transform hover:-translate-y-[2px] cursor-pointer hover:bg-[#f3f7ff] hover:border-blue-400 hover:shadow-md dark:hover:bg-[#1c1532]/40 dark:hover:border-purple-500/40 ${
                      isSolved 
                        ? 'bg-blue-50/40 border-blue-100/30 dark:bg-purple-950/10 dark:border-purple-500/20' 
                        : 'bg-white/40 border-slate-100/80 dark:bg-slate-900/10 dark:border-purple-500/10'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full min-w-0">
                      <div className="flex items-center gap-4 min-w-0">
                        {/* ИСПРАВЛЕНО: Убран group-hover:text-white, ломавший видимость номера */}
                        <span className={`text-xl font-black tracking-tight transition-colors duration-300 select-none w-7 shrink-0 ${
                          isSolved ? 'text-sky-500' : 'text-slate-400/80 dark:text-purple-400/60'
                        }`}>
                          {String(taskNum).padStart(2, '0')}
                        </span>
                        {/* ИСПРАВЛЕНО: Текст при наведении окрашивается в синий на светлой теме и в белый на темной */}
                        <span className={`text-sm font-bold tracking-tight transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-purple-300 ${
                          isSolved ? 'text-sky-600 dark:text-purple-300' : 'text-slate-700 dark:text-slate-300'
                        }`}>
                          Задание №{taskNum}
                        </span>
                      </div>
                      {/* ИСПРАВЛЕНО: Счётчик тоже корректно меняет цвет при наведении */}
                      <span className={`text-xs font-mono font-bold transition-colors duration-300 group-hover:text-blue-500 dark:group-hover:text-purple-400 ${
                        isSolved ? 'text-sky-500 dark:text-purple-400' : 'text-slate-400 dark:text-slate-500'
                      }`}>
                        {sectionSolved} / {totalStatsBySection[taskNum]}
                      </span>
                    </div>

                    {/* ТРЕК ЛИНЕЙНОГО ПРОГРЕССА */}
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mt-3 dark:bg-slate-900/60 group-hover:bg-blue-100 dark:group-hover:bg-purple-950/40 transition-colors duration-300">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          isSolved ? 'bg-sky-500 dark:bg-purple-500' : 'bg-slate-300 dark:bg-purple-900'
                        }`}
                        style={{ width: `${sectionPercentage}%` }}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА */}
        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-blue-100/50 shadow-sm dark:bg-purple-950/10 dark:border-purple-500/20">
            <h3 className="font-black text-lg text-slate-800 dark:text-slate-200 mb-4 flex justify-between items-center">
              <span>План подготовки</span>
              <span className="text-xs bg-blue-50 text-blue-500 px-2 py-1 rounded font-bold font-mono dark:bg-purple-950/40 dark:text-purple-300">
                {monthNames[currentMonth]} {currentYear}
              </span>
            </h3>

            <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-slate-400 dark:text-slate-500 mb-2">
              <span>Пн</span><span>Вт</span><span>Ср</span><span>Чт</span><span>Пт</span><span>Сб</span><span>Вс</span>
            </div>

            <div className="grid grid-cols-7 gap-1">
              {[...Array(startOffset)].map((_, i) => (
                <div key={`empty-${i}`} className="aspect-square"></div>
              ))}

              {[...Array(daysInMonth)].map((_, i) => {
                const dayNum = i + 1;
                const formattedDayStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
                const isSelected = selectedDate === formattedDayStr;
                const isToday = todayStr === formattedDayStr;
                const hasNote = !!notesMap[formattedDayStr];

                return (
                  <Link
                    key={dayNum}
                    href={`/profile?date=${formattedDayStr}`}
                    className={`aspect-square rounded-lg flex flex-col items-center justify-center text-xs font-semibold relative transition ${
                      isSelected
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-purple-600 dark:to-indigo-600 text-white font-black shadow-md'
                        : isToday
                        ? 'border border-blue-300 text-blue-500 bg-blue-50/30 dark:border-purple-500/50 dark:text-purple-400 dark:bg-purple-950/30'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-600 dark:bg-slate-900/40 dark:hover:bg-purple-950/20 dark:text-slate-400'
                    }`}
                  >
                    <span>{dayNum}</span>
                    {hasNote && !isSelected && (
                      <span className="w-1.5 h-1.5 bg-blue-400 dark:bg-purple-400 rounded-full absolute bottom-1"></span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-blue-100/50 shadow-sm dark:bg-purple-950/10 dark:border-purple-500/20">
            <div className="className-3">
              <h4 className="font-bold text-sm text-slate-700 dark:text-slate-200">Планы на выбранную дату:</h4>
              <span className="text-xs text-blue-500 dark:text-purple-400 font-semibold font-mono">
                {selectedDate === todayStr ? 'Сегодня, ' : ''}{selectedDate}
              </span>
            </div>

            <form action={handleSaveDailyNote} className="space-y-4 mt-3">
              <textarea
                name="noteContent"
                rows="4"
                placeholder="Планы..."
                defaultValue={currentNoteContent}
                key={selectedDate}
                className="w-full bg-slate-50 border border-blue-100 rounded-xl p-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-400 dark:bg-purple-950/40 dark:border-purple-500/20 dark:text-slate-200 transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold py-2.5 px-4 rounded-xl transition shadow-md hover:scale-[1.01] hover:brightness-110 cursor-pointer dark:from-purple-600 dark:to-indigo-600"
              >
                Сохранить заметку
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
