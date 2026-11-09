import React, { useId } from 'react';
import { InlineMath } from 'react-katex';
import styles from './parameter-diagram.module.css';

const plot = { left: 58, top: 30, width: 810, height: 450 };
const x = value => plot.left + (value + 2) * 90;
const y = value => plot.top + (8 - value) * 22.5;
const right = plot.left + plot.width;
const bottom = plot.top + plot.height;
const originX = x(0);
const originY = y(0);
const levelY = y(-5);
const ink = '#2563eb';

const labels = [
  { math: 'x', left: right + 6, top: originY - 18, width: 34 },
  { math: 't', left: originX - 18, top: 0, width: 36, height: 34 },
  { math: '-1', left: x(-1) - 23, top: originY - 41, width: 46 },
  { math: '1', left: x(1) - 23, top: originY - 41, width: 46 },
  { math: '0', left: originX + 7, top: originY + 7, width: 24 },
  { math: '-5', left: originX - 46, top: levelY + 7, width: 42 },
];

export default function Task12Diagram() {
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '_');
  return (
    <figure className={`${styles.figure} ${styles.task12Figure}`} data-parameter-diagram data-task12-diagram>
      <div className={styles.task12Viewport}>
        <svg className={styles.task12Svg} viewBox="0 0 916 494" role="img" aria-labelledby={`${id}-title`} aria-describedby={`${id}-description`}>
          <title id={`${id}-title`}>График функции при a = 0</title>
          <desc id={`${id}-description`}>Горизонтальная ось x, вертикальная ось t. Между x = −1 и x = 1 функция постоянна и равна −5. За пределами отрезка функция строго возрастает.</desc>
          <defs>
            <pattern id={`${id}-grid`} x={originX} y={originY} width="45" height="45" patternUnits="userSpaceOnUse">
              <path d="M 45 0 H 0 V 45" fill="none" className={styles.grid} />
            </pattern>
            <clipPath id={`${id}-plot`}>
              <rect x={plot.left} y={plot.top} width={plot.width} height={plot.height} rx="6" />
            </clipPath>
          </defs>
          <g clipPath={`url(#${id}-plot)`}>
            <rect x={plot.left} y={plot.top} width={plot.width} height={plot.height} className={styles.paper} />
            <rect x={plot.left} y={plot.top} width={plot.width} height={plot.height} fill={`url(#${id}-grid)`} />
            <path className={styles.task12Guide} d={`M ${plot.left} ${levelY} H ${x(-1)} M ${x(-1)} ${originY} V ${levelY} M ${x(1)} ${originY} V ${levelY}`} />
            <g className={styles.axes} fill="none" strokeWidth="1.7">
              <path d={`M ${plot.left} ${originY} H ${right - 2} M ${right - 12} ${originY - 5} L ${right - 2} ${originY} L ${right - 12} ${originY + 5}`} />
              <path d={`M ${originX} ${bottom} V ${plot.top + 2} M ${originX - 5} ${plot.top + 12} L ${originX} ${plot.top + 2} L ${originX + 5} ${plot.top + 12}`} />
              {[-1, 1].map(value => (
                <path key={value} d={`M ${x(value)} ${originY - 5} v 10`} />
              ))}
            </g>
            <polyline
              points={`${x(-2)},${y(-17)} ${x(-1)},${levelY} ${x(1)},${levelY} ${x(7)},${y(7)}`}
              fill="none"
              stroke={ink}
              strokeWidth="3.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {[-1, 1].map(value => (
              <circle key={value} cx={x(value)} cy={levelY} r="5.5" fill={ink} />
            ))}
          </g>
          <rect x={plot.left} y={plot.top} width={plot.width} height={plot.height} rx="6" className={styles.frame} />
          <path className={styles.tickLeaders} d={`M ${originX - 5} ${levelY + 2} L ${originX - 12} ${levelY + 6}`} />
          {labels.map(({ math, left, top, width, height = 34 }) => (
            <foreignObject key={math} x={left} y={top} width={width} height={height}>
              <div xmlns="http://www.w3.org/1999/xhtml" className={styles.axisLabel}>
                <InlineMath math={math} />
              </div>
            </foreignObject>
          ))}
        </svg>
      </div>
      <figcaption className={styles.caption}>
        <span className={styles.label}>
          <span className={styles.swatch} style={{ '--diagram-ink': ink }} aria-hidden="true" />
          <InlineMath math={`t=f(x)\\quad (a=0)`} />
        </span>
      </figcaption>
    </figure>
  );
}
