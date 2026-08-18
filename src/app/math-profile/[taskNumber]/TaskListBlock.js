'use client';

import React, { useState, useEffect } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
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
  1: section1Tasks, 2: section2Tasks, 3: section3Tasks, 4: section4Tasks, 5: section5Tasks,
  6: section6Tasks, 7: section7Tasks, 8: section8Tasks, 9: section9Tasks, 10: section10Tasks,
  11: section11Tasks, 12: section12Tasks, 13: section13Tasks, 14: section14Tasks, 15: section15Tasks,
  16: section16Tasks, 17: section17Tasks, 18: section18Tasks, 19: section19Tasks
};

function TaskSolutionCard({ solutionBuilder, isChangingTheme }) {
  return solutionBuilder();
}

export default React.memo(function TaskListBlock({ taskNumberInt }) {
  const [solvedSubTasks, setSolvedSubTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isChangingTheme, setIsChangingTheme] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isOpen, setIsOpen] = useState({});

  const toggleSolution = (id) => {
    setIsOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // 1️⃣ ЗАГРУЗКА: Подтягиваем решенные задачи с нашего нового route.js
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const num = parseInt(taskNumberInt) || 0;
        const resProgress = await fetch(`/api/user-task-progress?taskNumber=${num}`, { cache: 'no-store' });
        const dataProgress = await resProgress.json();
        if (dataProgress && dataProgress.solvedSubTasks) {
          setSolvedSubTasks(dataProgress.solvedSubTasks);
        }
      } catch (e) {
        console.error("Ошибка загрузки прогресса:", e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [taskNumberInt]);

  // 2️⃣ КЛИК «РЕШЕНО»: Математически точно вычисляем ID и отправляем на бэкенд
  const handleToggleClick = async (taskId) => {
    const num = parseInt(taskNumberInt) || 0;
    const computedSubTaskId = num * 100 + parseInt(taskId);

    const isRemoving = solvedSubTasks.includes(computedSubTaskId);

    // Оптимистично переключаем состояние кнопки на фронтенде мгновенно
    setSolvedSubTasks((prev) =>
      isRemoving ? prev.filter((id) => id !== computedSubTaskId) : [...prev, computedSubTaskId]
    );

    try {
      const response = await fetch('/api/user-task-progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subTaskId: computedSubTaskId }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        // Если ошибка — откатываем кнопку назад
        setSolvedSubTasks((prev) =>
          isRemoving ? [...prev, computedSubTaskId] : prev.filter((id) => id !== computedSubTaskId)
        );
        if (response.status === 401) {
          setShowAuthModal(true);
        } else {
          alert('Не удалось сохранить прогресс на сервере.');
        }
      }
    } catch (e) {
      setSolvedSubTasks((prev) =>
        isRemoving ? [...prev, computedSubTaskId] : prev.filter((id) => id !== computedSubTaskId)
      );
      alert('Ошибка соединения с сервером.');
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl border border-blue-100/40 text-center text-sm font-medium text-slate-400 dark:text-purple-400">
        Синхронизация личного кабинета...
      </div>
    );
  }

  const currentTasks = tasksRawData[taskNumberInt] || [];

  if (currentTasks.length === 0) {
    return (
      <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl border border-blue-100/40 text-center text-sm font-medium text-slate-400 dark:text-purple-400">
        Материалы для Задания №{taskNumberInt} находятся в процессе загрузки.
      </div>
    );
  }
  return (
    <div className="space-y-6 relative">
      {currentTasks.map((task) => {
        // Вычисляем сквозной ID подзадачи прямо во время прохода по циклу
        const num = parseInt(taskNumberInt) || 0;
        const computedSubTaskId = num * 100 + parseInt(task.id);
        const isSubTaskSolved = solvedSubTasks.includes(computedSubTaskId);
        const isSolutionOpen = isOpen[task.id];

        return (
          <div key={task.id} className="bg-white/90 dark:bg-[#140e24]/75 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-blue-100/40 dark:border-purple-500/10 shadow-sm">
            
            {/* ШАПКА ЗАДАЧИ */}
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-purple-950/30 pb-2.5 transition-colors duration-500">
              <h4 className="text-base font-black text-sky-600 dark:text-purple-300 tracking-tight transition-colors duration-500">
                {task.title}
              </h4>
              <button
                type="button"
                onClick={() => handleToggleClick(task.id)}
                className={`px-4 py-1.5 rounded-xl font-extrabold text-[11px] uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isSubTaskSolved
                    ? 'bg-blue-50 text-blue-500 border border-blue-200 hover:bg-blue-100/50 dark:bg-purple-950/40 dark:text-purple-400 dark:border-purple-500/30'
                    : 'bg-gradient-to-r from-sky-400 to-blue-500 text-white hover:scale-[1.02] hover:brightness-110'
                }`}
              >
                {isSubTaskSolved ? '✓ Решено' : 'Решить'}
              </button>
            </div>

            {/* ТЕКСТ УСЛОВИЯ */}
            <div className="space-y-3 text-sm md:text-base font-semibold text-slate-800 dark:text-slate-200 leading-relaxed transition-colors duration-500 mt-4">
              {task.textBefore && (
                <p className="text-base font-normal text-slate-800 dark:text-slate-200">
                  {task.textBefore}
                </p>
              )}
              
              <p>
                {num === 13 && 'а) Решите уравнение:'}
                {num === 14 && 'а) Докажите, что:'}
                {num === 17 && 'а) Докажите, что:'}
                {num === 15 && ' Решите неравенство:'}
              </p>

              <div className="transition-opacity duration-150">
                <BlockMath math={task.mathA} />
                {task.textAfter && (
                  <p className="mt-2 text-base font-normal text-slate-800 dark:text-slate-200">
                    {task.textAfter}
                  </p>
                )}
              </div>

              <p className="mt-4 mb-2">
                {num === 13 && 'б) Найдите корни этого уравнения, принадлежащие отркзку:'}
                {num === 14 && 'б) Найдите:'}
                {num === 17 && 'б) Найдите:'}
              </p>

              <div className="transition-opacity duration-150">
                <BlockMath math={task.mathB} />
              </div>
            </div>

            {/* КНОПКА СПОЙЛЕРА */}
            <div className="pt-4">
              <button
                onClick={() => toggleSolution(task.id)}
                className={`px-5 py-2.5 text-xs font-black uppercase tracking-wider rounded-xl transition-all duration-500 shadow-sm cursor-pointer ${
                  isSolutionOpen
                    ? 'bg-sky-500 text-white shadow-sky-500/20'
                    : 'bg-gradient-to-r from-blue-50 to-indigo-50/50 text-slate-600 hover:bg-slate-200 dark:from-purple-950/30 dark:text-purple-300'
                }`}
              >
                {isSolutionOpen ? 'Скрыть разбор ▲' : 'Ответ и решение'}
              </button>
            </div>

            {/* СПОЙЛЕР С РЕШЕНИЕМ */}
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isSolutionOpen ? 'max-h-[3000px] opacity-100 mt-4' : 'max-h-0 opacity-0 pointer-events-none'
            }`}>
              {isSolutionOpen && (
                <TaskSolutionCard
                  solutionBuilder={task.solutionBuilder}
                  isChangingTheme={isChangingTheme}
                />
              )}
            </div>

          </div>
        );
      })}

      {/* МОДАЛЬНОЕ ОКНО АВТОРИЗАЦИИ */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300">
          <div onClick={() => setShowAuthModal(false)} className="absolute inset-0 bg-slate-950/40 backdrop-blur-md" />
          <div className="bg-white/95 dark:bg-[#140e24]/95 p-6 md:p-8 rounded-3xl border border-blue-100/60 dark:border-purple-950/60 max-w-sm w-full relative z-10 text-center">
            <h4 className="text-lg font-black text-slate-800 dark:text-white mb-2">Личный кабинет</h4>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
              Чтобы сохранять прогресс и прокачивать шкалу в профиле, пожалуйста, войдите в аккаунт.
            </p>
            <button onClick={() => setShowAuthModal(false)} className="w-full py-3 bg-gradient-to-r from-sky-400 to-blue-500 text-white font-bold text-xs rounded-xl uppercase tracking-wider shadow-md hover:scale-[1.02] transition-all">
              Понятно
            </button>
          </div>
        </div>
      )}
    </div>
  );
});