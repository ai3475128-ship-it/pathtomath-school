import React from 'react';
import { InlineMath } from 'react-katex';
import { parseEconomicsCondition } from '../../../lib/economics-condition';

function Parts({ parts }) {
  return parts.map((part, i) => part.type === 'math'
    ? <InlineMath key={i} math={part.value} />
    : <React.Fragment key={i}>{part.value}</React.Fragment>);
}

export default function EconomicsCondition({ math }) {
  const blocks = parseEconomicsCondition(math);
  return <div className="min-w-0 space-y-3 text-base leading-relaxed text-slate-800 dark:text-slate-100 [overflow-wrap:anywhere]">
    {blocks.map((block, index) => {
      if (block.type === 'table') return <table key={index} className="w-full table-fixed border-collapse text-[0.625rem] sm:text-sm" aria-label="Таблица условия задачи">
        <tbody>{block.rows.map((row, rowIndex) => <tr key={rowIndex}>
          {row.map((cell, columnIndex) => {
            const Cell = rowIndex === 0 ? 'th' : 'td';
            return <Cell key={columnIndex} scope={rowIndex === 0 ? 'col' : undefined} className="border border-slate-300 px-0.5 py-2 text-center align-middle font-normal dark:border-purple-400/40 sm:px-2"><Parts parts={cell} /></Cell>;
          })}
        </tr>)}</tbody>
      </table>;
      if (block.type === 'bullet') return <p key={index} className="relative pl-5 before:absolute before:left-1 before:content-['•']"><Parts parts={block.parts} /></p>;
      return <p key={index}><Parts parts={block.parts} /></p>;
    })}
  </div>;
}
