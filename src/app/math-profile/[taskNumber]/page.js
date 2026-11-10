import { EGE_INTRO_SECTIONS, egeSection, taskModuleForRoute } from '@/lib/ege-sections';
import {getTaskModule} from '@/lib/task-modules';
import {notFound} from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import TaskListBlock from './TaskListBlock';
import ErrorReportModal from '../ErrorReportModal';
import SectionExplorer from '../stereometry/SectionExplorer';
import DerivativeReference from './DerivativeReference';

export const dynamic = 'force-dynamic';

export default async function TaskPage({ params }) {
  const { taskNumber } = await params;
  const storageModule = taskModuleForRoute(taskNumber);
  if (!getTaskModule(storageModule)) notFound();

  // Словарь для олимпиадных разделов (используется и в заголовках, и в хлебных крошках)
  const olympiadTitles = {
    1: 'Логика', 2: 'Теория чисел', 3: 'Тождественные преобразования', 4: 'Комбинаторика (Теория Вероятности)',
    5: 'Уравнения и системы', 6: 'Текстовые Задачи', 7: 'Классическая Алгебра', 8: 'Последовательности',
    9: 'Тригонометрия', 10: 'Логарифмы и показательные функции', 11: 'Параметры', 12: 'Функции',
    13: 'Планиметрия', 14: 'Стереометрия'
  };

  // 1️⃣ ВЫЧИСЛЯЕМ ЗАГОВОР СТРАНИЦЫ (pageTitle)
  let pageTitle = `Задание №${taskNumber}`;

  if (taskNumber && taskNumber.includes('-intro') && !taskNumber.includes('olympiad')) {
    const intro = EGE_INTRO_SECTIONS.find((item) => `${item.number}-intro` === taskNumber);
    pageTitle = `Подготовительные задания №${intro.number}: ${intro.title}`;
  } else if (taskNumber && taskNumber.includes('olympiad-') && taskNumber.includes('-main')) {
    const num = parseInt(taskNumber.replace('olympiad-', ''), 10);
    pageTitle = `Олимпиады: ${olympiadTitles[num] || 'Задачи'}`;
  } else if (taskNumber && taskNumber.includes('olympiad-') && taskNumber.includes('-intro')) {
    const num = parseInt(taskNumber.replace('olympiad-', ''), 10);
    pageTitle = `Олимпиады (Подготовительные): ${olympiadTitles[num] || 'Задачи'}`;
  } else {
    const taskNumberInt = parseInt(taskNumber, 10);
    pageTitle = `Задание №${taskNumber}: ${egeSection(taskNumberInt)?.title || 'Разбор темы'}`;
  }

  // 2️⃣ ВЫЧИСЛЯЕМ ТЕКСТ ДЛЯ ХЛЕБНЫХ КРОШЕК (breadcrumbLabel)
  let breadcrumbLabel = `Задание ${taskNumber}`;

  if (taskNumber && taskNumber.includes('-intro') && !taskNumber.includes('olympiad')) {
    // Подготовительный ЕГЭ: "Задание 18: подготовительные"
    const cleanNum = taskNumber.replace('-intro', '');
    breadcrumbLabel = `Задание ${cleanNum}: подготовительные`;
  } else if (taskNumber && taskNumber.includes('olympiad-') && taskNumber.includes('-intro')) {
    // Подготовительные олимпиады: "Комбинаторика (ТерВер): подготовительные"
    const num = parseInt(taskNumber.replace('olympiad-', ''), 10);
    const topicName = olympiadTitles[num] || 'Задачи';
    breadcrumbLabel = `${topicName}: подготовительные`;
  } else if (taskNumber && taskNumber.includes('olympiad-') && taskNumber.includes('-main')) {
    // Основной олимпиадный банк: "Комбинаторика (ТерВер): олимпиады"
    const num = parseInt(taskNumber.replace('olympiad-', ''), 10);
    const topicName = olympiadTitles[num] || 'Задачи';
    breadcrumbLabel = `${topicName}: олимпиады`;
  } else {
    // Стандартное боевое ЕГЭ
    breadcrumbLabel = `Задание ${taskNumber}`;
  }

  const taskNumberIntForComponent = parseInt(taskNumber, 10) || 0;

  return (
    <div className="relative min-h-screen bg-slate-100 dark:bg-[#120b24] p-8 transition-colors duration-500 text-slate-600 dark:text-slate-400 pt-[140px] pb-20 w-full overflow-x-hidden flex flex-col items-center">
      
      {/* ОСНОВНОЙ КОНТЕНТ */}
      <div className="w-full max-w-5xl relative z-10 space-y-8">
        
        {/* 🚀 ИСПРАВЛЕНО: Интеллектуальный конструктор хлебных крошек по вашему регламенту для ВСЕХ разделов платформы! */}
        <div className="flex gap-2 text-sm text-slate-400/80 mb-6 font-medium dark:text-slate-400/60 select-none">
          <Link href="/" className="hover:text-sky-400 transition">Главная</Link>
          <span>/</span>
          <Link href="/math-profile" className="hover:text-sky-400 transition">Банк заданий</Link>
          <span>/</span>
          <span className="text-slate-700 font-semibold dark:text-white/90">
            {breadcrumbLabel}
          </span>
        </div>

        {/* Чистый строгий заголовок */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 border-b border-slate-200/60 pb-4 dark:border-purple-500/20">
          <h1 className="text-3xl font-black text-sky-600 dark:text-white tracking-tight drop-shadow-sm leading-tight">
            {pageTitle}
          </h1>
        </div>

        {(taskNumber === '15-intro' || taskNumber === '3') && <SectionExplorer key={taskNumber} />}
        {storageModule === 'ege-optimization' && <DerivativeReference />}

        {/* Список задач и модалка репортов */}
        <div className="space-y-4 pt-2">
          <TaskListBlock key={`tasks-${taskNumber}`} storageModule={storageModule} />
          <ErrorReportModal key={`report-${taskNumber}`} sectionNumber={taskNumberIntForComponent} module={taskNumber} />
        </div>

      </div>
    </div>
  );
}
