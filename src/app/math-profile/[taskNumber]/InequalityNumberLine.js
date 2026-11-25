import React, { useId } from 'react';
import { InlineMath } from 'react-katex';
import styles from './inequality-diagram.module.css';

/** A math label whose coordinates follow the baseline of an SVG text element. */
export function SvgMathLabel({ x, y, math, anchor = 'middle' }) {
  const width = 76;
  const offset = anchor === 'middle' ? width / 2 : anchor === 'end' ? width : 0;
  return <foreignObject x={x - offset} y={y - 14} width={width} height="38" className={styles.labelObject}>
    <div xmlns="http://www.w3.org/1999/xhtml" className={styles.label} style={{ justifyContent: anchor === 'middle' ? 'center' : anchor === 'end' ? 'flex-end' : 'flex-start' }}>
      <InlineMath math={math} />
    </div>
  </foreignObject>;
}

/** Point positions are evenly spaced to keep symbolic labels legible. */
export function InequalityNumberLine({ points, selected, variable = 'x' }) {
  const patternId = `inequality-hatch-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const axisY = 68;
  const pointXs = points.map((_, i) => points.length === 1 ? 200 : 70 + i * (260 / (points.length - 1)));
  const positions = [20, ...pointXs, 380];
  return <div className="my-6 flex justify-center w-full">
    <svg width="400" height="115" viewBox="0 0 400 115" className={styles.diagram} role="img" aria-label="Числовая прямая: отмечены границы и заштрихованы промежутки решения">
      <defs><pattern id={patternId} width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" x2="0" y1="0" y2="8" stroke="#328ce6" strokeWidth="1.5" opacity=".65" /></pattern></defs>
      {selected.map(([start, end], i) => {
        const a = positions[start], b = positions[end];
        return <g key={i}>
          <rect x={a} y="47" width={b - a} height="20" fill={`url(#${patternId})`} />
          <path d={`M${a} 47 H${b}`} className={styles.roof} />
        </g>;
      })}
      <path d={`M15 ${axisY} H385 M378 ${axisY - 4} L385 ${axisY} L378 ${axisY + 4}`} className={styles.axis} />
      {points.map((point, i) => <g key={i}>
        <circle cx={pointXs[i]} cy={axisY} r="4.5" className={point.closed ? styles.closed : styles.open} />
        <SvgMathLabel x={pointXs[i]} y={91} math={point.label} />
      </g>)}
      <SvgMathLabel x={387} y={72} math={variable} anchor="start" />
    </svg>
  </div>;
}
