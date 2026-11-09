import React, { useId } from 'react';
import { InlineMath } from 'react-katex';
import diagram from './parameter-diagram.module.css';
import styles from './trig-circle.module.css';

const center = [122, 121];
const radius = 86;

function angleMath(value, denominator) {
  if (value === 0) return '0';
  const sign = value < 0 ? '-' : '';
  const magnitude = Math.abs(value);
  let a = magnitude;
  let b = denominator;
  while (b !== 0) [a, b] = [b, a % b];
  const numerator = magnitude / a;
  const divisor = denominator / a;
  const pi = (numerator === 1 ? '' : numerator) + '\\pi';
  return sign + (divisor === 1 ? pi : `\\frac{${pi}}{${divisor}}`);
}

function pointAt(value, denominator) {
  const radians = (value % (2 * denominator)) * Math.PI / denominator;
  return [
    center[0] + radius * Math.cos(radians),
    center[1] - radius * Math.sin(radians),
  ];
}

function CircleTurn({ start, end, openStart, openEnd, denominator, roots, allAngles }) {
  const titleId = useId();
  const period = 2 * denominator;
  const fullTurn = end - start === period;
  const [startX, startY] = pointAt(start, denominator);
  const [endX, endY] = pointAt(end, denominator);
  const points = new Map();
  const positionOf = angle => (angle % period + period) % period;
  for (const root of roots) {
    const position = positionOf(root);
    if (!points.has(position)) points.set(position, []);
    points.get(position).push(root);
  }

  const arc = `M ${startX} ${startY} A ${radius} ${radius} 0 ${end - start > denominator ? 1 : 0} 0 ${endX} ${endY}`;
  const interval = `${openStart ? '(' : '['}${angleMath(start, denominator)};\\, ${angleMath(end, denominator)}${openEnd ? ')' : ']'}`;
  const markerAngles = [...points.values()];
  const positions = [...points.keys()].sort((a, b) => a - b);
  const compact = positions.length > 1 && positions.some((position, index) => {
    const next = positions[index + 1] ?? positions[0] + period;
    return 2 * radius * Math.sin(Math.PI * (next - position) / period) < 19;
  });
  const startIsOpen = openStart && (!fullTurn || openEnd);

  return (
    <div className={styles.turn}>
      <p className={styles.interval}><InlineMath math={interval} /></p>
      <svg viewBox="0 0 260 243" className={styles.svg} role="img" aria-labelledby={titleId}>
        <title id={titleId}>Тригонометрическая окружность с выделенным промежутком и корнями</title>
        <path className={diagram.axes} fill="none" strokeWidth="1.25"
          d="M 14 121 H 239 M 233 117 L 239 121 L 233 125 M 122 230 V 14 M 118 20 L 122 14 L 126 20" />
        <foreignObject x="211" y="129" width="44" height="26">
          <div xmlns="http://www.w3.org/1999/xhtml" className={styles.axisLabel}><InlineMath math="\cos x" /></div>
        </foreignObject>
        <foreignObject x="129" y="5" width="44" height="26">
          <div xmlns="http://www.w3.org/1999/xhtml" className={styles.axisLabel}><InlineMath math="\sin x" /></div>
        </foreignObject>
        <circle cx={center[0]} cy={center[1]} r={radius} className={styles.unit} />
        {fullTurn
          ? <circle cx={center[0]} cy={center[1]} r={radius} className={styles.arc} />
          : <path d={arc} className={styles.arc} />}
        {!points.has(positionOf(start)) && (
          <circle cx={startX} cy={startY} r="4.6" className={startIsOpen ? styles.open : styles.endpoint} />
        )}
        {!fullTurn && !points.has(positionOf(end)) && (
          <circle cx={endX} cy={endY} r="4.6" className={openEnd ? styles.open : styles.endpoint} />
        )}
        {markerAngles.map((angles, index) => {
          const [x, y] = pointAt(angles[0], denominator);
          return (
            <g key={angles[0]}>
              <circle cx={x} cy={y} r={compact ? 3.2 : 8.5} className={styles.root} />
              {!compact && <text x={x} y={y} dy=".35em" textAnchor="middle" className={styles.index}>{index + 1}</text>}
            </g>
          );
        })}
      </svg>
      {compact && <p className={styles.order}>Корни перечислены по дуге против часовой стрелки.</p>}
      {markerAngles.length > 0 ? (
        <ol className={styles.roots} aria-label="Подходящие корни">
          {markerAngles.map((angles, index) => (
            <li key={angles[0]}>
              {!compact && <span className={styles.badge} aria-hidden="true">{index + 1}</span>}
              <InlineMath math={angles.map(angle => angleMath(angle, denominator)).join(';\\, ')} />
            </li>
          ))}
        </ol>
      ) : (
        <p className={styles.empty}>{allAngles ? 'Все углы выделенной дуги подходят.' : 'На этой дуге корней нет.'}</p>
      )}
    </div>
  );
}

// Angles are integer multiples of π / denominator.
export default function TrigCircle({ interval: [start, end], roots = [], denominator = 1, openStart = false, openEnd = false, allAngles = false }) {
  const period = 2 * denominator;
  const turns = [];
  for (let from = start; from < end; from += period) {
    const to = Math.min(from + period, end);
    const leftOpen = from === start && openStart;
    const rightOpen = to < end || openEnd;
    const selected = roots.filter(root =>
      (root > from || (root === from && !leftOpen)) &&
      (root < to || (root === to && !rightOpen)),
    );
    turns.push(<CircleTurn key={from} start={from} end={to} openStart={leftOpen} openEnd={rightOpen}
      denominator={denominator} roots={selected} allAngles={allAngles} />);
  }
  return (
    <figure className={`${diagram.figure} ${styles.figure}`} data-trig-circle>
      <figcaption className={styles.caption}>
        Синяя дуга показывает промежуток.
        {!allAngles && ' Зелёными точками отмечены подходящие корни.'}
        {(openStart || openEnd) && ' Пустой кружок обозначает открытую границу.'}
      </figcaption>
      <div className={styles.turns}>{turns}</div>
    </figure>
  );
}
