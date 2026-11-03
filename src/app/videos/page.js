import {requireUser} from '@/lib/auth';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default async function VideosPage() {
  await requireUser();
  const taskTitles = {
    1: 'Планиметрия', 2: 'Векторы', 3: 'Стереометрия', 4: 'Начало теории вероятностей',
    5: 'Вероятности сложных событий', 6: 'Простейшие уравнения', 7: 'Вычисления и преобразования',
    8: 'Производная и первообразная', 9: 'Задачи с прикладным содержанием', 10: 'Текстовые задачи',
    11: 'Графики функций', 12: 'Наибольшее и наименьшее значение', 13: 'Уравнения',
    14: 'Стереометрическая задача', 15: 'Неравенства', 16: 'Экономическая задача',
    17: 'Планиметрическая задача', 18: 'Задача с параметром', 19: 'Числа и их свойства'
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#03000a] p-8 transition-colors duration-500 text-slate-600 dark:text-slate-400 pt-10 pb-20 w-full overflow-x-hidden flex flex-col items-center">
      
      {/* 🔮 ВНЕДРЕНО: Адаптивный изолированный задний фон для раздела Видеоуроков */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Рендерится только в светлой теме */}
        <div className="absolute inset-0 block dark:hidden">
          <Image src="/videos-bg-light.jpg" alt="Фон видеоуроков (Светлая тема)" fill priority unoptimized className="object-cover object-center brightness-95" />
        </div>
        {/* Рендерится только в тёмной теме */}
        <div className="absolute inset-0 hidden dark:block">
          <Image src="/videos-bg-dark.jpg" alt="Фон видеоуроков (Тёмная тема)" fill priority unoptimized className="object-cover object-center" />
        </div>
      </div>

      {/* 🚀 ОСНОВНОЙ КОНТЕНТ */}
      <div className="w-full max-w-6xl mx-auto relative z-10 flex flex-col">
        
        <div className="mb-12 text-center sm:text-left">
          <span className="text-xs font-black bg-blue-50 text-sky-600 border border-blue-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider dark:bg-purple-950/40 dark:text-purple-400 dark:border-purple-500/30">
            Медиатека Азимут
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mt-4 mb-4 text-sky-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:to-purple-200">
            Видеоуроки
          </h1>
          <p className="text-slate-400 dark:text-slate-300 max-w-2xl leading-relaxed text-sm sm:text-base font-semibold">
            Интерактивные видеолекции, разборы ловушек составителей и вся необходимая теория по темам.
          </p>
        </div>

        {/* Часть 1 */}
        <div className="mb-14">
          <div className="border-b border-blue-100/60 pb-3 mb-6 dark:border-purple-950/40">
            <h2 className="text-2xl font-black text-slate-800 dark:text-white/100 tracking-tight">Часть 1</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(12)].map((_, i) => {
              const taskNum = i + 1;
              return (
                <Link
                  key={taskNum}
                  href={`/videos/${taskNum}`}
                  className="group bg-white/90 backdrop-blur-md border border-blue-100/60 p-6 rounded-[24px] shadow-sm hover:shadow-xl hover:bg-sky-500 hover:border-sky-500 dark:bg-purple-950/10 dark:border-purple-500/20 dark:hover:bg-[#634EE4] dark:hover:border-[#634EE4] transition-all duration-300"
                >
                  <div className="flex flex-col items-start w-full">
                    <span className="text-3xl font-black tracking-tight mb-3 transition-colors duration-300 text-sky-500/80 group-hover:text-white/80 dark:text-purple-400/80 dark:group-hover:text-white/50">
                      {String(taskNum).padStart(2, '0')}
                    </span>
                    <h3 className="text-lg font-black tracking-tight leading-snug transition-colors duration-300 text-slate-800 group-hover:text-white dark:text-white dark:group-hover:text-white">
                      {taskTitles[taskNum]}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Часть 2 */}
        <div>
          <div className="border-b border-blue-100/60 pb-3 mb-6 dark:border-purple-950/40">
            <h2 className="text-2xl font-black text-slate-800 dark:text-white/100 tracking-tight">Часть 2</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(7)].map((_, i) => {
              const taskNum = i + 13;
              return (
                <Link
                  key={taskNum}
                  href={`/videos/${taskNum}`}
                  className="group bg-white/90 backdrop-blur-md border border-blue-100/60 p-6 rounded-[24px] shadow-sm hover:shadow-xl hover:bg-sky-500 hover:border-sky-500 dark:bg-purple-950/10 dark:border-purple-500/20 dark:hover:bg-[#634EE4] dark:hover:border-[#634EE4] transition-all duration-300"
                >
                  <div className="flex flex-col items-start w-full">
                    <span className="text-3xl font-black tracking-tight mb-3 transition-colors duration-300 text-sky-500/80 group-hover:text-white/80 dark:text-purple-400/80 dark:group-hover:text-white/50">
                      {String(taskNum).padStart(2, '0')}
                    </span>
                    <h3 className="text-lg font-black tracking-tight leading-snug transition-colors duration-300 text-slate-800 group-hover:text-white dark:text-white dark:group-hover:text-white">
                      {taskTitles[taskNum]}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
