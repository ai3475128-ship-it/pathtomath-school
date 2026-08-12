'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MenuLinks() {
  const pathname = usePathname(); // Автоматически узнаём, какая страница открыта

  return (
    <nav className="hidden md:flex items-center gap-8 h-full">
      
      {/* Вкладка: Главная */}
      <div className="relative flex flex-col items-center justify-center h-full">
        <Link 
          href="/" 
          scroll={false} 
          className={`text-sm font-extrabold transition-colors duration-300 ${
            pathname === '/' 
              ? 'text-[#634EE4] dark:text-purple-400' 
              : 'text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-purple-300'
          }`}
        >
          Главная
        </Link>
        {pathname === '/' && (
          <span className="absolute bottom-0 w-full h-[2.5px] rounded-full bg-sky-500 shadow-[0_0_10px_rgba(56,189,248,0.7)] dark:bg-[#634EE4] dark:shadow-[0_0_12px_#634EE4] transition-all duration-300" />
        )}
      </div>
      
      {/* Вкладка: Преподаватели */}
      <div className="relative flex flex-col items-center justify-center h-full">
        <Link 
          href="/teachers" 
          scroll={false} 
          className={`text-sm font-extrabold transition-colors duration-300 ${
            pathname === '/teachers' 
              ? 'text-[#634EE4] dark:text-purple-400' 
              : 'text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-purple-300'
          }`}
        >
          Преподаватели
        </Link>
        {pathname === '/teachers' && (
          <span className="absolute bottom-0 w-full h-[2.5px] rounded-full bg-sky-500 shadow-[0_0_10px_rgba(56,189,248,0.7)] dark:bg-[#634EE4] dark:shadow-[0_0_12px_#634EE4] transition-all duration-300" />
        )}
      </div>

      {/* Вкладка: Банк заданий */}
      <div className="relative flex flex-col items-center justify-center h-full">
        <Link 
          href="/math-profile" 
          scroll={false} 
          className={`text-sm font-extrabold transition-colors duration-300 ${
            pathname === '/math-profile' 
                      ? 'text-[#634EE4] dark:text-purple-400' 
                      : 'text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-purple-300'
          }`}
        >
          Банк заданий
        </Link>
        {pathname === '/math-profile' && (
          <span className="absolute bottom-0 w-full h-[2.5px] rounded-full bg-sky-500 shadow-[0_0_10px_rgba(56,189,248,0.7)] dark:bg-[#634EE4] dark:shadow-[0_0_12px_#634EE4] transition-all duration-300" />
        )}
      </div>
    </nav>
  );
}
