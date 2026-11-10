'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MenuLinks({ hasUser, userRole }) {
  const pathname = usePathname();

  const isPremiumOrAdminOrTeacher = userRole === 'PREMIUM_STUDENT' || userRole === 'ADMIN' || userRole === 'TEACHER';

  // 🚀 ИСПРАВЛЕНО: Из базового массива убрана вкладка "Видеоуроки" — теперь гости её вообще не увидят
  const navLinks = [
    { href: '/', label: 'Главная' },
    { href: '/teachers', label: 'Преподаватели' },
    { href: '/math-profile', label: 'ЕГЭ' },
    { href: '/olympiads', label: 'Олимпиады' },
  ];

  // 🚀 ИСПРАВЛЕНО: Вкладка "Видеоуроки" подмешивается в меню ТОЛЬКО для зарегистрированных пользователей сайта
  if (hasUser) {
    navLinks.push({ href: '/videos', label: 'Видеоуроки' });
  }

  // Родная логика Данилы для Премиум, Админов и Учителей остаётся в идеале
  if (hasUser && isPremiumOrAdminOrTeacher) {
    navLinks.push(
      { href: '/homeworks', label: 'Домашние задания' },
      { href: '/trials', label: 'Пробники' }
    );
  }

  return (
    <nav className="hidden md:flex items-center gap-3 xl:gap-6 h-full">
      {navLinks.map((link) => {
        // Проверяем активность вкладки
        const isOlympiad = pathname === '/olympiad-calendar' || pathname.startsWith('/olympiads') || pathname.startsWith('/math-profile/olympiads') || pathname.startsWith('/math-profile/olympiad-');
        const isActive = link.href === '/olympiads' ? isOlympiad : link.href === '/math-profile' ? pathname.startsWith('/math-profile') && !isOlympiad : pathname === link.href || pathname.startsWith(link.href + '/');

        return (
          <div key={link.href} className="relative flex flex-col items-center justify-center h-full">
            {/* Родная подсветка разделов Данилы возвращена в исходный вид */}
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
            
            {/* Родная нижняя неоновая полоска под цвет темы сохранена в идеале */}
            {isActive && (
              <span className="absolute bottom-0 w-full h-[2.5px] rounded-full bg-sky-500 shadow-[0_0_10px_rgba(56,189,248,0.7)] dark:bg-purple-500 dark:shadow-[0_0_12px_rgba(168,85,247,0.5)] transition-all duration-300" />
            )}
          </div>
        );
      })}
    </nav>
  );
}
