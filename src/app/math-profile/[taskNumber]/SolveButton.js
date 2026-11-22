import React from 'react';

export default function SolveButton({ isSolved, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isSolved}
      aria-label={isSolved ? 'Отменить отметку о решении' : 'Отметить задачу как решённую'}
      className={`group relative inline-grid h-9 w-28 shrink-0 place-items-center overflow-hidden rounded-xl border text-[11px] font-extrabold uppercase tracking-wider cursor-pointer transition-[border-color,box-shadow] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 motion-reduce:transition-none ${isSolved ? 'border-blue-200 dark:border-purple-500/40' : 'border-transparent dark:shadow-[0_0_15px_rgba(168,85,247,0.15)]'}`}
    >
      <span aria-hidden="true" className={`absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 transition-opacity duration-300 motion-reduce:transition-none dark:from-[#634EE4] dark:to-[#523fd1] ${isSolved ? 'opacity-0' : 'opacity-100'}`} />
      <span aria-hidden="true" className={`absolute inset-0 bg-blue-50 transition-opacity duration-300 motion-reduce:transition-none dark:bg-purple-950/40 ${isSolved ? 'opacity-100' : 'opacity-0'}`} />
      <span aria-hidden="true" className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10 motion-reduce:transition-none" />
      <span aria-hidden="true" className={`relative col-start-1 row-start-1 text-white transition-opacity duration-300 motion-reduce:transition-none ${isSolved ? 'opacity-0' : 'opacity-100'}`}>Решить</span>
      <span aria-hidden="true" className={`relative col-start-1 row-start-1 text-blue-500 transition-opacity duration-300 motion-reduce:transition-none dark:text-purple-300 ${isSolved ? 'opacity-100' : 'opacity-0'}`}>✓ Решено</span>
    </button>
  );
}
