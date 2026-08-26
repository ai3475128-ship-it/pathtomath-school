import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default function MathProfilePage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-[#03000a] p-8 transition-colors duration-500 text-slate-600 dark:text-slate-400 pt-[140px] pb-20 w-full overflow-x-hidden flex flex-col items-center justify-center">
      
      {/* 🔮 ОФИЦИАЛЬНЫЙ АДАПТИВНЫЙ ЗАДНИЙ ФОН ПЛАТФОРМЫ */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Рендерится только в светлой теме */}
        <div className="absolute inset-0 block dark:hidden">
          <Image src="/bank-bg-light.jpg" alt="Фон банка заданий (Светлая тема)" fill priority unoptimized className="object-cover object-center brightness-95" />
        </div>
        {/* Рендерится только в тёмной теме */}
        <div className="absolute inset-0 hidden dark:block">
          <Image src="/bank-bg-dark.jpg" alt="Фон банка заданий (Тёмная тема)" fill priority unoptimized className="object-cover object-center" />
        </div>
      </div>

      {/* 🚀 ОСНОВНОЙ КОНТЕНТ */}
      <div className="w-full max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Минималистичный текстовый заголовок */}
        <div className="mb-16 text-center max-w-2xl">
          <span className="text-xs font-black bg-blue-50 text-sky-600 border border-blue-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider dark:bg-purple-950/40 dark:text-purple-400 dark:border-purple-500/30">
            База знаний Азимут
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mt-5 mb-4 text-sky-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:to-purple-200">
            Банк Заданий
          </h1>
          <p className="text-slate-400 dark:text-slate-300 leading-relaxed text-sm sm:text-base font-semibold">
            Выберите интересующее вас направление для перехода к теоретической и практической базе курсов.
          </p>
        </div>

        {/* 🌗 ДВЕ БОЛЬШИЕ МИНИМАЛИСТИЧНЫЕ ВКЛАДКИ С ЧИСТОЙ ПОДПИСЬЮ И ИНВЕРСИЕЙ ЦВЕТА */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          
          {/* Направление: ЕГЭ Математика */}
          <Link
            href="/math-profile/ege"
            className="group bg-white/80 backdrop-blur-md border border-blue-100/60 p-10 rounded-[28px] shadow-sm flex flex-col justify-between min-h-[260px] 
                       transition-all duration-300 ease-in-out cursor-pointer
                       hover:shadow-2xl hover:bg-sky-500 hover:border-sky-500 
                       dark:bg-purple-950/10 dark:border-purple-500/20 dark:hover:bg-[#634EE4] dark:hover:border-[#634EE4]"
          >
            <div className="flex flex-col items-start w-full h-full justify-end">
              <div>
                <h2 className="text-3xl font-black tracking-tight leading-none mb-3 transition-colors duration-300 text-slate-800 group-hover:text-white dark:text-white">
                  ЕГЭ Математика
                </h2>
                <p className="text-sm font-medium text-slate-400 group-hover:text-white/90 dark:text-slate-400 transition-colors duration-300 leading-relaxed max-w-xs">
                  Полный разбор заданий КИМ, ловушки составителей и конспекты.
                </p>
              </div>
            </div>
          </Link>

          {/* Направление: Олимпиады Математика */}
          <Link
            href="/math-profile/olympiads"
            className="group bg-white/80 backdrop-blur-md border border-blue-100/60 p-10 rounded-[28px] shadow-sm flex flex-col justify-between min-h-[260px] 
                       transition-all duration-300 ease-in-out cursor-pointer
                       hover:shadow-2xl hover:bg-sky-500 hover:border-sky-500 
                       dark:bg-purple-950/10 dark:border-purple-500/20 dark:hover:bg-[#634EE4] dark:hover:border-[#634EE4]"
          >
            <div className="flex flex-col items-start w-full h-full justify-end">
              <div>
                <h2 className="text-3xl font-black tracking-tight leading-none mb-3 transition-colors duration-300 text-slate-800 group-hover:text-white dark:text-white">
                  Олимпиадная Математика
                </h2>
                <p className="text-sm font-medium text-slate-400 group-hover:text-white/90 dark:text-slate-400 transition-colors duration-300 leading-relaxed max-w-xs">
                  Высшая математика, олимпиадные методы и подготовка к перечневым турам.
                </p>
              </div>
            </div>
          </Link>

        </div>

      </div>
    </div>
  );
}
