import React from 'react';
import { InlineMath } from 'react-katex';

function TextWithMath({ text }) {
  return text.split(/\$([^$]+)\$/g).map((part, index) => index % 2
    ? <InlineMath key={index} math={part} />
    : part);
}

export default function EconomicTaskSolution({ task }) {
  return (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Подробный разбор и ход решения:</p>
      {task.steps.map((step, index) => <p key={index}><TextWithMath text={step} /></p>)}
      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span> <InlineMath math={task.solutionAnswer.replace(',', '{,}')} />
      </div>
    </div>
  );
}
