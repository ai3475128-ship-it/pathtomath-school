import React from 'react';
import { EGE_INTRO_SECTIONS } from '@/lib/ege-sections';
import Image from 'next/image';
import Link from 'next/link';
import EgeCardPreview from '../components/EgeCardPreview';
import styles from '../components/EgeCardPreview.module.css';

export const dynamic = 'force-dynamic';

export default function EgeIntroTasksPage() {


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

      {/* 🚀 ОСНОВНОЙ КОНТЕНТ (Расширен до max-w-6xl для максимальной ширины колонок) */}
      <div className="w-full max-w-6xl mx-auto relative z-10 space-y-10 flex flex-col">
        
        {/* Хлебные крошки */}
        <div className="flex gap-2 text-sm text-slate-400/80 mb-2 font-medium dark:text-slate-400/60 select-none">
          <Link href="/" className="hover:text-sky-400 transition">Главная</Link>
          <span>/</span>
          <Link href="/math-profile" className="hover:text-sky-400 transition">ЕГЭ</Link>
          <span>/</span>
          <Link href="/math-profile/ege" className="hover:text-sky-400 transition">Математика</Link>
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

        {/* 📐 СЕТКА: Высокие широкие прямоугольники с ОГРОМНЫМИ цифрами строго по центру */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {EGE_INTRO_SECTIONS.map((sec) => (
            <Link
              key={sec.number}
              href={`/math-profile/${sec.number}-intro`}
              scroll={false}
              className={`group bg-white/80 backdrop-blur-md border border-blue-100/60 p-8 rounded-[28px] shadow-sm
                         hover:shadow-2xl hover:bg-sky-500 hover:border-sky-500
                         dark:bg-purple-950/10 dark:border-purple-500/20 dark:hover:bg-[#634EE4] dark:hover:border-[#634EE4]
                         transition-all duration-300 ease-in-out cursor-pointer min-h-[380px] flex flex-col justify-between ${styles.card}`}
            >
              {/* Контейнер-заглушка сверху для сохранения структуры flex justify-between */}
              <div className="w-full h-1" />

              {/* 🎯 ЦЕНТРАЛЬНЫЙ БЛОК: Огромные акцентные цифры строго посередине высоты прямоугольника */}
              <div className={`w-full flex items-center justify-center ${styles.label}`}>
                <span className="text-7xl sm:text-8xl font-black tracking-tighter select-none transition-colors duration-300 
                                 text-sky-500/80 group-hover:text-white/90 
                                 dark:text-purple-400/80 dark:group-hover:text-white/90"
                >
                  {sec.number}
                </span>
              </div>

              {/* Нижняя часть: Крупное название темы у нижнего края */}
              <div className={`w-full flex justify-center text-center pb-2 ${styles.label}`}>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-snug transition-colors duration-300 text-slate-800 group-hover:text-white dark:text-white">
                  {sec.title}
                </h3>
              </div>
              <EgeCardPreview number={sec.number} intro />
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
