'use client';

import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  // Храним состояние: true — темная, false — светлая
  const [isDark, setIsDark] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // 1. При первой загрузке сайта проверяем, какую тему пользователь выбирал ранее
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
    let savedTheme = 'light';
    try { savedTheme = localStorage.getItem('theme') || 'light'; } catch {}
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
    setIsMounted(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  // 2. Функция ручного переключения по клику на плашку
  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);

    if (nextDark) {
      document.documentElement.classList.add('dark');
      try {localStorage.setItem('theme','dark');} catch {} // Запоминаем выбор
    } else {
      document.documentElement.classList.remove('dark');
      try {localStorage.setItem('theme','light');} catch {} // Запоминаем выбор
    }
  };

  // Заглушка, чтобы плашка не моргала до полной загрузки страницы
  if (!isMounted) return <div className="w-18 h-10" />;

  return (
    /* 🚀 ИСПРАВЛЕНО: Полная симметрия! justify-between убран, чтобы внутренние скрытые отступы не ломали геометрию краев */
    <div
      onClick={toggleTheme}
      role="button"
      tabIndex={0}
      aria-label="Переключить тему"
      aria-pressed={isDark}
      onKeyDown={event => {if (event.key === 'Enter' || event.key === ' ') {event.preventDefault();toggleTheme();}}}
      className={`w-18 h-10 rounded-xl p-1 flex items-center cursor-pointer relative border transition-all duration-300 select-none ${
        isDark 
          ? 'bg-purple-950/40 border-purple-500/30' 
          : 'bg-slate-100 border-blue-100'
      }`}
      title={isDark ? 'Включить светлую тему' : 'Включить темную тему'}
    >
      {/* 🏃‍♂️ ЖЕЛЕЗНЫЙ БЕГУНОК: Никаких сложных шагов перевода! Четкая фиксация left-1 (день) и right-1 (ночь) дает идеальные 4 пикселя отступа с обоих концов */}
      <div
        className={`w-8 h-8 rounded-lg absolute transition-all duration-300 ease-in-out z-10 ${
          isDark 
            ? 'left-[36px] bg-purple-900/50 border border-white/40 shadow-[0_0_10px_rgba(168,85,247,0.15)]' 
            : 'left-1 bg-white shadow-md border border-blue-100/70'
        }`}
      />

      {/* ☀️ ИКОНКА СОЛНЦА: Абсолютно спозиционирована на левой половине тумблера */}
      <div className="z-20 w-8 h-8 flex items-center justify-center absolute left-1 pointer-events-none">
        <svg
          xmlns="http://w3.org"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-4 h-4 text-slate-400 dark:text-slate-500 transition-colors duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m0 13.5V21M4.22 4.22l1.59 1.59m12.38 12.38l1.59 1.59M3 12h2.25m13.5 0H21m-16.78 6.22l1.59-1.59M17.66 6.34l1.59-1.59M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
          />
        </svg>
      </div>

      {/* 🌙 ИКОНКА ЛУНЫ: Абсолютно спозиционирована на правой половине тумблера */}
      <div className="z-20 w-8 h-8 flex items-center justify-center absolute right-1 pointer-events-none">
        <svg
          xmlns="http://w3.org"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-4 h-4 text-slate-400 dark:text-slate-300 transition-colors duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </div>
    </div>
  );
}
