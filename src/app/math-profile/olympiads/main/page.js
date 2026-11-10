import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default function OlympiadsMainPage() {
  // Полный список 14 олимпиадных разделов
  const olympiadSections = {
    1: 'Логика',
    2: 'Теория чисел',
    3: 'Тождественные преобразования',
    4: 'Комбинаторика\n (Теория Вероятности)',
    5: 'Уравнения и системы',
    6: 'Текстовые Задачи',
    7: 'Классическая Алгебра',
    8: 'Последовательности',
    9: 'Тригонометрия',
    10: 'Логарифмы и показательные функции',
    11: 'Параметры',
    12: 'Функции',
    13: 'Планиметрия',
    14: 'Стереометрия'
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#03000a] p-8 transition-colors duration-500 text-slate-600 dark:text-slate-400 pt-[140px] pb-20 w-full overflow-x-hidden flex flex-col items-center">
      
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
          <span className="text-slate-700 font-semibold dark:text-white/90">Задачи с олимпиад</span>
        </div>

        {/* Заголовок страницы */}
        <div className="border-b border-blue-100/60 pb-4 dark:border-purple-950/40">
          <span className="text-xs font-black bg-blue-50 text-sky-600 border border-blue-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider dark:bg-purple-950/40 dark:text-purple-400 dark:border-purple-500/30">
            База знаний Азимут
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mt-5 mb-4 text-sky-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:to-purple-200">
            Задачи с Олимпиад
          </h1>
          <p className="text-slate-400 dark:text-slate-300 max-w-2xl leading-relaxed text-sm sm:text-base font-semibold">
            Архивы реальных вариантов перечневых туров ОММО, Физтех, Высшая Проба и Ломоносов по всем разделам.
          </p>
        </div>

        {/* 📐 АДАПТИВНАЯ СЕТКА ИЗ 14 ПЛИТОК */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {Object.keys(olympiadSections).map((num) => (
            <Link
              key={num}
              href={`/math-profile/olympiad-${num}-main`}
              scroll={false}
              className="group bg-white/80 backdrop-blur-md border border-blue-100/60 p-6 rounded-[24px] shadow-sm 
                         hover:shadow-xl hover:bg-sky-500 hover:border-sky-500 
                         dark:bg-purple-950/10 dark:border-purple-500/20 dark:hover:bg-[#634EE4] dark:hover:border-[#634EE4] 
                         transition-all duration-300 ease-in-out cursor-pointer min-h-[140px] flex flex-col justify-between"
            >
              <div className="flex flex-col items-start w-full">
                {/* Номер темы */}
                <span className="text-3xl font-black tracking-tight mb-3 transition-colors duration-300 text-sky-500/80 group-hover:text-white/60 dark:text-purple-400/80 dark:group-hover:text-white/50">
                  {String(num).padStart(2, '0')}
                </span>
                {/* Название */}
                    <h3 className="text-base sm:text-lg font-black tracking-tight leading-snug transition-colors duration-300 text-slate-800 group-hover:text-white dark:text-white dark:group-hover:text-white whitespace-pre-line">
      {olympiadSections[num]}
    </h3>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
