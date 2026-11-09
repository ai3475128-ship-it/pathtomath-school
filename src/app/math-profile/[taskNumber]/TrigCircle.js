import React, { useId } from 'react';
import { InlineMath } from 'react-katex';
import diagram from './parameter-diagram.module.css';
import styles from './trig-circle.module.css';

const radius = 86;
const turnSpacing = 21;

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

function readableMath(math) {
  return math.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1/$2')
    .replaceAll('\\pi', 'π').replaceAll('\\,', '');
}

function pointAt(value, denominator, distance) {
  const radians = (value % (2 * denominator)) * Math.PI / denominator;
  return [distance * Math.cos(radians), -distance * Math.sin(radians)];
}

function labelSize(formulas) {
  let width = 0;
  let height = 0;
  const glyphWidth = text => text.replace('\\pi', 'π').length * 11;
  for (const math of formulas) {
    const fraction = math.match(/^(-?)\\frac\{([^}]+)\}\{([^}]+)\}$/);
    const lineWidth = fraction
      ? (fraction[1] ? 16 : 0) + 0.8 * Math.max(glyphWidth(fraction[2]), glyphWidth(fraction[3]))
      : glyphWidth(math) + (math.startsWith('-') ? 5 : 0);
    width = Math.max(width, lineWidth);
    height += fraction ? 30 : 24;
  }
  return { width: Math.ceil(width + 8), height: height + 2 * (formulas.length - 1) };
}

function labelFits(box, placed, radii, axisLimit) {
  const { left, top, width, height } = box;
  const right = left + width;
  const bottom = top + height;
  const onHorizontalAxis = top < 2 && bottom > -2 && left < axisLimit + 2 && right > -axisLimit - 2;
  const onVerticalAxis = left < 2 && right > -2 && top < axisLimit + 2 && bottom > -axisLimit - 2;
  const onHorizontalArrow = top < 5 && bottom > -5 && left < axisLimit + 2 && right > axisLimit - 7;
  const onVerticalArrow = left < 5 && right > -5 && top < -axisLimit + 7 && bottom > -axisLimit - 2;
  if (onHorizontalAxis || onVerticalAxis || onHorizontalArrow || onVerticalArrow) return false;

  const near = Math.hypot(Math.max(left, -right, 0), Math.max(top, -bottom, 0));
  const far = Math.hypot(Math.max(Math.abs(left), Math.abs(right)), Math.max(Math.abs(top), Math.abs(bottom)));
  if (radii.some(r => near < r + 6 && far > r - 6)) return false;

  return placed.every(other =>
    right + 3 <= other.left || left >= other.left + other.width + 3 ||
    bottom + 3 <= other.top || top >= other.top + other.height + 3,
  );
}

function placeLabel(marker, placed, radii, neighbors, axisLimit) {
  const { width, height } = labelSize(marker.formulas);
  const nx = marker.x / marker.radius;
  const ny = marker.y / marker.radius;
  const halfSize = (Math.abs(nx) * width + Math.abs(ny) * height) / 2;
  const innerTurn = marker.radius === radius && radii.length > 1;
  const outerTurn = marker.radius > radius;

  // Radial placement keeps each label near its point. Tangential shifts clear the axes.
  for (let gap = 8; ; gap += 5) {
    const directions = outerTurn ? [1] : innerTurn && gap < 53 ? [-1] : [1, -1];
    for (const shift of [0, -6, 6, -12, 12, -18, 18, -24, 24, -30, 30, -36, 36]) {
      for (const direction of directions) {
        const distance = marker.radius + direction * (halfSize + gap);
        if (distance <= 0) continue;
        const x = nx * distance - ny * shift;
        const y = ny * distance + nx * shift;
        if (neighbors.some(other => x * (other.x - marker.x) + y * (other.y - marker.y) > 0)) continue;
        const box = { left: x - width / 2, top: y - height / 2, width, height };
        if (labelFits(box, placed, radii, axisLimit)) return box;
      }
    }
  }
}

function turnMarkers({ start, end, openStart, openEnd, roots, denominator, distance }) {
  const period = 2 * denominator;
  const positionOf = angle => (angle % period + period) % period;
  const points = new Map();
  for (const angle of new Set([...(start === null ? [] : [start]), ...roots, ...(end === null ? [] : [end])])) {
    const position = positionOf(angle);
    if (!points.has(position)) points.set(position, []);
    points.get(position).push(angle);
  }
  return [...points.values()].map(angles => {
    const atStart = angles.includes(start);
    const atEnd = angles.includes(end);
    const boundary = atStart || atEnd;
    const open = boundary && (!atStart || openStart) && (!atEnd || openEnd);
    const root = angles.some(angle => roots.includes(angle));
    const [x, y] = pointAt(angles[0], denominator, distance);
    return {
      x, y, boundary, open, root, radius: distance,
      formulas: angles.map(angle => angleMath(angle, denominator)),
    };
  });
}

function Arc({ from, to, period, denominator, distance }) {
  if (to - from === period) return <circle r={distance} className={styles.arc} />;
  const [x1, y1] = pointAt(from, denominator, distance);
  const [x2, y2] = pointAt(to, denominator, distance);
  return <path d={`M ${x1} ${y1} A ${distance} ${distance} 0 ${to - from > denominator ? 1 : 0} 0 ${x2} ${y2}`} className={styles.arc} />;
}

// Angles are integer multiples of π / denominator.
export default function TrigCircle({ interval: [start, end], roots = [], denominator = 1, openStart = false, openEnd = false, allAngles = false }) {
  const titleId = useId();
  const period = 2 * denominator;
  const turns = [];
  const markers = [];
  for (let from = start; from < end; from += period) {
    const to = Math.min(from + period, end);
    const distance = radius + turns.length * turnSpacing;
    const selected = roots.filter(root =>
      (root > from || (root === from && !(from === start && openStart))) &&
      (root < to || (root === to && to === end && !openEnd)),
    );
    turns.push({ from, to, period, denominator, distance });
    markers.push(...turnMarkers({
      start: from === start ? start : null,
      end: to === end ? end : null,
      openStart, openEnd, roots: selected, denominator, distance,
    }));
  }

  const radii = turns.map(turn => turn.distance);
  const axisLimit = (radii.at(-1) ?? radius) + 18;
  const labels = [];
  const crowdedFirst = markers.map(marker => {
    const neighbors = markers.filter(other => other !== marker && other.radius === marker.radius);
    const separation = Math.min(...neighbors.map(other => Math.hypot(other.x - marker.x, other.y - marker.y)));
    return { marker, neighbors, separation };
  }).sort((a, b) => (a.separation - b.separation) || (Number(b.marker.root) - Number(a.marker.root)));
  for (const { marker, neighbors } of crowdedFirst) {
    labels.push({ ...marker, ...placeLabel(marker, labels, radii, neighbors, axisLimit) });
  }
  const limit = Math.max(axisLimit + 12, ...radii.map(r => r + 10));
  const left = Math.min(-limit, ...labels.map(label => label.left - 6));
  const top = Math.min(-limit, ...labels.map(label => label.top - 6));
  const right = Math.max(limit, ...labels.map(label => label.left + label.width + 6));
  const bottom = Math.max(limit, ...labels.map(label => label.top + label.height + 6));
  const interval = `${openStart ? '(' : '['}${angleMath(start, denominator)};\\, ${angleMath(end, denominator)}${openEnd ? ')' : ']'}`;
  const solution = allAngles ? 'Подходит весь промежуток.' : roots.length > 0
    ? `Подходят углы ${roots.map(angle => readableMath(angleMath(angle, denominator))).join(', ')}.`
    : 'Подходящих корней нет.';

  return (
    <figure className={`${diagram.figure} ${styles.figure}`} data-trig-circle>
      <div className={styles.turn}>
        <p className={styles.interval}><InlineMath math={interval} /></p>
        <svg viewBox={`${left} ${top} ${right - left} ${bottom - top}`} className={styles.svg}
          role="img" aria-labelledby={titleId} aria-describedby={`${titleId}-values`}>
          <title id={titleId}>Тригонометрическая окружность с подписанными границами и корнями</title>
          <desc id={`${titleId}-values`}>Промежуток {readableMath(interval)}. {solution}</desc>
          <path className={diagram.axes} fill="none" strokeWidth="1.25"
            d={`M ${-axisLimit} 0 H ${axisLimit} m -6 -4 l 6 4 l -6 4 M 0 ${axisLimit} V ${-axisLimit} m -4 6 l 4 -6 l 4 6`} />
          <circle r={radius} className={styles.unit} />
          {turns.map(turn => <Arc key={turn.from} {...turn} />)}
          {labels.map(label => (
            <g key={`${label.radius}-${label.formulas[0]}`}>
              <circle cx={label.x} cy={label.y} r={label.boundary ? 3.8 : 3}
                className={label.open ? styles.open : styles.point} />
              <foreignObject x={label.left} y={label.top} width={label.width} height={label.height}>
                <div xmlns="http://www.w3.org/1999/xhtml" className={label.root ? `${styles.angleLabel} ${styles.rootLabel}` : styles.angleLabel}>
                  {label.formulas.map(math => <span key={math}><InlineMath math={math} /></span>)}
                </div>
              </foreignObject>
            </g>
          ))}
        </svg>
      </div>
    </figure>
  );
}
