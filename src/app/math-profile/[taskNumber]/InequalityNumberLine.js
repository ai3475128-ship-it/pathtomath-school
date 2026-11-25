import React, { useId } from 'react';
import { InlineMath } from 'react-katex';
import styles from './inequality-diagram.module.css';

/** A math label whose coordinates follow the baseline of an SVG text element. */
export function SvgMathLabel({ x, y, math, anchor = 'middle', className = '' }) {
  const width = 120;
  const offset = anchor === 'middle' ? width / 2 : anchor === 'end' ? width : 0;
  return <foreignObject x={x - offset} y={y - 14} width={width} height="52" className={`${styles.labelObject} ${className}`}>
    <div xmlns="http://www.w3.org/1999/xhtml" className={styles.label} style={{ justifyContent: anchor === 'middle' ? 'center' : anchor === 'end' ? 'flex-end' : 'flex-start' }}>
      <InlineMath math={math} />
    </div>
  </foreignObject>;
}

/** Point positions are evenly spaced to keep symbolic labels legible. */
export function InequalityNumberLine({ points, selected, variable = 'x' }) {
  const patternId = `inequality-hatch-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const axisY = 80;
  const topY = 48;
  const pointXs = points.map((_, i) => points.length === 1 ? 280 : 80 + i * (400 / (points.length - 1)));
  const positions = [30, ...pointXs, 510];
  const height = 154;
  return <div className="my-6 flex justify-center w-full">
    <svg width="560" height={height} viewBox={`0 0 560 ${height}`} className={styles.diagram} role="img" aria-label="Числовая прямая: отмечены границы и заштрихованы промежутки решения">
      <defs><pattern id={patternId} width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(20)"><line x1="0" x2="0" y1="0" y2="10" stroke="#328ce6" strokeWidth="1.7" opacity=".58" /></pattern></defs>
      {selected.map(([start, end], i) => {
        const a = positions[start], b = positions[end];
        const radius = Math.min(10, (b - a) / 3);
        const roof = `${start === 0 ? `M${a} ${topY}` : `M${a} ${axisY - 4} V${topY + radius} Q${a} ${topY} ${a + radius} ${topY}`}` +
          `${end === positions.length - 1 ? ` H${b}` : ` H${b - radius} Q${b} ${topY} ${b} ${topY + radius} V${axisY - 4}`}`;
        return <g key={i}>
          <path d={`${roof} L${b} ${axisY - 2} H${a} Z`} fill={`url(#${patternId})`} />
          <path d={roof} className={styles.roof} />
        </g>;
      })}
      {!points.length && !selected.length && <SvgMathLabel x={280} y={53} math={'\\varnothing'} className={styles.numberLabel} />}
      <path d={`M20 ${axisY} H525 M517 ${axisY - 5} L525 ${axisY} L517 ${axisY + 5}`} className={styles.axis} />
      {points.map((point, i) => <g key={i}>
        <circle cx={pointXs[i]} cy={axisY} r="5.5" className={point.closed ? styles.closed : styles.open} />
        <SvgMathLabel x={pointXs[i]} y={109} math={point.label} className={styles.numberLabel} />
      </g>)}
      <SvgMathLabel x={534} y={84} math={variable} anchor="start" className={styles.numberLabel} />
    </svg>
  </div>;
}
