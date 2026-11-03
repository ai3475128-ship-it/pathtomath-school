'use client';

import React from 'react';
import Image from 'next/image';

const teachersData = [
  {
    id: 1,
    name: 'Иванов Александр Денисович',
    role: 'СОЗДАТЕЛЬ Азимут преподаватель по математике',
    image: '/teacher-aleksandr1.jpg', 
    // Уникальные стили ховера для левой карточки (более тёмный синий)
    hoverBgClass: 'group-hover:bg-[#007ae1]',
    hoverBorderClass: 'group-hover:border-[#007ae1]',
    achievements: [
      <span key="education">Студент ТОП-ВУЗа России <br /> НИУ ВШЭ <span className="opacity-80 text-[11px] font-normal tracking-normal">(Прикладная Математика)</span></span>,
      '100 Баллов на ЕГЭ по профильной математике',
      'Призер и победитель олимпиад по математике',
      'Подготовка к ЕГЭ/ОГЭ, Высшей математике, Вступительным испытаниям',
      'Разработчик авторских методических материалов'
    ]
  },
  {
    id: 2,
    name: 'Покоёвец Данила Юрьевич',
    role: 'СОЗДАТЕЛЬ Азимут преподаватель по математике',
    image: '/teacher-danila.jpg', 
    // Уникальные стили ховера для правой карточки (более светлый и яркий синий)
    hoverBgClass: 'group-hover:bg-[#007ae1]',
    hoverBorderClass: 'group-hover:border-[#007ae1]',
    achievements: [
      <span key="education">Студент ТОП-ВУЗа России <br /> НИУ ВШЭ <span className="opacity-80 text-[11px] font-normal tracking-normal">(Прикладная Математика)</span></span>,
      'Призер и победитель олимпиад по математике',
      'Организатор интенсивных курсов подготовки',
      'Подготовка к ЕГЭ/ОГЭ, Олимпиадной математике, Вступительным испытаниям',
      'Трёхлетний стаж преподавания математики'
    ]
  }
];

export default function TeachersPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-[#0c0714] pt-[140px] pb-20 transition-colors duration-300 w-full flex flex-col items-center overflow-x-hidden">
      
      {/* 🎨 ЗАДНИЙ ФОН */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/teachers-bg-light.jpg"
          alt="Teachers Background Light"
          fill
          priority
          unoptimized 
          className="object-cover object-center transition-opacity duration-500 opacity-100 dark:opacity-0 contrast-125 brightness-95"
        />
        <Image
          src="/teachers-bg.jpg"
          alt="Teachers Background Dark"
          fill
          priority
          unoptimized 
          className="object-cover object-center transition-opacity duration-500 opacity-0 dark:opacity-100"
        />
      </div>

      {/* 🚀 КОНТЕНТ */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Заголовок страницы */}
        <div className="mb-14 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-sky-600 dark:text-white mb-4 transition-colors duration-300">
            Наши преподаватели
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto font-medium text-sm md:text-base transition-colors duration-300">
            Команда профессионалов, которая приведет тебя к высоким баллам на экзамене без стресса и зубрежки
          </p>
        </div>

        {/* СЕТКА КАРТОЧЕК */}
        <div className="flex flex-col xl:flex-row gap-8 w-full max-w-6xl mx-auto justify-center items-stretch">
          {teachersData.map((teacher) => (
            <div 
              key={teacher.id} 
              className={`group flex flex-col sm:flex-row rounded-[24px] shadow-md transition-all duration-300 cursor-pointer w-full max-w-[620px] xl:w-[620px] shrink-0 backdrop-blur-sm overflow-hidden border
                         bg-white/90 border-slate-200/80 hover:shadow-xl ${teacher.hoverBorderClass}
                         dark:bg-[#140e24]/90 dark:border-[#2e1065]/60 dark:hover:bg-[#634EE4] dark:hover:border-[#634EE4]`}
            >
              
              {/* 📸 ЛЕВАЯ ЧАСТЬ (ФОТО): Картинка больше НЕ темнеет при наведении */}
              <div className="w-full sm:w-[280px] h-[280px] sm:h-auto shrink-0 relative overflow-hidden">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  unoptimized
                  priority
                  className="object-cover object-center block transition-all duration-300 group-hover:scale-[1.01]"
                />
              </div>

              {/* 📝 ПРАВАЯ ЧАСТЬ (ТЕКСТ): Загорается индивидуальным цветом */}
              <div className={`flex flex-col text-left justify-start py-6 flex-grow min-w-0 pr-6 pl-6 transition-all duration-300 rounded-r-[24px]
                              ${teacher.hoverBgClass}`}
              >
                
                {/* Имя преподавателя */}
                <h3 className="text-lg sm:text-xl font-extrabold leading-snug mb-1 transition-colors duration-300
                               text-slate-900 group-hover:text-white
                               dark:text-white"
                >
                  {teacher.name}
                </h3>
                
                {/* Роль / Должность */}
                <h4 className="text-[10px] font-bold mb-4 tracking-wider uppercase transition-colors duration-300
                               text-[#634EE4] group-hover:text-white/90
                               dark:text-[#a78bfa]"
                >
                  {teacher.role}
                </h4>

                {/* Список достижений */}
                <ul className="space-y-3">
                  {teacher.achievements.map((item, index) => (
                    <li 
                      key={index} 
                      className="text-xs font-medium flex items-start gap-2 leading-relaxed text-left transition-colors duration-300
                                 text-slate-700 group-hover:text-white
                                 dark:text-[#f1f5f9]"
                    >
                      <span className="font-bold text-[#634EE4] group-hover:text-white dark:text-[#a78bfa] shrink-0">•</span>
                      <span className="break-words">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
