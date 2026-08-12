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

// Изолированный компонент для решения одной задачи (чтобы не дублировать код)
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
    setIsOpen(prev => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const resProgress = await fetch(`/api/user-task-progress?taskNumber=${taskNumberInt}`, { cache: 'no-store' });
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

  const handleToggleClick = async (subTaskId) => {
    const isRemoving = solvedSubTasks.includes(subTaskId);
    setSolvedSubTasks(prev => 
      isRemoving ? prev.filter(id => id !== subTaskId) : [...prev, subTaskId]
    );

    try {
      const response = await fetch('/api/user-task-progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subTaskId }),
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
      setSolvedSubTasks(prev => 
        isRemoving ? [...prev, subTaskId] : prev.filter(id => id !== subTaskId)
      );
      alert('Не удалось сохранить прогресс на сервере.');
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl border border-blue-100/40 text-center text-sm font-medium text-slate-600 dark:text-slate-400">
        Синхронизация личного кабинета...
      </div>
    );
  }

  const currentTasks = tasksRawData[taskNumberInt] || [];

  if (currentTasks.length === 0) {
    return (
      <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl border border-blue-100/40 text-center text-sm font-medium text-slate-400 dark:text-slate-500">
        Материалы для Задания №{taskNumberInt} находятся в процессе загрузки.
      </div>
    );
  }

  return (
    <div className="space-y-6 relative">
      {currentTasks.map((task) => {
        const isSubTaskSolved = solvedSubTasks.includes(task.id);
        const isSolutionOpen = isOpen[task.id];

        return (
          <div
            key={task.id}
            className="bg-white/90 dark:bg-[#140e24]/75 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-blue-100/40 dark:border-purple-900/40 shadow-sm"
          >
            {/* ШАПКА ЗАДАЧИ */}
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-purple-950/30 pb-2.5 transition-colors duration-500">
              <h4 className="text-base font-black text-sky-600 dark:text-purple-300 tracking-tight transition-colors duration-500">
                {task.title}
              </h4>
              <button
                type="button"
                onClick={() => handleToggleClick(task.id)}
                className={`px-4 py-1.5 rounded-xl font-extrabold text-[11px] uppercase tracking-wider transition-all duration-500 ${
                  isSubTaskSolved
                    ? 'bg-blue-50 text-blue-500 border border-blue-200 hover:bg-blue-100/50 dark:bg-purple-950/40 dark:text-purple-400 dark:border-purple-900/50'
                    : 'bg-gradient-to-r from-sky-400 to-blue-500 text-white border-white/20 hover:scale-[1.02] hover:brightness-110'
                }`}
              >
                {isSubTaskSolved ? 'Решено ✓' : 'Решено'}
              </button>
            </div>

            {/* ТЕКСТ УСЛОВИЯ */}
            <div className="space-y-3 text-sm md:text-base font-semibold text-slate-800 dark:text-slate-200 leading-relaxed transition-colors duration-500 pt-4">
              {[13, 14, 17, 19].includes(taskNumberInt) ? (
                <div>
                  <p className="mb-2">
                    {taskNumberInt === 13 && 'а) Решите уравнение:'}
                    {taskNumberInt === 14 && 'а) Докажите, что:'}
                    {taskNumberInt === 17 && 'а) Докажите, что:'}
                    {taskNumberInt === 19 && 'а) Могло ли:'}
                  </p>
                  <div className={`transition-opacity duration-150 ${isChangingTheme ? 'opacity-0' : 'opacity-100'}`}>
                    <BlockMath math={task.mathA} />
                  </div>
                  <p className="mt-4 mb-2">
                    {taskNumberInt === 13 && 'б) Найдите корни этого уравнения, принадлежащие промежутку:'}
                    {taskNumberInt === 14 && 'б) Найдите:'}
                    {taskNumberInt === 17 && 'б) Найдите:'}
                    {taskNumberInt === 19 && 'б) / в) Решите оставшиеся пункты:'}
                  </p>
                  <div className={`transition-opacity duration-150 ${isChangingTheme ? 'opacity-0' : 'opacity-100'}`}>
                    <BlockMath math={task.mathB} />
                  </div>
                </div>
              ) : (
                /* Задания с одним сплошным условием (Вся первая часть + Неравенства №15 + Экономика №16 + Параметры №18) */
                <div className="text-left space-y-2">
                  {task.textBefore ? (
                    <p className="text-base font-normal text-slate-800 dark:text-slate-200">
                      {task.textBefore}
                    </p>
                  ) : (
                    <p>
                      {taskNumberInt === 15 && 'Решите неравенство:'}
                      {taskNumberInt === 16 && 'Решите economic task:'}
                      {taskNumberInt === 18 && 'Решите задачу с параметром:'}
                      {taskNumberInt < 13 && 'Найдите значение выражения / Решите задачу:'}
                    </p>
                  )}

                  <div className={`transition-opacity duration-150 my-3 flex justify-center w-full ${isChangingTheme ? 'opacity-0' : 'opacity-100'}`}>
                    <BlockMath math={task.mathA} />
                  </div>

                  {task.textAfter && (
                    <p className="text-base font-normal text-slate-800 dark:text-slate-200">
                      {task.textAfter}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* КНОПКА СПОЙЛЕРА */}
            <div className="pt-2">
              <button
                onClick={() => toggleSolution(task.id)}
                className={`px-5 py-2.5 text-xs font-black uppercase tracking-wider rounded-xl transition-all duration-500 shadow-sm ${
                  isSolutionOpen
                    ? 'bg-sky-500 text-white shadow-sky-500/20'
                    : 'bg-gradient-to-r from-blue-50 to-indigo-50/50 text-slate-600 hover:bg-slate-200 dark:from-purple-950/30 dark:to-purple-900/20 dark:text-purple-300 dark:hover:bg-purple-900/40'
                }`}
              >
                {isSolutionOpen ? 'Скрыть разбор ▲ : Ответ и решение' : 'Ответ и решение'}
              </button>
            </div>

            {/* СПОЙЛЕР С РЕШЕНИЕМ */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isSolutionOpen ? 'max-h-[3000px] opacity-100 mt-2' : 'max-h-0 opacity-0 pointer-events-none'
              }`}
            >
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
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${showAuthModal ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div onClick={() => setShowAuthModal(false)} className="absolute inset-0 bg-slate-950/40 backdrop-blur-md dark:bg-black/50" />
        <div className={`bg-white/95 dark:bg-[#140e24]/95 p-6 md:p-8 rounded-3xl border border-blue-100/60 dark:border-purple-900/50 shadow-2xl max-w-md w-full transition-all duration-300 transform ${showAuthModal ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}>
          <div className="w-12 h-12 bg-sky-50 dark:bg-purple-950/40 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-sky-100 dark:border-purple-900/30">
            <span className="text-xl">🔐</span>
          </div>
          <h4 className="text-lg font-black text-slate-800 dark:text-white mb-2 tracking-tight text-center">Личный кабинет</h4>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed text-center mb-6">
            Чтобы сохранять прогресс и прокачивать шкалу в профиле, пожалуйста, войдите в аккаунт.
          </p>
          <button onClick={() => setShowAuthModal(false)} className="w-full py-3 bg-gradient-to-r from-sky-400 to-blue-500 text-white font-extrabold rounded-xl shadow-lg shadow-sky-400/20 hover:scale-[1.01] hover:brightness-110 transition-all duration-300">
            Понятно
          </button>
        </div>
      </div>
    </div>
  );
});
