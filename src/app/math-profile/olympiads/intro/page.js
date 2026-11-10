import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import OlympiadPreview from '@/app/components/olympiad-cards/OlympiadPreview';
import previewStyles from '@/app/components/olympiad-cards/OlympiadPreview.module.css';

export const dynamic = 'force-dynamic';

export default function OlympiadsIntroPage() {
  // 🚀 ИСПРАВЛЕНО: Темы перенумерованы строго по порядку от 1 до 7 для ровной и красивой сетки
  const allowedSections = [
    { num: 1, title: 'Логика' },
    { num: 2, title: 'Теория чисел' },
    { num: 3, title: 'Тождественные преобразования' },
    { num: 4, title: 'Комбинаторика\n(Теория Вероятности)' },
    { num: 5, title: 'Текстовые Задачи' },
    { num: 6, title: 'Классическая Алгебра' },
    { num: 7, title: 'Функции' }
  ];

  const topicKeys = ['logic', 'numbers', 'identity', 'combinatorics', 'words', 'algebra', 'functions'];

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#03000a] p-8 transition-colors duration-500 text-slate-600 dark:text-slate-400 pt-16 pb-20 w-full overflow-x-hidden flex flex-col items-center">
      
      {/* 🔮 ОФИЦИАЛЬНЫЙ АДАПТИВНЫЙ ЗАДНИЙ ФОН ПЛАТФОРМЫ */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute inset-0 block dark:hidden">
          <Image src="/bank-bg-light.jpg" alt="Фон светлый" fill priority unoptimized className="object-cover object-center brightness-95" />
        </div>
        <div className="absolute inset-0 hidden dark:block">
          <Image src="/bank-bg-dark.jpg" alt="Фон тёмный" fill priority unoptimized className="object-cover object-center" />
        </div>
      </div>

      {/* 🚀 ОСНОВНОЙ КОНТЕНТ */}
      <div className="w-full max-w-6xl mx-auto relative z-10 flex flex-col space-y-10">
        
        {/* Хлебные крошки */}
        <div className="flex gap-2 text-sm text-slate-400/80 mb-2 font-medium dark:text-slate-400/60 select-none">
          <Link href="/" className="hover:text-sky-400 transition">Главная</Link>
          <span>/</span>
          <Link href="/olympiads" className="hover:text-sky-400 transition">Олимпиады</Link>
          <span>/</span>
          <span className="text-slate-700 font-semibold dark:text-white/90">Подготовительные задачи</span>
        </div>

        {/* Заголовок страницы */}
        <div className="border-b border-blue-100/60 pb-4 text-center dark:border-purple-950/40">
          <span className="text-xs font-black bg-blue-50 text-sky-600 border border-blue-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider dark:bg-purple-950/40 dark:text-purple-400 dark:border-purple-500/30">
            База знаний Азимут
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mt-5 mb-4 text-sky-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:to-purple-200">
            Подготовительные Задачи
          </h1>
        </div>

        {/* 📐 АДАПТИВНАЯ СЕТКА ИЗ 7 ПОСЛЕДОВАТЕЛЬНЫХ ПЛИТОК */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {allowedSections.map((sec) => (
            <Link
              key={sec.num}
              href={`/math-profile/olympiad-${sec.num}-intro`}
              scroll={false}
              className={`group bg-white/80 backdrop-blur-md border border-blue-100/60 p-6 rounded-[24px] shadow-sm 
                         hover:shadow-xl hover:bg-sky-500 hover:border-sky-500 
                         dark:bg-purple-950/10 dark:border-purple-500/20 dark:hover:bg-[#634EE4] dark:hover:border-[#634EE4] 
                         transition-all duration-300 ease-in-out cursor-pointer min-h-[140px] flex flex-col justify-between ${previewStyles.card}`}
            >
              <div className={`flex flex-col items-start w-full ${previewStyles.label}`}>
                {/* Последовательный красивый номер темы от 01 до 07 */}
                <span className="text-3xl font-black tracking-tight mb-3 transition-colors duration-300 text-sky-500/80 group-hover:text-white/60 dark:text-purple-400/80 dark:group-hover:text-white/50">
                  {String(sec.num).padStart(2, '0')}
                </span>
                {/* Название */}
                    {/* 🚀 ИСПРАВЛЕНО: whitespace-pre-line заставляет текст переноситься по нашему символу \n */}
    <h3 className="text-base sm:text-lg font-black tracking-tight leading-snug transition-colors duration-300 text-slate-800 group-hover:text-white dark:text-white dark:group-hover:text-white whitespace-pre-line">
      {sec.title}
    </h3>
              </div>
              <OlympiadPreview topic={topicKeys[sec.num - 1]} />
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
