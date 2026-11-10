import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getCurrentUser } from '@/lib/auth';

export default async function Home() {
  // 🔐 Железная проверка кук на сервере (работает синхронно с layout.js)

  // ИСПРАВЛЕНО: Читаем актуальное имя куки сессии
  const isAuthenticated = Boolean(await getCurrentUser());

  return (
    <main className="relative min-h-screen bg-transparent overflow-x-hidden">
      
      {/* 🌌 ЗАДНИЙ ФОН: ПЛАВНОЕ СМЕНА КАРТИНКИ */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* ☀️ Светлая картинка */}
        <div className="absolute inset-0 block dark:hidden">
          <Image
            src="/hero-bg.jpg"
            alt="Hero Background Light"
            fill
            priority
            unoptimized
            className="object-cover object-center lg:object-right-bottom transition-all duration-500"
          />
        </div>

        {/* 🌙 Тёмная картинка */}
        <div className="absolute inset-0 hidden dark:block">
          <Image
            src="/hero-bg-dark.jpg"
            alt="Hero Background Dark"
            fill
            priority
            unoptimized
            className="object-cover object-center lg:object-right-bottom transition-all duration-500"
          />
        </div>
      </div>

      {/* 🌟 КОНТЕНТ */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 pt-[240px] pb-12 flex flex-col justify-start">
        
        <div className="max-w-xl lg:max-w-2xl">
         {/* 🚀 ИСПРАВЛЕНО: Весь заголовок целиком переведен на один сочный неоново-голубой цвет */}
<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-sky-500 dark:text-purple-400 mb-6 leading-tight transition-colors duration-300">
  Курсы ЕГЭ <br />
  по математике
</h1>


          {/* Подзаголовок */}
          <p className="text-base md:text-lg text-slate-800 dark:text-slate-200 mb-10 font-medium leading-relaxed max-w-lg transition-colors duration-300">
            Системная подготовка, опытные преподаватели и уверенность в результате вместе с Aзимут
          </p>
        </div>

        {/* 🚀 УМНЫЕ СЕРВЕРНЫЕ КНОПКИ — ПОЛНОСТЬЮ СИНХРОННЫ С ШАПКОЙ */}
        <div className="flex flex-wrap gap-4 mb-16 items-center">
          {isAuthenticated ? (
            <Link 

href="/teachers"
/* 🚀 ИСПРАВЛЕНО: Полностью возвращена красивая форма rounded-2xl и отступы, но цвета зафиксированы в строгом однотонном неоне */
className="px-8 py-3.5 font-bold rounded-2xl shadow-md transition-all duration-300 uppercase tracking-wider text-xs whitespace-nowrap cursor-pointer
           bg-sky-500 hover:bg-sky-600 text-white shadow-sky-500/20 hover:shadow-xl hover:shadow-sky-500/40
           dark:bg-[#7C3AED] dark:hover:bg-[#6D28D9] dark:text-white dark:border dark:border-purple-500/20 dark:shadow-[0_0_15px_rgba(124,58,237,0.3)] dark:hover:shadow-[0_0_25px_rgba(124,58,237,0.6)]"

>
  Преподаватели

            </Link>
          ) : (
            <Link 
              href="/register"
className="px-8 py-3.5 font-bold rounded-2xl shadow-md transition-all duration-300 uppercase tracking-wider text-xs whitespace-nowrap
           bg-gradient-to-r from-sky-300 via-sky-400 to-blue-400 text-white shadow-sky-400/10 hover:shadow-xl hover:shadow-sky-400/20
           dark:from-[#7C3AED] dark:via-[#634EE4] dark:to-[#4F46E5] dark:text-white dark:border dark:border-purple-500/20 dark:shadow-[0_0_15px_rgba(99,78,228,0.3)] dark:hover:shadow-[0_0_25px_rgba(99,78,228,0.6)] dark:hover:brightness-110"
            >
              Зарегистрироваться
            </Link>
          )}

<Link 
  href="/math-profile"
  className="px-8 py-3.5 font-bold text-xs uppercase tracking-wider rounded-2xl transition-all duration-300 hover:scale-[1.01] cursor-pointer border
             bg-white text-sky-500 border-sky-400/40 shadow-sm hover:border-sky-600 hover:text-sky-600 hover:shadow-[0_0_15px_rgba(14,165,233,0.2)]
             dark:bg-[#140e24]/40 dark:text-purple-400 dark:border-purple-500/30 dark:hover:border-purple-400 dark:hover:text-purple-300 dark:hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
>
  ЕГЭ
</Link>

<Link href="/olympiads" className="px-8 py-3.5 font-bold text-xs uppercase tracking-wider rounded-2xl border border-sky-400/40 bg-white text-sky-600 shadow-sm hover:border-sky-600 dark:border-purple-500/30 dark:bg-[#140e24]/40 dark:text-purple-400">
  Олимпиады
</Link>

        </div>

                  {/* 🚀 ИСПРАВЛЕНО: Все четыре подзаголовка преимуществ переведены со старого фиолетового цвета на чистый неоново-голубой text-sky-500 */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 max-w-md border-t border-slate-300/40 dark:border-white/15 pt-8 transit">
            <div>
              <span className="block text-[10px] font-bold tracking-widest text-sky-500 dark:text-purple-400 uppercase mb-1">
                Подготовка
              </span>
              <p className="text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200">
                Эффективная и современная система образования
              </p>
            </div>

            <div>
              <span className="block text-[10px] font-bold tracking-widest text-sky-500 dark:text-purple-400 uppercase mb-1">
                Высокие баллы
              </span>
              <p className="text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200">
                Неизбежность достижения поставленной цели
              </p>
            </div>

            <div>
              <span className="block text-[10px] font-bold tracking-widest text-sky-500 dark:text-purple-400 uppercase mb-1">
                Мощные преподаватели
              </span>
              <p className="text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200">
                За нашими плечами опыт и крутые результаты
              </p>
            </div>

            <div>
              <span className="block text-[10px] font-bold tracking-widest text-sky-500 dark:text-purple-400 uppercase mb-1">
                Забота
              </span>
              <p className="text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200">
                Индивидуальный подход и заряд мотивации
              </p>
            </div>
          </div>


      </div>
    </main>
  );
}
