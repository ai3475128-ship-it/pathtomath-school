import { SUBJECTS } from '@/lib/learning-catalog';
import CourseSelect from '@/app/components/CourseSelect';
import { connectDB } from '@/lib/db';
import { requireCourseUser, canAccessCourse } from '@/lib/auth';
import { createBulkTrial, deleteBulkTrial, submitTrialSolution, checkTrialMark } from '../course-actions';
export default async function TrialsPage({ searchParams }) {
  const user = await requireCourseUser();
  const params = await searchParams;
  const courseFilter = typeof params?.course === 'string' && SUBJECTS.some((course) => course.id === params.course) && canAccessCourse(user, params.course) ? params.course : null;
  const visible = (work) => (work.courseId === 'legacy' || canAccessCourse(user, work.courseId)) && (!courseFilter || work.courseId === courseFilter || work.courseId === 'legacy');

  let db;
  let trialsList = [];
  let studentsList = [];
  let uniqueGroupTrials = [];

  let statTotalTrials = 0;
  let statUncheckedTrials = 0;
  let statCheckedTrials = 0;

  try {
    db = await connectDB();
    if (user.role === 'ADMIN' || user.role === 'TEACHER') {
      let rawStudents = user.role === 'ADMIN'
        ? await db.all("SELECT id, name, email FROM User WHERE role='PREMIUM_STUDENT'")
        : await db.all("SELECT DISTINCT u.id,u.name,u.email FROM User u JOIN StudentCourse c ON c.userId=u.id JOIN TeacherSubject ts ON ts.subject=c.courseId WHERE u.role='PREMIUM_STUDENT' AND ts.userId=?", [user.id]);
      if (courseFilter) {
        const enrolled = new Set((await db.all('SELECT userId FROM StudentCourse WHERE courseId=?', [courseFilter])).map((row) => row.userId));
        rawStudents = rawStudents.filter((student) => enrolled.has(student.id));
      }
      const visibleStudents = new Set(rawStudents.map((student) => student.id));
      trialsList = (await db.all("SELECT * FROM Trial")).filter((work) => visible(work) && (user.role === 'ADMIN' && !courseFilter || visibleStudents.has(work.userId)));
      const visibleBatches = new Set(trialsList.map((work) => work.batchId));
      const rawTasks = (await db.all("SELECT batchId,title,courseId,MAX(date) AS latest FROM Trial GROUP BY batchId,title,courseId ORDER BY latest DESC")).filter((work) => visible(work) && visibleBatches.has(work.batchId));
      uniqueGroupTrials = rawTasks;

      statTotalTrials = uniqueGroupTrials.length;
      statUncheckedTrials = trialsList.filter(t => t.status === 'На проверке').length;
      statCheckedTrials = trialsList.filter(t => t.status === 'Проверено').length;

      // УМНАЯ СОРТИРОВКА: Студенты со сданными, но непроверенными КИМ автоматически поднимаются на самый верх списка
      studentsList = rawStudents.sort((a, b) => {
        const aUnchecked = trialsList.filter(t => t.userId === a.id && t.status === 'На проверке').length;
        const bUnchecked = trialsList.filter(t => t.userId === b.id && t.status === 'На проверке').length;
        
        if (bUnchecked !== aUnchecked) {
          return bUnchecked - aUnchecked;
        }
        return a.name.localeCompare(b.name, 'ru-RU');
      });
    } else {
      trialsList = (await db.all("SELECT * FROM Trial WHERE userId = ? ORDER BY date DESC", [user.id])).filter(visible);
      statTotalTrials = trialsList.length;
      statUncheckedTrials = trialsList.filter(t => t.status === 'На проверке').length;
      statCheckedTrials = trialsList.filter(t => t.status === 'Проверено').length;
    }
  } catch (e) {
    console.error(e);
    throw e;
  } finally {
    if (db) await db.close();
  }

  const isManagement = user.role === 'ADMIN' || user.role === 'TEACHER';
  {/* 🚀 ВШИТО: Индивидуальный контекстный фон для раздела Пробных экзаменов КИМ */}
return (
  <div 
    className="min-h-screen p-6 bg-cover bg-center bg-no-repeat transition-all duration-500 text-slate-800 dark:text-slate-100 font-sans"
    style={{
      backgroundImage: "url('/trials-bg-light.jpg')"
    }}
  >
    <style dangerouslySetInnerHTML={{__html: `
      .dark div[style*="trials-bg-light.jpg"] {
        background-image: url('/trials-bg-dark.jpg') !important;
      }
    `}} />

    <div className="max-w-6xl mx-auto space-y-6">

        
        {/* Шапка и Счётчики — точная копия ДЗ */}
        <div className="bg-white/80 dark:bg-[#140e24]/80 backdrop-blur-md p-6 rounded-3xl border border-blue-100/60 shadow-xl shadow-blue-900/5 dark:border-purple-950/40 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="inline-block bg-sky-50 dark:bg-purple-950/40 px-3 py-1 rounded-full text-[10px] font-black uppercase text-sky-600 dark:text-purple-400 tracking-widest">
              Тестирования
            </div>
            <h1 className="text-2xl font-black text-sky-600 dark:text-purple-400 uppercase tracking-tight mt-1">
              {isManagement ? 'Пробные экзамены ЕГЭ' : 'Пробные экзамены ЕГЭ'}
            </h1>
            <p className="text-xs text-slate-400 font-bold dark:text-purple-300">
              {isManagement ? `Панель куратора: ${user.name}` : 'Скачивайте официальные бланки КИМ, отправляйте решения и отслеживайте рост баллов'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 bg-slate-50 dark:bg-purple-950/20 rounded-xl text-center border dark:border-purple-500/5 min-w-[90px]">
              <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider block">Выдано</span>
              <span className="text-base font-black text-sky-500 dark:text-purple-400">{statTotalTrials}</span>
            </div>
            <div className="px-4 py-2 bg-slate-50 dark:bg-purple-950/20 rounded-xl text-center border dark:border-purple-500/5 min-w-[90px]">
              <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider block">Проверка</span>
              <span className="text-base font-black text-sky-500 dark:text-purple-400">{statUncheckedTrials}</span>
            </div>
            <div className="px-4 py-2 bg-slate-50 dark:bg-purple-950/20 rounded-xl text-center border dark:border-purple-500/5 min-w-[90px]">
              <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider block">Готово</span>
              <span className="text-base font-black text-sky-500 dark:text-purple-400">{statCheckedTrials}</span>
            </div>
          </div>
        </div>

        {/* 💎 ИНТЕРФЕЙС УЧЕНИКА */}
        {!isManagement ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trialsList.length === 0 ? (
              <p className="text-xs font-bold text-slate-400 text-center py-12 md:col-span-2">Вам пока не назначено ни одного официального пробника.</p>
            ) : (
              trialsList.map((trial) => (
                <div key={trial.id} className="bg-white dark:bg-[#140e24]/75 rounded-3xl border border-blue-100/40 dark:border-purple-500/10 shadow-sm flex flex-col justify-between group hover:border-sky-400 dark:hover:border-[#634EE4] hover:bg-sky-500 dark:hover:bg-[#634EE4] transition-all duration-300 min-h-44 overflow-hidden">
                  
                  {/* Клик по всей верхней области плашки КИМ открывает его PDF в соседней вкладке */}
                  {trial.description ? (
                    <a href={trial.description} target="_blank" rel="noopener noreferrer" className="p-6 pb-3 block flex-grow cursor-pointer" title="Кликните, чтобы открыть бланк КИМ">
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="text-base font-black text-slate-900 dark:text-white group-hover:text-white transition-colors duration-300 tracking-tight leading-snug">{trial.title}</h3>
                        <div className="text-right shrink-0">
                          <span className="text-[22px] font-black text-sky-500 dark:text-purple-400 group-hover:text-white transition-colors duration-300 tracking-tighter">{trial.score || '00'}</span>
                          <span className="text-[10px] text-slate-400 group-hover:text-sky-100 block font-bold">из 100 б.</span>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="p-6 pb-3 flex-grow">
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="text-base font-black text-slate-900 dark:text-white transition-colors tracking-tight leading-snug">{trial.title}</h3>
                        <div className="text-right shrink-0">
                          <span className="text-[22px] font-black text-sky-500 dark:text-purple-400 tracking-tighter">{trial.score || '00'}</span>
                          <span className="text-[10px] text-slate-400 block font-bold">из 100 б.</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Нижняя панель действий ученика */}
                  <div className="px-6 pb-6 pt-3 border-t border-slate-100 dark:border-purple-950/40 group-hover:border-white/20 transition-colors duration-300 space-y-3 bg-white/40 dark:bg-black/5">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-wider text-slate-400 group-hover:text-sky-100 transition-colors duration-300">
                      <span className="px-2 py-0.5 rounded-md bg-sky-50 text-sky-600 dark:bg-purple-950 dark:text-purple-400 group-hover:bg-white/20 group-hover:text-white font-black tracking-widest">
                        {trial.status === 'Проверено' ? 'Проверено экспертом' : 'На проверке'}
                      </span>
                      <span>{trial.date}</span>
                    </div>

                    <div className="bg-slate-50 dark:bg-purple-950/20 p-2.5 rounded-xl border dark:border-purple-500/5 group-hover:bg-white/10 group-hover:border-none transition-all duration-300">
                      {trial.solutionUrl ? (
                        <span className="text-xs text-sky-600 dark:text-purple-400 group-hover:text-white font-bold underline cursor-pointer">
                          Ваша работа успешно отправлена куратору
                        </span>
                      ) : (
                        <form action={submitTrialSolution} className="flex gap-2 items-center justify-between">
                          <input type="hidden" name="trialId" value={trial.id} />
                          <input type="file" name="solutionFile" accept=".pdf,image/*" required className="text-[10px] text-slate-500 group-hover:text-white font-bold max-w-[160px] cursor-pointer" />
                          <button type="submit" className="bg-sky-500 dark:bg-[#634EE4] group-hover:bg-white group-hover:text-sky-600 dark:group-hover:text-[#634EE4] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-lg cursor-pointer">Сдать</button>
                        </form>
                      )}
                    </div>

                    {trial.comment && <p className="text-xs italic text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-purple-950/40 p-2 rounded-xl group-hover:bg-white/10 group-hover:text-white leading-relaxed">Замечание эксперта: {trial.comment}</p>}
                  </div>

                </div>
              ))
            )}
          </div>
        ) : (
          /* 👑 ИНТЕРФЕЙС ПРЕПОДАВАТЕЛЯ / РУКОВОДИТЕЛЯ */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            
            {/* ЛЕВАЯ КОЛОНКА (2/3): Список студентов (Карточки монолитны, счетчик живой) */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 pl-1">Успеваемость учеников на пробниках</h3>
              {studentsList.length === 0 ? (
                <p className="text-xs font-medium text-slate-400 text-center py-8 bg-white dark:bg-[#140e24]/75 rounded-3xl border border-blue-100/60">На платном курсе пока нет учеников.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {studentsList.map((student) => {/* 🚀 ИСПРАВЛЕНО: Убраны белые рамки, добавлено круговое SVG-кольцо среднего балла справа на карточке */
const studentTrials = trialsList.filter(t => t.userId === student.id);
const uncheckedCount = studentTrials.filter(t => t.status === 'На проверке').length;

// Расчёт живого счетчика сданных бланков
const submittedTrialsCount = studentTrials.filter(t => t.solutionUrl && t.solutionUrl.trim() !== '').length;

// Высчитываем средний тестовый балл ученика по проверенным пробникам
const checkedTrials = studentTrials.filter(t => t.status === 'Проверено');
const avgScore = checkedTrials.length > 0 
  ? Math.round(checkedTrials.reduce((sum, t) => sum + t.score, 0) / checkedTrials.length) 
  : 0;

// Параметры для математики SVG-круга
const radius = 22;
const circumference = 2 * Math.PI * radius;
const strokeDashoffset = circumference - (avgScore / 100) * circumference;

return (
  <div key={student.id} className="bg-white dark:bg-[#140e24]/75 p-5 rounded-3xl border-none shadow-sm flex flex-col justify-between group hover:border-sky-400 dark:hover:border-[#634EE4] hover:bg-sky-500 dark:hover:bg-[#634EE4] transition-all duration-300 min-h-44">
    
    {/* Верхняя половина карточки с именем и круглым виджетом балла */}
    <div className="flex justify-between items-start gap-4">
      <div className="space-y-1 min-w-0">
        <div className="text-xl font-black text-sky-500 dark:text-purple-400 group-hover:text-white transition-colors duration-300 tracking-tighter">
          {submittedTrialsCount < 10 ? `0${submittedTrialsCount}` : submittedTrialsCount}
        </div>
        <h4 className="text-sm font-black text-slate-800 dark:text-slate-100 group-hover:text-white transition-colors duration-300 tracking-tight truncate">{student.name}</h4>
        <p className="text-[10px] text-slate-400 group-hover:text-sky-100 transition-colors duration-300 truncate">{student.email}</p>
      </div>

      {/* 🚀 ИСПРАВЛЕНО: Шкала среднего балла увеличена в размерах, а цифра отцентрирована и стала мега-заметной */}
<div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
  <svg className="w-full h-full transform -rotate-90">
    <circle cx="32" cy="32" r="30" className="stroke-slate-100 dark:stroke-purple-950/60 fill-none group-hover:stroke-white/20" strokeWidth="4" />
    <circle 
      cx="32" cy="32" r="30" 
      className="stroke-sky-500 dark:stroke-purple-400 fill-none group-hover:stroke-white transition-all duration-500" 
      strokeWidth="4" 
      strokeDasharray={2 * Math.PI * 30}
      strokeDashoffset={2 * Math.PI * 30 - (avgScore / 100) * (2 * Math.PI * 30)}
      strokeLinecap="round"
    />
  </svg>
  <div className="absolute inset-0 flex items-center justify-center">
    <span className="text-sm font-black tracking-tighter text-sky-600 dark:text-purple-400 group-hover:text-white transition-colors duration-300 select-none">
      {avgScore < 10 && avgScore > 0 ? `0${avgScore}` : avgScore === 0 ? '00' : avgScore}
    </span>
  </div>
</div>

    </div>
    
    {/* Нижняя панель действий куратора с бланками */}
    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-purple-950/40 group-hover:border-white/20 transition-colors duration-300 flex flex-col gap-2">
      {studentTrials.filter(t => t.solutionUrl).map((trialWithSol) => (
        <a 
          key={trialWithSol.id}
          href={trialWithSol.solutionUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full text-center bg-sky-50 hover:bg-sky-100 dark:bg-purple-950/40 dark:hover:bg-purple-900/50 text-sky-600 dark:text-purple-300 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider block transition-colors border border-sky-100/30 dark:border-purple-500/10 cursor-pointer"
        >
          Бланки КИМ: {trialWithSol.title}
        </a>
      ))}

      <div className="flex items-center justify-between mt-1">
        <span className={`px-2 py-1 rounded-xl text-[9px] font-black uppercase tracking-wider transition-colors duration-300 ${
          uncheckedCount > 0 
            ? 'bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400 group-hover:bg-white/20 group-hover:text-white' 
            : 'bg-sky-50 text-sky-600 dark:bg-purple-950/40 dark:text-purple-300 group-hover:bg-white/20 group-hover:text-white'
        }`}>{uncheckedCount > 0 ? `Проверить: ${uncheckedCount}` : 'Всё проверено'}</span>
        <a href={`/supervisor/students/${student.id}`} className="text-[10px] font-black uppercase tracking-widest text-sky-500 dark:text-purple-400 group-hover:text-white transition-colors duration-300 underline underline-offset-4 cursor-pointer"></a>
      </div>
    </div>

  </div>
);

                  })}
                </div>
              )}
            </div>

            {/* ПРАВАЯ КОЛОНКА (1/3): Панели управления потоком КИМ */}
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 pl-1">Управление экзаменами</h3>
              <div className="bg-white dark:bg-[#140e24]/75 p-5 rounded-3xl border border-blue-100/40 shadow-sm space-y-4">
                <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-500">Загрузить новый пробник</h4>
                <form action={createBulkTrial} className="space-y-3">
                  <CourseSelect user={user} selected={courseFilter} />
                  <input type="text" name="title" required placeholder="Месяц и номер пробника" className="w-full bg-slate-50 border border-slate-200 dark:bg-[#0c0714] dark:border-purple-500/10 rounded-xl px-4 py-2.5 text-xs font-bold focus:outline-none focus:border-sky-500" />
{/* 🚀 ИСПРАВЛЕНО: Кнопка выбора файла больше не белая, она идеально сочетается со стилем панели дня и ночи */}
<input 
  type="file" 
  name="pdfFile" 
  accept=".pdf" 
  required 
  className="w-full bg-slate-50 border border-slate-200 dark:bg-[#0c0714] dark:border-purple-500/10 rounded-xl px-3 py-2 text-xs font-bold text-slate-400 file:mr-2 file:py-0.5 file:px-2 file:rounded file:border-0 file:text-[10px] file:font-black file:uppercase file:bg-sky-50 file:text-sky-600 dark:file:bg-purple-950/40 dark:file:text-purple-300 cursor-pointer" 
/>
                  <input type="submit" value="Опубликовать на курс" className="w-full bg-sky-500 hover:bg-sky-600 dark:bg-[#634EE4] dark:hover:bg-[#523fd1] text-white text-xs font-black uppercase tracking-wider py-2.5 rounded-xl shadow-md transition-all cursor-pointer text-center" />
                </form>
              </div>

              <div className="bg-white dark:bg-[#140e24]/75 p-5 rounded-3xl border border-blue-100/40 shadow-sm space-y-4">
                <h4 className="text-[11px] font-black uppercase tracking-wider text-blue-400">Аннулировать пробник</h4>
                {uniqueGroupTrials.length === 0 ? (
                  <p className="text-[11px] text-slate-400 font-medium py-2 text-center">Выданных пробников нет.</p>
                ) : (
                  <form action={deleteBulkTrial} className="space-y-3">
                    <select name="batchId" required className="w-full bg-slate-50 border border-slate-200 dark:bg-[#0c0714] dark:border-purple-500/10 rounded-xl px-3 py-2 text-xs font-bold focus:outline-none text-slate-700 dark:text-slate-300">
                      {uniqueGroupTrials.map(({ batchId,title }) => <option key={batchId} value={batchId}>{title}</option>)}
                    </select>
                    <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white text-xs font-black uppercase tracking-wider py-2.5 rounded-xl shadow-sm transition-colors cursor-pointer">Удалить пробник</button>
                  </form>
                )}
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
