import React from 'react';
import { InlineMath } from 'react-katex';

export function TextWithMath({ text }) {
  return text.split(/\$([^$]+)\$/g).map((part, index) => index % 2
    ? <InlineMath key={index} math={part} /> : part);
}

const tableStyle = { borderCollapse: 'collapse', border: '1px solid currentColor', margin: '0 auto', width: '100%', minWidth: 650 };
const cellStyle = { border: '1px solid currentColor', padding: '10px 12px', textAlign: 'center', verticalAlign: 'middle' };
const headingStyle = { ...cellStyle, fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 400, lineHeight: 1.25, whiteSpace: 'normal' };

export default function FinanceSchedule({ schedule }) {
  if (!schedule) return null;
  return <div className="space-y-3 financial-schedule">
    <p><TextWithMath text={schedule.intro} /></p>
    <div className="hidden sm:block overflow-x-auto">
      <table className="finance-grid text-sm md:text-base" style={tableStyle}>
        <thead><tr>{schedule.columns.map((column) => <th key={column} scope="col" style={headingStyle}>{column}</th>)}</tr></thead>
        <tbody>{schedule.rows.map((row, i) => <tr key={i}>{row.map((value, j) =>
          <td key={j} style={cellStyle}><InlineMath math={value} /></td>)}</tr>)}</tbody>
      </table>
    </div>
    <div className="space-y-3 sm:hidden">
      {schedule.rows.map((row, i) => <dl className="financial-schedule-row" key={i}>
        {row.map((value, j) => <div key={j}><dt>{schedule.columns[j]}</dt><dd><InlineMath math={value} /></dd></div>)}
      </dl>)}
    </div>
  </div>;
}
