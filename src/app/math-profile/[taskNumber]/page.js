import Link from 'next/link';
import Image from 'next/image'; 
import TaskListBlock from './TaskListBlock';
import ErrorReportModal from '../ErrorReportModal';

export const dynamic = 'force-dynamic';

export default async function TaskPage({ params }) {
  const { taskNumber } = await params;
  const taskNumberInt = parseInt(taskNumber);

  const taskData = {
    title: `Задание №${taskNumber}: Полный разбор темы`,
    description: `В этом разделе собран бесплатный банк задач и вся необходимая теория для успешного решения Задания №${taskNumber} на реальном экзамене ЕГЭ. Изучайте ловушки составителей и конспекты прямо на этой странице.`,
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#03000a] p-8 transition-colors duration-500 text-slate-600 dark:text-slate-400 pt-[140px] pb-20 w-full overflow-x-hidden flex flex-col items-center">
      
      {/* ЗАДНИЙ ФОН */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 block dark:hidden">
          <Image src="/auth-bg-light.jpg" alt="Background Light" fill priority unoptimized className="object-cover object-center brightness-95" />
        </div>
        <div className="absolute inset-0 hidden dark:block">
          <Image src="/auth-bg.jpg" alt="Background Dark" fill priority unoptimized className="object-cover object-center" />
        </div>
      </div>

      {/* КОНТЕНТ */}
      <div className="w-full max-w-5xl relative z-10 space-y-8">
        
        {/* Хлебные крошки */}
        <div className="flex gap-2 text-sm text-slate-400/80 mb-6 font-medium dark:text-slate-400/60 select-none">
          <Link href="/" className="hover:text-sky-400 transition">Главная</Link>
          <span>/</span>
          <Link href="/math-profile" className="hover:text-sky-400 transition">Математика</Link>
          <span>/</span>
          <span className="text-slate-700 font-semibold dark:text-white/90">Задание {taskNumber}</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <h1 className="text-3xl font-black text-sky-600 dark:text-white tracking-tight drop-shadow-sm">
            {taskData.title}
          </h1>
        </div>

        <p className="text-slate-500 dark:text-slate-300 mb-8 max-w-3xl leading-relaxed text-sm sm:text-base font-medium">
          {taskData.description}
        </p>

        <div className="space-y-4">
          <div className="border-b border-blue-100/30 pb-2 dark:border-purple-500/20">
            <h3 className="text-xl font-black text-slate-800 dark:text-white/90 tracking-tight">
              Материалы и задачи урока
            </h3>
          </div>
          
          <TaskListBlock taskNumberInt={taskNumberInt} />
          
          {/* 🚀 ИСПРАВЛЕНО: Кнопка рендерится строго внутри контента, завершая блок материалов уроков */}
          <ErrorReportModal sectionNumber={taskNumberInt} />
        </div>

      </div>
    </div>
  );
}
