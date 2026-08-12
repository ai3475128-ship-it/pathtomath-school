'use client';

import React, { useState, useEffect } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import { useRouter } from 'next/navigation';

import { section1Tasks } from './sectoin1';
import { section2Tasks } from './sectoin2';
import { section3Tasks } from './sectoin3';
import { section4Tasks } from './sectoin4';
import { section5Tasks } from './sectoin5';
import { section6Tasks } from './sectoin6';
import { section7Tasks } from './sectoin7';
import { section8Tasks } from './sectoin8';
import { section9Tasks } from './sectoin9';
import { section10Tasks } from './sectoin10';
import { section11Tasks } from './sectoin11';
import { section12Tasks } from './sectoin12';
import { section13Tasks } from './section13'; 
import { section14Tasks } from './section14'; 
import { section15Tasks } from './section15'; 
import { section16Tasks } from './sectoin16';
import { section17Tasks } from './sectoin17';
import { section18Tasks } from './sectoin18';
import { section19Tasks } from './sectoin19';

const tasksRawData = {
  1: section1Tasks,   2: section2Tasks,   3: section3Tasks,   4: section4Tasks,   5: section5Tasks,
  6: section6Tasks,   7: section7Tasks,   8: section8Tasks,   9: section9Tasks,   10: section10Tasks,
  11: section11Tasks, 12: section12Tasks, 13: section13Tasks, 14: section14Tasks, 15: section15Tasks,
  16: section16Tasks, 17: section17Tasks, 18: section18Tasks, 19: section19Tasks
};


// =========================================================================
// 🚀 ЛОГИКА ГЕНЕРАЦИИ ИНТЕРФЕЙСА (ОНА РАБОТАЕТ АВТОМАТИЧЕСКИ И САМА ВСЁ ОТРЕНДЕРИТ)
// =========================================================================
// 🧱 Изолированный компонент для решения одной задачи
const TaskSolutionCard = React.memo(({ solutionBuilder, isChangingTheme }) => {
  return (
    <div className={`bg-slate-50/60 p-5 md:p-6 rounded-2xl border border-slate-100 mt-2 transition-all duration-500 ease-in-out
                    dark:bg-[#090214]/75 dark:border-purple-500/10 dark:shadow-[0_0_15px_rgba(139,92,246,0.03)]
                    ${isChangingTheme ? 'opacity-0' : 'opacity-100'}`}
    >
      <h5 className="text-xs font-black uppercase tracking-widest text-sky-600 dark:text-purple-400 mb-4">
        Официальный разбор:
      </h5>
      {solutionBuilder()}
    </div>
  );
});
TaskSolutionCard.displayName = 'TaskSolutionCard';

// 🚀 ОСНОВНОЙ КОМПОНЕНТ
function TaskListBlock({ taskNumberInt }) {
  const router = useRouter();

  const [openSolutions, setOpenSolutions] = useState({});
  const [isChangingTheme, setIsChangingTheme] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const [solvedSubTasks, setSolvedSubTasks] = useState([]);
  const [isClientAuth, setIsClientAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Запрашиваем состояние решённых задач из API без серверного кэша
  useEffect(() => {
    async function fetchAuthAndProgress() {
      try {
        const res = await fetch(`/api/user-task-progress?taskNumber=${taskNumberInt}`, {
          cache: 'no-store' 
        });
        const data = await res.json();
        
        if (data) {
          setIsClientAuth(data.isAuth);
          setSolvedSubTasks(data.solvedSubTasks || []);
        }
      } catch (e) {
        console.error("Ошибка проверки сессии через API:", e);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAuthAndProgress();
  }, [taskNumberInt]);

  // Следим за изменением классов темы на корневых тегах для мёртвой фиксации высоты
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class' || mutation.attributeName === 'style') {
          setIsChangingTheme(true);
          const timer = setTimeout(() => setIsChangingTheme(false), 180);
          return () => clearTimeout(timer);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const toggleSolution = (id) => {
    setOpenSolutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // ОБРАБОТЧИК КЛИКА ЧЕРЕЗ ПРЯМОЙ AJAX-ЗАПРОС К API РОУТУ
  const handleToggleClick = async (subTaskId) => {
    if (!isClientAuth) {
      setShowAuthModal(true);
      return;
    }

    const isRemoving = solvedSubTasks.includes(subTaskId);
    const updatedTasks = isRemoving 
      ? solvedSubTasks.filter(id => id !== subTaskId) 
      : [...solvedSubTasks, subTaskId];

    setSolvedSubTasks(updatedTasks);

    try { 
      const response = await fetch('/api/user-task-progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subTaskId })
      });
      
      const result = await response.json();
      
      if (result && result.success) {
        const res = await fetch(`/api/user-task-progress?taskNumber=${taskNumberInt}`, { cache: 'no-store' });
        const data = await res.json();
        if (data && data.solvedSubTasks) {
          setSolvedSubTasks(data.solvedSubTasks);
        }
      }
    } catch (e) {
      setSolvedSubTasks(isRemoving ? [...solvedSubTasks, subTaskId] : solvedSubTasks.filter(id => id !== subTaskId));
      alert('Не удалось сохранить прогресс на сервере.');
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl border border-blue-100/40 text-center text-sm font-medium text-slate-400 dark:bg-purple-950/10 dark:border-purple-500/20 animate-pulse">
        Синхронизация личного кабинета...
      </div>
    );
  }

  const currentTasks = tasksRawData[taskNumberInt] || [];

  if (currentTasks.length === 0) {
    return (
      <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl border border-blue-100/40 text-center text-sm font-medium text-slate-400 dark:bg-purple-950/10 dark:border-purple-500/20">
        Материалы для Задания №{taskNumberInt} находятся в процессе загрузки.
      </div>
    );
  }
  return (
    <div className="space-y-6 relative">
      {currentTasks.map((task) => {
        const isOpened = !!openSolutions[task.id];
        const subTaskId = taskNumberInt * 100 + task.id; 
        const isSubTaskSolved = solvedSubTasks.includes(subTaskId);

        return (
          <div 
            key={task.id}
            className="bg-white/90 dark:bg-[#140e24]/75 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-blue-100/40 dark:border-purple-500/20 shadow-sm flex flex-col space-y-4 transition-all duration-500 ease-in-out"
          >
            {/* ШАПКА ЗАДАЧИ */}
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-purple-950/30 pb-2.5 transition-all duration-500">
              <h4 className="text-base font-black text-sky-600 dark:text-purple-300 tracking-tight transition-colors duration-500">{task.title}</h4>
              <button
                type="button"
                onClick={() => handleToggleClick(subTaskId)}
                className={`px-4 py-1.5 rounded-xl font-extrabold text-[11px] uppercase tracking-wider transition-all duration-500 shadow-sm border cursor-pointer select-none
                          ${isSubTaskSolved 
                            ? 'bg-blue-50 text-blue-500 border-blue-200 hover:bg-blue-100/50 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-500/40' 
                            : 'bg-gradient-to-r from-sky-400 to-blue-500 text-white border-white/20 hover:scale-[1.02] hover:brightness-110 shadow-sky-500/10'
                          }`}
              >
                {isSubTaskSolved ? '✓ Решено' : 'Решено'}
              </button>
            </div>

                        {/* ТЕКСТ УСЛОВИЯ (Абсолютно универсальный под все 19 заданий ЕГЭ) */}
            <div className="space-y-3 text-sm md:text-base font-semibold text-slate-800 dark:text-slate-200 leading-relaxed transition-colors duration-500">
              {/* Задания с развёрнутым ответом и делением на пункты а) и б) (Уравнения №13, Стереометрия №14, Планиметрия №17, Сюжетные задачи №19) */}
              {[13, 14, 17, 19].includes(taskNumberInt) ? (
                <>
                  <p>
                    {taskNumberInt === 13 && 'а) Решите уравнение:'}
                    {taskNumberInt === 14 && 'а) Докажите, что:'}
                    {taskNumberInt === 17 && 'а) Докажите, что:'}
                    {taskNumberInt === 19 && 'а) Могло ли:'}
                  </p>
                  <div className={`transition-opacity duration-150 ${isChangingTheme ? 'opacity-0' : 'opacity-100'}`}>
                    <BlockMath math={task.mathA} />
                  </div>
                  <p>
                    {taskNumberInt === 13 && 'б) Найдите корни этого уравнения, принадлежащие промежутку:'}
                    {taskNumberInt === 14 && 'б) Найдите:'}
                    {taskNumberInt === 17 && 'б) Найдите:'}
                    {taskNumberInt === 19 && 'б) / в) Решите оставшиеся пункты:'}
                  </p>
                  <div className={`transition-opacity duration-150 ${isChangingTheme ? 'opacity-0' : 'opacity-100'}`}>
                    <BlockMath math={task.mathB} />
                  </div>
                </>
              ) : (
                /* Задания с одним сплошным условием (Вся первая часть + Неравенства №15 + Экономика №16 + Параметры №18) */
                <>
                  <p>
                    {taskNumberInt === 15 && 'Решите неравенство:'}
                    {taskNumberInt === 16 && 'Решите экономическую задачу:'}
                    {taskNumberInt === 18 && 'Решите задачу с параметром:'}
                    {taskNumberInt < 13 && 'Найдите значение выражения / Решите задачу:'}
                  </p>
                  <div className={`transition-opacity duration-150 ${isChangingTheme ? 'opacity-0' : 'opacity-100'}`}>
                    <BlockMath math={task.mathA} />
                  </div>
                </>
              )}
            </div>


            {/* КНОПКА СПОЙЛЕРА */}
            <div className="pt-2">
              <button
                onClick={() => toggleSolution(task.id)}
                className={`px-5 py-2.5 text-xs font-black uppercase tracking-wider rounded-xl transition-all duration-500 shadow-sm border cursor-pointer
                          ${isOpened 
                            ? 'bg-sky-500 text-white shadow-sky-500/20' 
                            : 'bg-gradient-to-r from-blue-50 to-indigo-50/50 text-slate-600 hover:bg-slate-200 dark:from-purple-950/20 dark:to-indigo-950/20 dark:text-purple-300 dark:hover:bg-purple-950/40 border border-slate-200/40 dark:border-transparent'}`}
              >
                {isOpened ? 'Скрыть разбор ▲' : 'Ответ и решение'}
              </button>
            </div>

            {/* СПОЙЛЕР С РЕШЕНИЕМ */}
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isOpened ? 'max-h-[3000px] opacity-100 mt-2' : 'max-h-0 opacity-0 pointer-events-none'
            }`}>
              {isOpened && <TaskSolutionCard solutionBuilder={task.solutionBuilder} isChangingTheme={isChangingTheme} />}
            </div>
          </div>
        );
      })}

      {/* 🌌 КИНЕМАТОГРАФИЧНОЕ МОДАЛЬНОЕ ОКНО АВТОРИЗАЦИИ */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300
                      ${showAuthModal ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div onClick={() => setShowAuthModal(false)} className="absolute inset-0 bg-slate-950/40 backdrop-blur-md dark:bg-black/60" />
        <div className={`bg-white/95 dark:bg-[#140e24]/95 p-6 md:p-8 rounded-3xl border border-blue-100/60 dark:border-purple-500/30 max-w-sm w-full text-center shadow-xl shadow-purple-950/10 dark:shadow-purple-500/5 transition-all duration-300 transform
                        ${showAuthModal ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}
        >
          <div className="w-12 h-12 bg-sky-50 dark:bg-purple-950/40 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-sky-100 dark:border-purple-500/20">
            <span className="text-xl">🔒</span>
          </div>
          <h4 className="text-lg font-black text-slate-800 dark:text-white mb-2 tracking-tight">Личный кабинет</h4>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
            Чтобы сохранять прогресс и прокачивать шкалу в профиле, пожалуйста, войдите в аккаунт.
          </p>
          <button onClick={() => setShowAuthModal(false)} className="w-full py-3 bg-gradient-to-r from-sky-400 to-blue-500 dark:from-purple-600 dark:to-indigo-600 text-white text-xs font-black uppercase tracking-wider rounded-xl hover:scale-[1.01] hover:brightness-110 active:scale-95 shadow-md shadow-sky-500/10 dark:shadow-purple-500/10 transition-all duration-200 cursor-pointer">
            Понятно
          </button>
        </div>
      </div>

    </div>
  );
}

export default React.memo(TaskListBlock);
