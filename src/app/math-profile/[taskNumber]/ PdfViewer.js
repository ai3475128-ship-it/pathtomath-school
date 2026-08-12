import Link from 'next/link';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import dynamic from 'next/dynamic'; // Импортируем инструмент динамического подключения
import { toggleTaskProgress } from './actions';

// Подключаем наш PdfViewer, полностью запрещая Next.js рендерить его на сервере!
const DynamicPdfViewer = dynamic(() => import('./PdfViewer'), { ssr: false });

async function getTaskProgressStatus(taskNumberInt) {
  const db = await open({
    filename: path.join(process.cwd(), 'prisma', 'dev.db'),
    driver: sqlite3.Database
  });

  const user = await db.get('SELECT id FROM User LIMIT 1');
  if (!user) {
    await db.close();
    return false;
  }

  const progress = await db.get(
    'SELECT * FROM Progress WHERE userId = ? AND taskNumber = ?',
    [user.id, taskNumberInt]
  );

  await db.close();
  return !!progress;
}

export default async function TaskPage({ params }) {
  const { taskNumber } = await params;
  const taskNumberInt = parseInt(taskNumber);
  const isCompleted = await getTaskProgressStatus(taskNumberInt);

  const taskData = {
    title: `Задание №${taskNumber}: Полный разбор темы`,
    description: `В этом разделе собран бесплатный банк задач и вся необходимая теория для успешного решения Задания №${taskNumber} на реальном экзамене ЕГЭ. Изучайте ловушки составителей и конспекты прямо на этой странице.`,
    pdfUrl: taskNumberInt === 13 ? '/math-13.pdf' : null,
  };

  const handleToggle = async () => {
    'use server';
    await toggleTaskProgress(taskNumberInt, isCompleted);
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-600 p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Хлебные крошки */}
        <div className="flex gap-2 text-sm text-slate-400 mb-6 font-medium">
          <Link href="/" className="hover:text-blue-500 transition">Главная</Link>
          <span>/</span>
          <Link href="/math-profile" className="hover:text-blue-500 transition">Математика</Link>
          <span>/</span>
          <span className="text-slate-700 font-semibold">Задание {taskNumber}</span>
        </div>

        {/* Блок заголовка и интерактивной кнопки */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-400 drop-shadow-sm">
            {taskData.title}
          </h1>
          
          <form action={handleToggle}>
            <button 
              type="submit"
              className={`px-5 py-2.5 rounded-xl font-extrabold text-sm transition shadow-sm border ${
                isCompleted 
                  ? 'bg-blue-50 text-blue-500 border-blue-200 hover:bg-blue-100/50' 
                  : 'bg-gradient-to-r from-blue-200 via-indigo-100 to-purple-200 hover:from-blue-300 hover:to-purple-300 text-slate-700 border-white/60 shadow-blue-500/5'
              }`}
            >
              {isCompleted ? '✓ Задание изучено (Сбросить)' : 'Отметить как изученное'}
            </button>
          </form>
        </div>

        <p className="text-slate-500 mb-8 max-w-3xl leading-relaxed font-medium text-sm sm:text-base">{taskData.description}</p>

        {/* ДВЕ КОЛОНКИ: Описание и Боковая панель */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-blue-100/40 text-sm font-medium text-slate-500 leading-relaxed">
              Рекомендуется сначала ознакомиться с теоретической базой, выписать основные формулы в рабочую тетрадь, а затем приступить к выполнению практических упражнений из файла домашней работы. После завершения изучения темы не забудьте отметить задание как выполненное вверху страницы.
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-blue-100/60 shadow-sm shadow-blue-900/5 h-fit space-y-4">
            <div>
              <h3 className="text-lg font-bold text-slate-800">Материалы к заданию</h3>
              <p className="text-xs text-slate-400 mt-1 font-medium">Полезные файлы и домашняя работа для закрепления темы.</p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="#" className="flex items-center justify-center w-full text-center font-bold py-3 px-4 rounded-xl border border-blue-100 bg-white hover:bg-slate-50 text-slate-600 shadow-sm transition text-sm">
                Домашняя работа (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* НИЖНИЙ БЛОК: Безопасный встроенный PDF-просмотрщик без ошибок гидратации */}
        {taskData.pdfUrl ? (
          <DynamicPdfViewer url={taskData.pdfUrl} />
        ) : (
          <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl border border-blue-100/40 text-center text-sm font-medium text-slate-400">
            Материалы для этого задания находятся в процессе подготовки и появятся в ближайшее время.
          </div>
        )}

      </div>
    </div>
  );
}
