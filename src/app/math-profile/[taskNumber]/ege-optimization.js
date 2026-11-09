import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

export const egeOptimizationTasks = [
  {
    id: 1,
    title: 'Задача 1',
    textBefore: (
      <>
        К блоку солнечных панелей с электродвижущей силой <InlineMath math={'\\varepsilon = 60'} /> В и внутренним сопротивлением <InlineMath math={'r = 0{,}8'} /> Ом подключена зарядная станция. Сила тока в цепи при этом подключении определяется законом Ома:
      </>
    ),
    mathA: 'I = \\frac{\\varepsilon}{r + R}',
    textAfter: (
      <>
        где <InlineMath math="R" /> — сопротивление зарядной станции (в омах). Тепловая мощность в ваттах, выделяемая на зарядной станции, по закону Джоуля–Ленца равна <InlineMath math="P = I^2 R" />. При каком сопротивлении <InlineMath math="R" /> зарядной станции выделяемая на ней тепловая мощность <InlineMath math="P" /> будет наибольшей?
      </>
    ),
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Подробный разбор и ход решения:</p>
        <p>
          Подставим выражение для силы тока в формулу мощности. Сопротивление зарядной станции неотрицательно: <InlineMath math={'R \\geqslant 0'} />.
        </p>
        <div className="overflow-x-auto"><BlockMath math={'P(R) = I^2R = \\frac{\\varepsilon^2 R}{(r + R)^2} = \\frac{3600R}{(0{,}8 + R)^2}'} /></div>
        <p>Найдём производную мощности по сопротивлению:</p>
        <div className="overflow-x-auto"><BlockMath math={"P'(R) = \\frac{3600(0{,}8 - R)}{(0{,}8 + R)^3}"} /></div>
        <p>
          Знаменатель положителен при <InlineMath math={'R \\geqslant 0'} />. Поэтому производная положительна при <InlineMath math={'0 \\leqslant R < 0{,}8'} />, равна нулю при <InlineMath math={'R = 0{,}8'} /> и отрицательна при <InlineMath math={'R > 0{,}8'} />. Значит, мощность сначала возрастает, а затем убывает и достигает наибольшего значения при <InlineMath math={'R = 0{,}8'} /> Ом.
        </p>
        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={'0{,}8 \\text{ Ом}'} />
        </div>
      </div>
    ),
  },
];
