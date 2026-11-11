'use client';
import { useState } from 'react';

export default function OlympiadTrialFields({ existing, trialId }) {
  const [rows, setRows] = useState(() => {
    const entries = Object.entries(existing || {}).map(([number, solved], i) => ({ id:i, number, solved:String(solved) }));
    return entries.length ? entries : [{id:0,number:'',solved:''}];
  });
  function change(id, field, value) { setRows((items) => items.map((item) => item.id === id ? {...item,[field]:value} : item)); }
  function add() { setRows((items) => [...items, {id: Math.max(-1, ...items.map((item)=>item.id))+1, number:'', solved:''}]); }
  return <div className="mt-3 space-y-2"><p className="text-xs text-slate-500">Добавьте номера от 1 до 100. Номера разных олимпиад не сравниваются между собой.</p>{rows.map((row)=><div key={row.id} className="flex flex-wrap items-center gap-2"><label className="sr-only" htmlFor={`olympiad-number-${trialId}-${row.id}`}>Номер задания</label><input id={`olympiad-number-${trialId}-${row.id}`} type="number" name="olympiadTaskNumber" min="1" max="100" placeholder="№" value={row.number} onChange={(e)=>change(row.id,'number',e.target.value)} className="w-20 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 dark:border-purple-500/20 dark:bg-[#0c0714] dark:text-white"/><label className="sr-only" htmlFor={`olympiad-result-${trialId}-${row.id}`}>Результат задания</label><select id={`olympiad-result-${trialId}-${row.id}`} name="olympiadTaskSolved" value={row.solved} onChange={(e)=>change(row.id,'solved',e.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 dark:border-purple-500/20 dark:bg-[#0c0714] dark:text-white"><option value="">Результат</option><option value="1">Решено</option><option value="0">Не решено</option></select><button type="button" aria-label="Удалить задание" onClick={()=>setRows((items)=>items.filter((item)=>item.id!==row.id))} className="px-2 text-sm font-semibold text-slate-500 hover:text-red-600">Удалить</button></div>)}<button type="button" onClick={add} className="text-sm font-bold text-sky-700 hover:underline dark:text-purple-300">+ Добавить номер</button></div>;
}
