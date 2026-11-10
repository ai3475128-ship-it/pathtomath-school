import React from 'react';
import { InlineMath } from 'react-katex';

const elementary = [
  ['Константа', String.raw`(C)'=0`],
  ['Переменная', String.raw`(x)'=1`],
  ['Степень', String.raw`(x^a)'=ax^{a-1}`],
  ['Корень', String.raw`(\sqrt{x})'=\frac{1}{2\sqrt{x}},\quad x>0`],
  ['Обратная величина', String.raw`\left(\frac1x\right)'=-\frac1{x^2},\quad x\ne0`],
  ['Экспонента', String.raw`(e^x)'=e^x`],
  ['Показательная функция', String.raw`(a^x)'=a^x\ln a,\quad a>0`],
  ['Логарифм', String.raw`(\ln x)'=\frac1x,\quad x>0`],
  ['Логарифм по основанию', String.raw`(\log_a x)'=\frac1{x\ln a},\quad x>0,\ a>0,\ a\ne1`],
  ['Синус', String.raw`(\sin x)'=\cos x`],
  ['Косинус', String.raw`(\cos x)'=-\sin x`],
  ['Тангенс', String.raw`(\tan x)'=\frac1{\cos^2 x},\quad\cos x\ne0`],
  ['Котангенс', String.raw`(\cot x)'=-\frac1{\sin^2 x},\quad\sin x\ne0`],
];

const rules = [
  ['Сумма и разность', String.raw`(u\pm v)'=u'\pm v'`],
  ['Постоянный множитель', String.raw`(Cu)'=Cu'`],
  ['Произведение', String.raw`(uv)'=u'v+uv'`],
  ['Частное', String.raw`\left(\frac uv\right)'=\frac{u'v-uv'}{v^2},\quad v\ne0`],
  ['Сложная функция', String.raw`(f(g(x)))'=f'(g(x))\,g'(x)`],
  ['Степень функции', String.raw`(u^a)'=au^{a-1}u'`],
  ['Экспонента функции', String.raw`(e^u)'=e^u u'`],
  ['Показательная функция', String.raw`(a^u)'=a^u\ln a\,u',\quad a>0`],
  ['Логарифм функции', String.raw`(\ln|u|)'=\frac{u'}u,\quad u\ne0`],
  ['Синус функции', String.raw`(\sin u)'=\cos u\,u'`],
  ['Косинус функции', String.raw`(\cos u)'=-\sin u\,u'`],
  ['Корень функции', String.raw`(\sqrt{u})'=\frac{u'}{2\sqrt{u}},\quad u>0`],
];

function FormulaTable({ title, rows }) {
  return (
    <div className="min-w-0 overflow-x-auto rounded-xl border border-slate-200 dark:border-purple-500/20">
      <table className="w-full text-sm text-left border-collapse">
        <caption className="text-left px-4 py-3 font-bold text-slate-800 dark:text-slate-100 bg-slate-50 dark:bg-purple-950/30">{title}</caption>
        <thead className="sr-only"><tr><th scope="col">Правило</th><th scope="col">Формула</th></tr></thead>
        <tbody className="divide-y divide-slate-100 dark:divide-purple-500/10">
          {rows.map(([label, formula]) => (
            <tr key={label}>
              <th scope="row" className="px-4 py-3 font-semibold text-slate-600 dark:text-slate-300">{label}</th>
              <td className="px-4 py-3 text-slate-800 dark:text-slate-100 whitespace-nowrap"><InlineMath math={formula} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function DerivativeReference() {
  return (
    <details open className="bg-white dark:bg-[#17102b] border border-blue-100/60 dark:border-purple-500/20 rounded-3xl p-6 md:p-8 shadow-sm">
      <summary className="cursor-pointer text-lg md:text-xl font-black text-sky-600 dark:text-purple-300">Таблица производных и правила дифференцирования</summary>
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Здесь <InlineMath math="C" /> и <InlineMath math="a" /> — постоянные, а <InlineMath math="u" /> и <InlineMath math="v" /> — функции от переменной. Формулы применяются там, где выражения определены и дифференцируемы.</p>
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <FormulaTable title="Производные основных функций" rows={elementary} />
        <FormulaTable title="Правила дифференцирования" rows={rules} />
      </div>
    </details>
  );
}
