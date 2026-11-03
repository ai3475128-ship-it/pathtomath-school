'use client';

import React, { useState, useEffect, useRef } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { useRouter, useParams } from 'next/navigation';

// 🚀 ПОДГОТОВИТЕЛЬНЫЕ ЗАДАЧИ ЕГЭ: Чистые явные импорты секций АЗИМУТ
import { egeIntro14Tasks } from '../sections-ege-intro/ege-intro-14';
import { egeIntro17Tasks } from '../sections-ege-intro/ege-intro-17';
import { egeIntro18Tasks } from '../sections-ege-intro/ege-intro-18';
import { egeIntro19Tasks } from '../sections-ege-intro/ege-intro-19';

// 🏆 БАНК ОЛИМПИАДНЫХ ЗАДАЧ (14 разделов): Чистые явные импорты секций АЗИМУТ
import { olympiadMain01Tasks } from '../sections-olympiad-main/olympiad-main-01';
import { olympiadMain02Tasks } from '../sections-olympiad-main/olympiad-main-02';
import { olympiadMain03Tasks } from '../sections-olympiad-main/olympiad-main-03';
import { olympiadMain04Tasks } from '../sections-olympiad-main/olympiad-main-04';
import { olympiadMain05Tasks } from '../sections-olympiad-main/olympiad-main-05';
import { olympiadMain06Tasks } from '../sections-olympiad-main/olympiad-main-06';
import { olympiadMain07Tasks } from '../sections-olympiad-main/olympiad-main-07';
import { olympiadMain08Tasks } from '../sections-olympiad-main/olympiad-main-08';
import { olympiadMain09Tasks } from '../sections-olympiad-main/olympiad-main-09';
import { olympiadMain10Tasks } from '../sections-olympiad-main/olympiad-main-10';
import { olympiadMain11Tasks } from '../sections-olympiad-main/olympiad-main-11';
import { olympiadMain12Tasks } from '../sections-olympiad-main/olympiad-main-12';
import { olympiadMain13Tasks } from '../sections-olympiad-main/olympiad-main-13';
import { olympiadMain14Tasks } from '../sections-olympiad-main/olympiad-main-14';

// 🧠 ПОДГОТОВИТЕЛЬНЫЕ ОЛИМПИАДНЫЕ ЗАДАЧИ (7 разделов): Чистые явные импорты секций АЗИМУТ
import { olympiadIntro01Tasks } from '../sections-olympiad-intro/olympiad-intro-01';
import { olympiadIntro02Tasks } from '../sections-olympiad-intro/olympiad-intro-02';
import { olympiadIntro03Tasks } from '../sections-olympiad-intro/olympiad-intro-03';
import { olympiadIntro04Tasks } from '../sections-olympiad-intro/olympiad-intro-04';
import { olympiadIntro05Tasks } from '../sections-olympiad-intro/olympiad-intro-05';
import { olympiadIntro06Tasks } from '../sections-olympiad-intro/olympiad-intro-06';
import { olympiadIntro07Tasks } from '../sections-olympiad-intro/olympiad-intro-07';

// 📐 СТАНДАРТНЫЙ БАНК ЗАДАЧ ЕГЭ ДАНИЛЫ: Оригинальные 19 импортов
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

const egeIntroMap = {
  '14-intro': egeIntro14Tasks, '17-intro': egeIntro17Tasks, '18-intro': egeIntro18Tasks, '19-intro': egeIntro19Tasks
};

const olympiadMainMap = {
  'olympiad-1-main': olympiadMain01Tasks, 'olympiad-2-main': olympiadMain02Tasks, 'olympiad-3-main': olympiadMain03Tasks,
  'olympiad-4-main': olympiadMain04Tasks, 'olympiad-5-main': olympiadMain05Tasks, 'olympiad-6-main': olympiadMain06Tasks,
  'olympiad-7-main': olympiadMain07Tasks, 'olympiad-8-main': olympiadMain08Tasks, 'olympiad-9-main': olympiadMain09Tasks,
  'olympiad-10-main': olympiadMain10Tasks, 'olympiad-11-main': olympiadMain11Tasks, 'olympiad-12-main': olympiadMain12Tasks,
  'olympiad-13-main': olympiadMain13Tasks, 'olympiad-14-main': olympiadMain14Tasks
};

const olympiadIntroMap = {
  'olympiad-1-intro': olympiadIntro01Tasks, 'olympiad-2-intro': olympiadIntro02Tasks, 'olympiad-3-intro': olympiadIntro03Tasks,
  'olympiad-4-intro': olympiadIntro04Tasks, 'olympiad-5-intro': olympiadIntro05Tasks, 'olympiad-6-intro': olympiadIntro06Tasks,
  'olympiad-7-intro': olympiadIntro07Tasks
};

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
  const params = useParams();
  const taskNumber = params?.taskNumber; // Берем ID страницы из URL для интро и олимпиад
  const router = useRouter();
  const pendingTasks = useRef(new Set());

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
    const controller = new AbortController();
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const resProgress = await fetch(`/api/user-task-progress?module=${encodeURIComponent(taskNumber)}`,{cache:'no-store',signal:controller.signal});
        const dataProgress = await resProgress.json();
        if (dataProgress && dataProgress.solvedSubTasks) {
          setSolvedSubTasks(dataProgress.solvedSubTasks);
        }
      } catch (e) {
        if (e.name !== 'AbortError') console.error('Ошибка загрузки прогресса:',e);
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };
    fetchData();
    return () => controller.abort();
  }, [taskNumber]);

  // 2️⃣ КЛИК «РЕШЕНО»: Математически точно вычисляем ID и отправляем на бэкенд
  const handleToggleClick = async (taskId) => {
    const computedSubTaskId = Number(taskId);
    const pendingKey = `${taskNumber}:${taskId}`;
    if (pendingTasks.current.has(pendingKey)) return;
    pendingTasks.current.add(pendingKey);
    const isRemoving = solvedSubTasks.includes(computedSubTaskId);

    // Оптимистично переключаем состояние кнопки на фронтенде мгновенно
    setSolvedSubTasks((prev) =>
      isRemoving ? prev.filter((id) => id !== computedSubTaskId) : [...prev, computedSubTaskId]
    );

    try {
      const response = await fetch('/api/user-task-progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({module:taskNumber,taskId:computedSubTaskId,solved:!isRemoving}),
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
    } finally { pendingTasks.current.delete(pendingKey); }
  };

  if (isLoading) {
    return (
      <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl border border-blue-100/40 text-center text-sm font-medium text-slate-400 dark:text-purple-400">
        Синхронизация личного кабинета...
      </div>
    );
  }
  // 🚀 ГЛОБАЛЬНЫЙ УМНЫЙ МАРШРУТИЗАТОР КОНТЕНТА АЗИМУТ
  let currentTasks = [];
  let isCustomModule = false;

  if (taskNumber && taskNumber.includes('-intro') && !taskNumber.includes('olympiad')) {
    currentTasks = egeIntroMap[taskNumber] || [];
    isCustomModule = true;
  } else if (taskNumber && taskNumber.includes('olympiad-') && taskNumber.includes('-main')) {
    currentTasks = olympiadMainMap[taskNumber] || [];
    isCustomModule = true;
  } else if (taskNumber && taskNumber.includes('olympiad-') && taskNumber.includes('-intro')) {
    currentTasks = olympiadIntroMap[taskNumber] || [];
    isCustomModule = true;
  } else {
    const taskNumberIntClean = parseInt(taskNumber, 10);
    currentTasks = tasksRawData[taskNumberIntClean] || [];
  }

  if (currentTasks.length === 0) {
    return (
      <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl border border-blue-100/40 text-center text-sm font-medium text-slate-400 dark:text-purple-400">
        Материалы для Задания находятся в процессе загрузки.
      </div>
    );
  }

  return (
    <div className="space-y-6 relative">
      {currentTasks.map((task) => {
        const num = parseInt(taskNumber, 10) || parseInt(taskNumberInt, 10) || 0;
        const computedSubTaskId = Number(task.id);
        const isSubTaskSolved = solvedSubTasks.includes(computedSubTaskId);
        const isSolutionOpen = isOpen[task.id];

        return (
                    /* 🚀 ИСПРАВЛЕНО: Карточка в тёмной теме сделана чуть более плотной для сочного контраста с новым графитовым фоном */
          <div key={task.id} className="bg-white dark:bg-[#17102b] backdrop-blur-md p-6 md:p-8 rounded-3xl border border-blue-100/40 dark:border-purple-500/20 shadow-sm transition-all duration-300">
            
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-purple-950/30 pb-2.5 transition-colors duration-500">
              <h4 className="text-base font-black text-sky-600 dark:text-purple-300 tracking-tight transition-colors duration-500">
                {task.title || `Задача ${task.id}`}
              </h4>
              <button
                type="button"
                onClick={() => handleToggleClick(task.id)}
                className={`px-4 py-1.5 rounded-xl font-extrabold text-[11px] uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isSubTaskSolved
                    ? 'bg-blue-50 text-blue-500 border border-blue-200 hover:bg-blue-100/50 dark:bg-purple-950/20 dark:text-purple-300 dark:border-purple-500/40 dark:shadow-[0_0_15px_rgba(168,85,247,0.15)]'
                    : 'bg-gradient-to-r from-sky-400 to-blue-500 text-white hover:scale-[1.02] hover:brightness-110 dark:from-[#634EE4] dark:to-[#523fd1] dark:shadow-[0_0_15px_rgba(99,78,228,0.4)] dark:hover:shadow-[0_0_25px_rgba(99,78,228,0.65)]'
                }`}
              >
                {isSubTaskSolved ? '✓ Решено' : 'Решить'}
              </button>
            </div>
            <div className="space-y-3 text-sm md:text-base font-normal text-slate-800 dark:text-slate-200 leading-relaxed transition-colors duration-500 mt-4">
              
              {/* 1️⃣ СНАЧАЛА ВЫВОДИМ АВТОМАТИЧЕСКИЕ ПОДПИСИ РАЗДЕЛОВ */}
              {!isCustomModule ? (
                <p className="font-semibold">
                  {num === 13 && 'а) Решите уравнение:'}
                  {num === 14 && 'а) Докажите, что:'}
                  {num === 17 && 'а) Докажите, что:'}
                  {num === 15 && ' Решите неравенство:'}
                </p>
              ) : (
                <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-1">Решите задачу:</p>
              )}

              {/* 2️⃣ ТЕКСТ BEFORE (ЕСЛИ ОН ЕСТЬ У ДАНИЛЫ) */}
              {task.textBefore && (
                <p className="text-base font-normal text-slate-800 dark:text-slate-200">
                  {task.textBefore}
                </p>
              )}

              {/* 3️⃣ ЗАТЕМ ВЫВОДИМ САМИ УСЛОВИЯ (ТЕКСТ И МАТЕМАТИКУ) */}
              <div className="transition-opacity duration-150 space-y-4">
                
                {/* ЗОНА ЧИСТОГО ТЕКСТА */}
                {task.conditionText && (
                  <p className="text-base font-normal text-slate-800 dark:text-slate-100 leading-relaxed">
                    {task.conditionText}
                  </p>
                )}

                {/* ЗОНА МАТЕМАТИКИ */}
                {task.mathA && (
                  <div className="py-2 flex justify-center w-full">
                    {isCustomModule && !task.conditionText && !task.mathA.includes('\\') && !task.mathA.includes('^') ? (
                      <p className="text-base font-normal text-slate-800 dark:text-slate-100 leading-relaxed text-left w-full">
                        {task.mathA}
                      </p>
                    ) : (
                      <BlockMath math={task.mathA} />
                    )}
                  </div>
                )}

                
                {task.textAfter && (
                  <p className="mt-2 text-base font-normal text-slate-800 dark:text-slate-200">
                    {task.textAfter}
                  </p>
                )}


                {/* 🎯 РОДНОЙ ВЫВОД ПУНКТА Б ДЛЯ БОЕВОГО ЕГЭ С ОРИГИНАЛЬНЫМ ТЕКСТОМ ДАНИЛЫ */}
                {!isCustomModule && task.mathB && (
                  <>
                    <p className="mt-4 mb-2">
                      {num === 13 && 'б) Найдите корни этого уравнения, принадлежащие отрезку:'}
                      {num === 14 && 'б) Найдите:'}
                      {num === 17 && 'б) Найдите:'}
                    </p>
                    <div className="transition-opacity duration-150">
                      <BlockMath math={task.mathB} />
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* 🚀 РОДНАЯ КНОПКА СТАРЫХ ЗАДАЧ: Лазурные и фиолетовые цвета Данилы со световым ховером восстановлены пиксель в пиксель! */}
            <div className="pt-4">
              <button
                onClick={() => toggleSolution(task.id)}
                className={`px-5 py-2.5 text-xs font-black uppercase tracking-wider rounded-xl transition-all duration-300 shadow-sm cursor-pointer border ${
                  isSolutionOpen
                    ? 'bg-sky-500 text-white border-transparent shadow-sky-500/20 dark:bg-[#634EE4] dark:shadow-[0_0_15px_rgba(99,78,228,0.4)]'
                    : 'bg-sky-50/40 text-sky-600 border-sky-500/20 hover:bg-sky-500 hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] dark:bg-[#140e24]/60 dark:border-purple-500/30 dark:text-purple-300 dark:hover:bg-[#634EE4] dark:hover:text-white dark:hover:border-transparent dark:hover:shadow-[0_0_20px_rgba(99,78,228,0.5)]'
                }`}
              >
                {isSolutionOpen ? 'Скрыть разбор ▲' : 'Ответ и решение'}
              </button>
            </div>

            {/* 🔮 СПОЙЛЕР С РЕШЕНИЕМ */}
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isSolutionOpen ? 'max-h-none opacity-100 mt-4' : 'max-h-0 opacity-0 pointer-events-none'
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
