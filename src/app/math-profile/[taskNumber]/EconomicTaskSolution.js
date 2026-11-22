import React from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import FinanceSchedule, { TextWithMath } from './FinanceSchedule';

function SolutionStep({ text }) {
  const display = text.match(/^(.+?:)\s*\$([^$]+)\$(?:\s*(тыс\. рублей|рублей|млн рублей))?([.,]?)$/u);
  if (display) return <><p><TextWithMath text={display[1]} /></p><BlockMath math={display[2] + (display[3] ? `\\quad \\text{${display[3]}}` : '') + display[4]} /></>;
  return <p><TextWithMath text={text} /></p>;
}

export default function EconomicTaskSolution({ task }) {
  return (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение:</p>
      {task.financeSchedule && <FinanceSchedule schedule={task.financeSchedule} />}
      {task.steps.map((step, index) => <SolutionStep key={index} text={step} />)}
      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span> <InlineMath math={task.solutionAnswer.replace(',', '{,}')} />
      </div>
    </div>
  );
}
