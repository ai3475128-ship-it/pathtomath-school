import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

export const egeIntro14Tasks = [
    {
      id: 1,
    title: 'Задача 1',
    // 🎯 УСЛОВИЕ: Текст пишется как обычная строка с пробелами, без KaTeX, чтобы буквы не слипались
    mathA: 'Во сколько раз увеличится объём правильной четырёхугольной пирамиды, если сторону её основания увеличить в 3 раза, а высоту оставить прежней?',
    mathB: '',
    
    // 🔓 РАЗБОР ПОД СПОЙЛЕРОМ: Откроется только при нажатии на кнопку "Ответ и решение"
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300 pt-2">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение:</p>
        <p>1. Вспомним классическую формулу для вычисления объёма любой пирамиды:</p>
        <div className="my-3">
          <BlockMath math={'V_1 = \\frac{1}{3} \\cdot S_{osn} \\cdot h'} />
        </div>
        
        <p>2. Так как в основании правильной четырёхугольной пирамиды лежит квадрат со стороной <InlineMath math={'a'} />, площадь основания равна <InlineMath math={'S_{osn} = a^2'} />. Тогда первоначальный объём запишется как:</p>
        <div className="my-3">
          <BlockMath math={'V_1 = \\frac{1}{3} \\cdot a^2 \\cdot h'} />
        </div>

        <p>3. По условию задачи высоту <InlineMath math={'h'} /> оставили прежней, а сторону основания увеличили в 3 раза (то есть новая сторона равна <InlineMath math={'3a'} />). Вычислим новый объём пирамиды <InlineMath math={'V_2'} />:</p>
        <div className="my-3">
          <BlockMath math={'V_2 = \\frac{1}{3} \\cdot (3a)^2 \\cdot h = \\frac{1}{3} \\cdot 9a^2 \\cdot h'} />
        </div>

        <p>4. Найдём отношение нового объёма к первоначальному, чтобы узнать, во сколько раз он увеличился:</p>
        <div className="my-3">
          <BlockMath math={'\\frac{V_2}{V_1} = \\frac{\\frac{1}{3} \\cdot 9a^2 \\cdot h}{\\frac{1}{3} \\cdot a^2 \\cdot h} = 9'} />
        </div>

        {/* Фирменный зелёный блок ответа АЗИМУТа */}
        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-100 dark:border-purple-950/20">
          <span>Ответ:</span>
          <InlineMath math={'9'} />
        </div>
      </div>
    )
  }
];