import VideoPublishForm from '@/app/components/VideoPublishForm';
import OlympiadCalendarLink from '../components/OlympiadCalendarLink';
import { requireManagement } from '@/lib/auth';
import { text,calendarDate } from '@/lib/validation';
import { createQuickHomework } from '../course-actions';
import { connectDB,createId } from '@/lib/db';
import { revalidatePath } from 'next/cache';

// 🚀 ИСПРАВЛЕНО: Добавлен обязательный импорт компонента Link, чтобы кнопка «Назад» больше не ломала страницу!
import Link from 'next/link';

// 🚀 ИСПРАВЛЕНО: Для папки teacher-dashboard нужен подъем всего на одну директорию вверх (../), чтобы зайти в соседний login





// 🚀 SERVER ACTION 1: Добавление нового урока по нативному календарю выбора дат
async function createScheduleEvent(formData) {
  'use server';
  await requireManagement();
  const title = text(formData.get('title'),300);
  const time = formData.get('time');
  const type = formData.get('type');
  const rawDate = calendarDate(formData.get('lessonDate')); // Получаем YYYY-MM-DD из инпута календаря

  if (!title || !time || !type || !rawDate) return;

  let db;
  try {
    db = await connectDB();

    
    const eventId = createId();
    const createdAt = new Date().toISOString();

    // Форматируем дату из календаря в красивый вид (например, 25.11.2024)
    const formattedDate = rawDate;
    if (typeof time !== 'string' || !/^([01]\d|2[0-3]):[0-5]\d$/.test(time) || !['Вебинар','Созвон','Мастер-группа'].includes(type)) throw new Error('Некорректное время или тип занятия');

    await db.run(
      "INSERT INTO Schedule (id, time, title, type, dateText, createdAt) VALUES (?, ?, ?, ?, ?, ?)",
      [eventId, time.trim(), title.trim(), type, formattedDate, createdAt]
    );

    revalidatePath('/teacher-dashboard');
  } catch (err) {
    console.error('Ошибка записи занятия в БД:', err);
    throw err;
  } finally {
    if (db) await db.close();
  }
}

export default async function TeacherDashboardPage() {
  const currentUser = await requireManagement();

  let db;
  let rawStudents = [];
  let homeworksList = [];
  let trialsList = [];
  let scheduleEvents = [];
  let totalPremiumCount = 0;
  let uncheckedHwCount = 0;
  let totalIssuedHwCount = 0;

  try {
    db = await connectDB();


    rawStudents = await db.all("SELECT id, name, email FROM User WHERE role = 'PREMIUM_STUDENT'");
    homeworksList = await db.all("SELECT * FROM Homework");
    trialsList = await db.all("SELECT * FROM Trial");
    
    // Живое расписание из базы данных (Никаких фейковых захардкоженных вебинаров)
    scheduleEvents = await db.all("SELECT * FROM Schedule ORDER BY dateText ASC, time ASC LIMIT 6");

    totalPremiumCount = rawStudents.length;
    uncheckedHwCount = homeworksList.filter(h => h.status === 'На проверке').length;

    const uniqueHwTitles = new Set(homeworksList.map(h => h.batchId));
    totalIssuedHwCount = uniqueHwTitles.size;

  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    if (db) await db.close();
  }

  // Насыщаем профили студентов расширенной аналитикой успеваемости
  const studentsWithAnalytics = rawStudents.map(student => {
    const studentHWs = homeworksList.filter(h => h.userId === student.id);
    const studentTrials = trialsList.filter(t => t.userId === student.id);

    const checkedTrials = studentTrials.filter(t => t.status === 'Проверено');
    const avgTrialScore = checkedTrials.length > 0
      ? Math.round(checkedTrials.reduce((sum, t) => sum + t.score, 0) / checkedTrials.length)
      : 0;

    const submittedHwCount = studentHWs.filter(h => h.solutionUrl && h.solutionUrl.trim() !== '').length;
    const hwPercentage = totalIssuedHwCount > 0 
      ? Math.min(Math.round((submittedHwCount / totalIssuedHwCount) * 100), 100) 
      : 0;

    return { ...student, avgTrialScore, hwPercentage, submittedHwCount };
  });

  // Рейтинг по среднему баллу пробников
  const leaderboardStudents = [...studentsWithAnalytics].sort((a, b) => b.avgTrialScore - a.avgTrialScore);
  // Алфавитный список учеников Мастер-группы
  const alphabeticStudents = [...studentsWithAnalytics].sort((a, b) => a.name.localeCompare(b.name, 'ru-RU'));

  const allCheckedTrials = trialsList.filter(t => t.score > 0);
  const globalAverage = allCheckedTrials.length > 0
    ? Math.round(allCheckedTrials.reduce((sum, t) => sum + t.score, 0) / allCheckedTrials.length)
    : 0;
  return (
    <div className="min-h-screen p-6 bg-slate-50 dark:bg-[#03000a] text-slate-800 dark:text-slate-100 font-sans transition-colors duration-500">
      <div className="max-w-7xl mx-auto space-y-6">
        <OlympiadCalendarLink />
        
        {/* Панель сводных показателей школы */}
        <div className="bg-white/80 dark:bg-[#140e24]/80 backdrop-blur-md p-6 rounded-3xl border border-blue-100/60 shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <span className="bg-sky-50 dark:bg-purple-950/40 text-sky-600 dark:text-purple-400 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest">Центр управления</span>
            <h1 className="text-2xl font-black text-sky-600 dark:text-purple-400 mt-1 uppercase tracking-tight">Личный кабинет преподавателя</h1>
            <p className="text-xs text-slate-400 font-bold">{currentUser.name}</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 bg-white dark:bg-purple-950/20 rounded-xl text-center border dark:border-purple-500/5 min-w-[100px] shadow-sm">
              <span className="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Учеников</span>
              <span className="text-base font-black text-sky-600 dark:text-blue-400">{totalPremiumCount}</span>
            </div>
            <div className="px-4 py-2 bg-white dark:bg-purple-950/20 rounded-xl text-center border dark:border-purple-500/5 min-w-[100px] shadow-sm">
              <span className="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Очередь ДЗ</span>
              <span className="text-base font-black text-sky-600 dark:text-blue-400">{uncheckedHwCount}</span>
            </div>
            <div className="px-4 py-2 bg-white dark:bg-purple-950/20 rounded-xl text-center border dark:border-purple-500/5 min-w-[100px] shadow-sm">
              <span className="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Ср. балл ЕГЭ</span>
              <span className="text-base font-black text-sky-600 dark:text-blue-400">{globalAverage}</span>
            </div>
          </div>
        </div>

        {/* ОСНОВНОЙ ДВУХКОЛОНОЧНЫЙ ДАШБОРД */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* ЛЕВАЯ ЧАСТЬ (2/3): Расписание, Нативный календарь дат и Будущие ДЗ */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* График вебинаров */}
            <div className="bg-white/80 dark:bg-[#140e24]/80 backdrop-blur-md p-6 rounded-3xl border border-blue-100/60 shadow-sm space-y-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-sky-600 dark:text-purple-400 border-b dark:border-purple-950/40 pb-2">
                Утвержденный график
              </h3>
              
              {scheduleEvents.length === 0 ? (
                <p className="text-xs font-bold text-slate-400 text-center py-6"></p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {scheduleEvents.map(ev => (
                    <div key={ev.id} className="p-3.5 bg-white dark:bg-purple-950/10 border dark:border-purple-500/5 shadow-sm rounded-2xl flex flex-col justify-between h-28">
                      <div>
                        <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-wider">
                          <span className="text-sky-600 dark:text-purple-400">{ev.type}</span>
                          <span className="text-slate-400 font-mono">{ev.dateText}</span>
                        </div>
                        <p className="text-xs font-black text-slate-800 dark:text-slate-200 mt-2 tracking-tight leading-tight line-clamp-2">{ev.title}</p>
                      </div>
                      <span className="text-sm font-mono font-black text-sky-500 dark:text-purple-400">{ev.time}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Удобный календарный планировщик занятий (type="date") */}
              <div className="pt-4 border-t border-slate-100 dark:border-purple-950/30">
                <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-3">Запланировать новое занятие</h4>
                <form action={createScheduleEvent} className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                  <input type="text" name="title" required placeholder="Тема урока (например: Производная)" className="sm:col-span-2 bg-white dark:bg-[#0c0714] border border-slate-200 dark:border-purple-500/10 rounded-xl px-3 py-2 text-xs font-bold focus:outline-none focus:border-sky-500" />
                  <input type="text" name="time" required placeholder="Время (18:00)" className="bg-white dark:bg-[#0c0714] border border-slate-200 dark:border-purple-500/10 rounded-xl px-3 py-2 text-xs font-bold text-center focus:outline-none focus:border-sky-500" />
                  <select name="type" className="bg-white dark:bg-[#0c0714] border border-slate-200 dark:border-purple-500/10 rounded-xl px-2 py-2 text-xs font-bold text-slate-600 dark:text-purple-300 focus:outline-none">
                    <option value="Вебинар">Вебинар</option>
                    <option value="Созвон">Созвон</option>
                    <option value="Мастер-группа">Мастер-группа</option>
                  </select>
                  <input type="date" name="lessonDate" required className="sm:col-span-2 bg-white dark:bg-[#0c0714] border border-slate-200 dark:border-purple-500/10 rounded-xl px-3 py-2 text-xs font-bold text-center focus:outline-none text-slate-600 dark:text-purple-300 cursor-pointer" />
                  <button type="submit" className="sm:col-span-2 bg-sky-500 dark:bg-[#634EE4] hover:brightness-105 text-white text-[10px] font-black uppercase tracking-wider py-2 rounded-xl transition-all cursor-pointer shadow-sm">Опубликовать вебинар ✓</button>
                </form>
              </div>
            </div>

            <VideoPublishForm />


            {/* Выкладка будущих ДЗ на поток */}
            <div className="bg-white/80 dark:bg-[#140e24]/80 backdrop-blur-md p-6 rounded-3xl border border-blue-100/60 shadow-sm space-y-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-sky-600 dark:text-purple-400 border-b dark:border-purple-950/40 pb-2">
                Панель быстрой публикации домашних работ
              </h3>
              <form action={createQuickHomework} className="flex gap-2">
                <input type="text" name="title" required placeholder="Введите название новой темы будущего ДЗ..." className="flex-grow bg-white dark:bg-[#0c0714] border border-slate-200 dark:border-purple-500/10 rounded-xl px-4 py-2.5 text-xs font-bold focus:outline-none focus:border-sky-500" />
                <button type="submit" className="bg-sky-500 dark:bg-[#634EE4] hover:brightness-105 text-white text-[10px] font-black uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all cursor-pointer shadow-sm">Выдать тему на курс +</button>
              </form>
            </div>

          </div>
          {/* ПРАВАЯ ЧАСТЬ (1/3): Раздельные плашки списка и рейтинга с диаграммами */}
          <div className="space-y-6">
            
            {/* ПЛАШКА 1: Алфавитный список учеников со шкалами ДЗ */}
            <div className="bg-white/80 dark:bg-[#140e24]/80 backdrop-blur-md p-5 rounded-3xl border border-blue-100/60 shadow-sm space-y-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-sky-600 dark:text-purple-400 border-b dark:border-purple-950/40 pb-1">
                Ученики группы ({alphabeticStudents.length})
              </h3>
              <div className="space-y-2 max-h-[260px] overflow-y-auto pr-1 scrollbar-thin">
                {alphabeticStudents.map(student => (
                  <Link 
                    key={student.id} href={`/supervisor/students/${student.id}`}
                    className="p-3 bg-white dark:bg-[#140e24]/40 hover:bg-sky-500 dark:hover:bg-[#634EE4] border border-slate-100 dark:border-purple-500/5 rounded-2xl flex flex-col gap-2 group transition-all duration-300 cursor-pointer block"
                  >
                    <div className="min-w-0">
                      <h4 className="text-xs font-black text-slate-800 dark:text-slate-100 group-hover:text-white transition-colors truncate">{student.name}</h4>
                      <p className="text-[9px] text-slate-400 group-hover:text-sky-100 transition-colors truncate font-bold mt-0.5">{student.email}</p>
                    </div>
                    {/* Тонкая шкала выполнения ДЗ */}
                    <div className="w-full bg-slate-100 dark:bg-purple-950/40 h-1 rounded-full overflow-hidden group-hover:bg-white/20 transition-colors">
                      <div className="bg-sky-500 dark:bg-[#634EE4] group-hover:bg-white h-full rounded-full transition-all duration-500" style={{ width: `${student.hwPercentage}%` }} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* ПЛАШКА 2: Аналитический рейтинг учеников с круговыми SVG диаграммами */}
            <div className="bg-white/80 dark:bg-[#140e24]/80 backdrop-blur-md p-5 rounded-3xl border border-blue-100/60 shadow-sm space-y-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-sky-600 dark:text-purple-400 border-b dark:border-purple-950/40 pb-1">
                Лидерборд по пробникам ЕГЭ
              </h3>
              <div className="space-y-3.5 max-h-[300px] overflow-y-auto pr-1 scrollbar-thin">
                {leaderboardStudents.map((student, index) => {
                  const radius = 14;
                  const circumference = 2 * Math.PI * radius;
                  const strokeOffset = circumference - (student.avgTrialScore / 100) * circumference;

                  return (
                    <Link 
                      key={student.id} href={`/supervisor/students/${student.id}`}
                      className="flex items-center justify-between gap-3 p-2 rounded-2xl hover:bg-slate-50/50 dark:hover:bg-purple-950/20 transition-colors group cursor-pointer block"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="font-mono font-black text-slate-300 text-xs w-4 shrink-0">#{index + 1}</span>
                        <div className="min-w-0">
                          <h4 className="text-xs font-black text-slate-800 dark:text-slate-100 truncate">{student.name}</h4>
                        </div>
                      </div>

                      {/* Круговое кольцо диаграммы среднего балла */}
                      <div className="relative w-9 h-9 shrink-0 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="18" cy="18" r={radius} className="stroke-slate-100 dark:stroke-purple-950/60 fill-none" strokeWidth="2.5" />
                          <circle cx="18" cy="18" r={radius} className="stroke-sky-500 dark:stroke-purple-400 fill-none transition-all duration-500" strokeWidth="2.5" strokeDasharray={circumference} strokeDashoffset={strokeOffset} strokeLinecap="round" />
                        </svg>
                        <span className="absolute text-[9px] font-mono font-black text-sky-600 dark:text-purple-400">{student.avgTrialScore || '00'}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
