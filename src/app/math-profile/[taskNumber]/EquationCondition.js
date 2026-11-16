import React from 'react';
import { BlockMath } from 'react-katex';

export default function EquationCondition({ text }) {
  const parts = text.split(/\$([^$]+)\$/g);
  if (parts.length !== 3) return <p>{text}</p>;

  const instruction = parts[2].replace(/^\.\s*/, '').trim();
  return (
    <div className="space-y-3 text-base font-normal leading-relaxed text-slate-800 dark:text-slate-100">
      <p>Решите уравнение</p>
      <div className="text-center text-sm sm:text-base">
        <BlockMath math={parts[1]} />
      </div>
      {instruction && <p>{instruction}</p>}
    </div>
  );
}
