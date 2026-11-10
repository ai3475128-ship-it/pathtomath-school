import React from 'react';
import { InlineMath } from 'react-katex';

// Схема знаков на допустимом промежутке; конечные границы отмечены кружками.
export default function DerivativeAxis({ point, right, leftSign = '+', rightSign = '−', leftClosed = false, rightClosed = false, rightInfinite = true }) {
  const leftDirection = leftSign === '+' ? 'возрастает' : 'убывает';
  const rightDirection = rightSign === '+' ? 'возрастает' : 'убывает';
  const extremum = leftSign === '+' ? 'максимум' : 'минимум';
  return (
    <div role="group" className="overflow-x-auto rounded-2xl border border-sky-100 dark:border-purple-500/20 bg-sky-50/40 dark:bg-purple-950/10 p-4" aria-label={`Схема производной: слева ${leftSign}, справа ${rightSign}; функция ${leftDirection}, затем ${rightDirection}; ${extremum}.`}>
      <div className="min-w-[360px] relative text-center text-slate-700 dark:text-slate-200">
        <div className="relative h-8 font-black text-lg" aria-hidden="true">
          <span className="absolute left-[25%] -translate-x-1/2 text-sky-600 dark:text-purple-300">{leftSign}</span>
          <span className="absolute left-[50%] -translate-x-1/2 text-sm pt-1">0</span>
          <span className="absolute left-[75%] -translate-x-1/2 text-sky-600 dark:text-purple-300">{rightSign}</span>
        </div>
        <svg viewBox="0 0 600 30" className="w-full h-7 text-slate-600 dark:text-slate-300" aria-hidden="true">
          <line x1="20" y1="15" x2="580" y2="15" stroke="currentColor" strokeWidth="2" />
          {rightInfinite ? <path d="M 570 9 L 580 15 L 570 21" fill="none" stroke="currentColor" strokeWidth="2" /> : <circle cx="580" cy="15" r="5" fill={rightClosed ? 'currentColor' : 'var(--axis-bg, white)'} stroke="currentColor" strokeWidth="2" />}
          <circle cx="20" cy="15" r="5" fill={leftClosed ? 'currentColor' : 'var(--axis-bg, white)'} stroke="currentColor" strokeWidth="2" />
          <circle cx="300" cy="15" r="5" fill="currentColor" />
        </svg>
        <div className="grid grid-cols-3 items-start text-sm font-semibold">
          <span />
          <span><InlineMath math={point} /></span>
          <span className="text-right">{!rightInfinite && <InlineMath math={right} />}</span>
        </div>
        <div className="grid grid-cols-3 gap-1 mt-3 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <span>{leftSign === '+' ? '↗' : '↘'} {leftDirection}</span>
          <span className="text-sky-700 dark:text-purple-300">{extremum}</span>
          <span>{rightSign === '+' ? '↗' : '↘'} {rightDirection}</span>
        </div>
      </div>
    </div>
  );
}
