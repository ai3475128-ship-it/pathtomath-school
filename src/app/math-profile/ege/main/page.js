import { EGE_SECTIONS } from '@/lib/ege-sections';
import Link from 'next/link';
import Image from 'next/image';

export default function MathProfilePage() {


  return (
    <div className="relative min-h-screen p-8 transition-colors duration-500 text-slate-600 dark:text-slate-400 overflow-x-hidden flex flex-col items-center">
      
      {/* 🌌 АДАПТИВНЫЙ ИЗУМИРОВАННЫЙ ЗАДНИЙ ФОН ПЛАТФОРМЫ */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        
        {/* Рендерится только в светлой теме */}
        <div className="absolute inset-0 block dark:hidden">
          <Image 
            src="/bank-bg-light.jpg" 
            alt="Фон банка заданий (Светлая тема)" 
            fill 
            priority 
            unoptimized 
            className="object-cover object-center brightness-95" 
          />
        </div>
        
        {/* Рендерится только в тёмной теме */}
        <div className="absolute inset-0 hidden dark:block">
          <Image 
            src="/bank-bg-dark.jpg" 
            alt="Фон банка заданий (Тёмная тема)" 
            fill 
            priority 
            unoptimized 
            className="object-cover object-center" 
          />
        </div>
        
      </div>

      {/* 📋 ОСНОВНОЙ КОНТЕНТ (Вынесен на z-10 поверх картинок) */}
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        
        <div className="mb-12 text-center sm:text-left">
          <span className="text-xs font-black bg-blue-50 text-sky-600 border border-blue-100 px-3.5 py-1.5 rounded-full uppercase tracking-widest dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-500/30">
            База знаний Азимут
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mt-4 mb-4 text-sky-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-purple-400 dark:to-pink-400">
            Банк Заданий ЕГЭ
          </h1>
          <p className="text-slate-400 dark:text-slate-300 max-w-2xl leading-relaxed text-sm sm:text-base font-semibold">
            Курс содержит полную теоретическую и практическую базу.
          </p>
        </div>

        {/* Часть 1 */}
        <div className="mb-14">
          <div className="border-b border-blue-100/60 pb-3 mb-6 dark:border-purple-950/40">
            <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight">Часть 1</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {EGE_SECTIONS.slice(0, 13).map(({ number: taskNum, title }) => {
              return (
                <Link 
                  key={taskNum} 
                  href={`/math-profile/${taskNum}`} 
                  className="group bg-white/80 backdrop-blur-md border border-blue-100/60 p-6 rounded-[24px] shadow-sm hover:shadow-xl hover:border-[#328ce6] hover:bg-[#328ce6] transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[150px] 
                             dark:bg-purple-950/10 dark:border-purple-500/20 dark:hover:bg-[#634EE4] dark:hover:border-[#634EE4] dark:hover:shadow-[0_0_20px_rgba(99,78,228,0.25)]"
                >
                  <div className="flex flex-col items-start w-full">
                    {/* Крупное акцентное число задания */}
                    <span className="text-3xl font-black tracking-tight mb-3 transition-colors duration-300
                                   text-sky-500/80 group-hover:text-white/60
                                   dark:text-purple-400/80 dark:group-hover:text-white/50"
                    >
                      {String(taskNum).padStart(2, '0')}
                    </span>
                    
                    {/* Крупное и четкое название темы */}
                    <h3 className="text-lg font-black tracking-tight leading-snug transition-colors duration-300
                                   text-slate-800 group-hover:text-white
                                   dark:text-white dark:group-hover:text-white"
                    >
                      {title}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Часть 2 */}
        <div>
          <div className="border-b border-blue-100/60 pb-3 mb-6 dark:border-purple-950/40">
            <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight">Часть 2</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {EGE_SECTIONS.slice(13).map(({ number: taskNum, title }) => {
              return (
                <Link 
                  key={taskNum} 
                  href={`/math-profile/${taskNum}`} 
                  className="group bg-white/80 backdrop-blur-md border border-blue-100/60 p-6 rounded-[24px] shadow-sm hover:shadow-xl hover:border-[#328ce6] hover:bg-[#328ce6] transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[150px] 
                             dark:bg-purple-950/10 dark:border-purple-500/20 dark:hover:bg-[#634EE4] dark:hover:border-[#634EE4] dark:hover:shadow-[0_0_20px_rgba(99,78,228,0.25)]"
                >
                  <div className="flex flex-col items-start w-full">
                    {/* Крупное акцентное число задания */}
                    <span className="text-3xl font-black tracking-tight mb-3 transition-colors duration-300
                                   text-sky-500/80 group-hover:text-white/60
                                   dark:text-purple-400/80 dark:group-hover:text-white/50"
                    >
                      {String(taskNum).padStart(2, '0')}
                    </span>
                    
                    {/* Крупное и четкое название темы */}
                    <h3 className="text-lg font-black tracking-tight leading-snug transition-colors duration-300
                                   text-slate-800 group-hover:text-white
                                   dark:text-white dark:group-hover:text-white"
                    >
                      {title}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}