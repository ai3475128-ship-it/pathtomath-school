'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MenuLinks({ hasUser, userRole }) {
  const pathname = usePathname();

  const isPremiumOrAdmin = userRole === 'PREMIUM_STUDENT' || userRole === 'ADMIN';

  const navLinks = [
    { href: '/', label: 'Главная' },
    { href: '/teachers', label: 'Преподаватели' },
    { href: '/math-profile', label: 'Банк заданий' },
  ];

  if (hasUser && isPremiumOrAdmin) {
    navLinks.push(
      { href: '/homeworks', label: 'Домашние задания' },
      { href: '/trials', label: 'Пробники' }
    );
  }

  return (
    <nav className="hidden md:flex items-center gap-8 h-full">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <div key={link.href} className="relative flex flex-col items-center justify-center h-full">
            {/* 🚀 ИСПРАВЛЕНО: Цвет активной вкладки теперь СТРОГО голубой в светлой теме и фиолетовый в темной */}
            <Link 
              href={link.href} 
              scroll={false} 
              className={`text-sm font-extrabold transition-colors duration-300 ${
                isActive 
                  ? 'text-sky-600 dark:text-purple-400' 
                  : 'text-slate-500 hover:text-sky-500 dark:text-slate-400 dark:hover:text-purple-300'
              }`}
            >
              {link.label}
            </Link>
            
            {/* Нижняя неоновая полоска под цвет темы */}
            {isActive && (
              <span className="absolute bottom-0 w-full h-[2.5px] rounded-full bg-sky-500 shadow-[0_0_10px_rgba(56,189,248,0.7)] dark:bg-purple-500 dark:shadow-[0_0_12px_rgba(168,85,247,0.5)] transition-all duration-300" />
            )}
          </div>
        );
      })}
    </nav>
  );
}
