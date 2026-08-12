import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cookies } from 'next/headers';

export default async function Home() {
  // 🔐 Железная проверка кук на сервере (работает синхронно с layout.js)
  const cookieStore = await cookies();
  // ИСПРАВЛЕНО: Читаем актуальное имя куки сессии
  const isAuthenticated = !!cookieStore.get('userSession')?.value;

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
          {/* Заголовок */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1E56DE] dark:text-white mb-6 leading-tight transition-colors duration-300">
            Курсы ЕГЭ <br />
            по математике
          </h1>

          {/* Подзаголовок */}
          <p className="text-base md:text-lg text-slate-800 dark:text-slate-200 mb-10 font-medium leading-relaxed max-w-lg transition-colors duration-300">
            Системная подготовка, опытные преподаватели и уверенность в результате вместе с PATHtoMATH
          </p>
        </div>

        {/* 🚀 УМНЫЕ СЕРВЕРНЫЕ КНОПКИ — ПОЛНОСТЬЮ СИНХРОННЫ С ШАПКОЙ */}
        <div className="flex flex-wrap gap-4 mb-16 items-center">
          {isAuthenticated ? (
            <Link 
              href="/profile"
              className="px-8 py-3.5 font-bold rounded-2xl shadow-md transition-all duration-300 uppercase tracking-wider text-xs whitespace-nowrap
                         bg-gradient-to-r from-sky-300 via-sky-400 to-blue-400 text-white shadow-sky-400/10 hover:shadow-xl hover:shadow-sky-400/20
                         dark:from-[#E3D5FF] dark:via-[#C9B3FF] dark:to-[#A387FF] dark:text-[#1E293B] dark:shadow-purple-900/10"
            >
              Прогресс
            </Link>
          ) : (
            <Link 
              href="/register"
              className="px-8 py-3.5 font-bold rounded-2xl shadow-md transition-all duration-300 uppercase tracking-wider text-xs whitespace-nowrap
                         bg-gradient-to-r from-sky-300 via-sky-400 to-blue-400 text-white shadow-sky-400/10 hover:shadow-xl hover:shadow-sky-400/20
                         dark:from-[#E3D5FF] dark:via-[#C9B3FF] dark:to-[#A387FF] dark:text-[#1E293B] dark:shadow-purple-900/10"
            >
              Зарегистрироваться
            </Link>
          )}

          <Link 
            href="/math-profile"
            className="px-8 py-3.5 bg-gradient-to-r from-[#F7F2FF] to-[#EFE7FF] dark:from-purple-950/20 dark:to-indigo-950/20 text-[#2D3748] dark:text-purple-300 font-bold text-xs uppercase tracking-wider rounded-2xl border border-blue-100/20 dark:border-purple-500/10 transition-all duration-300 hover:scale-[1.01]"
          >
            Банк заданий
          </Link>
        </div>

        {/* 🛠️ СЕТКА ПРЕИМУЩЕСТВ */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 max-w-md border-t border-slate-300/40 dark:border-white/15 pt-8 transition-colors duration-300">
          <div>
            <span className="block text-[10px] font-bold tracking-widest text-[#634EE4] dark:text-purple-400 uppercase mb-1">
              Подготовка
            </span>
            <p className="text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200">
              Эффективная и современная система образования
            </p>
          </div>

          <div>
            <span className="block text-[10px] font-bold tracking-widest text-[#634EE4] dark:text-purple-400 uppercase mb-1">
              Высокие баллы
            </span>
            <p className="text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200">
              Неизбежность достижения поставленной цели
            </p>
          </div>

          <div>
            <span className="block text-[10px] font-bold tracking-widest text-[#634EE4] dark:text-purple-400 uppercase mb-1">
              Мощные преподаватели
            </span>
            <p className="text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200">
              За нашими плечами опыт и крутые результаты
            </p>
          </div>

          <div>
            <span className="block text-[10px] font-bold tracking-widest text-[#634EE4] dark:text-purple-400 uppercase mb-1">
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
