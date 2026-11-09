import React, { useId } from 'react';
import { InlineMath } from 'react-katex';
import styles from './parameter-diagram.module.css';

const superscripts = '⁰¹²³⁴⁵⁶⁷⁸⁹';
const subscripts = '₀₁₂₃₄₅₆₇₈₉';
const inkColors = {
  blue: '#2563eb', sky: '#0284c7', cyan: '#0891b2', teal: '#0f766e',
  emerald: '#059669', green: '#15803d', orange: '#c2410c', amber: '#b45309',
  red: '#dc2626', rose: '#e11d48', purple: '#9333ea', violet: '#7c3aed',
  indigo: '#4f46e5', fuchsia: '#a21caf', pink: '#db2777',
};

const labelReplacements = {
  'a = √x-1': String.raw`a = \sqrt{x-1}`,
  'y = log₉² a': String.raw`y = \log_9^2 a`,
  'S₁₆/₃': String.raw`S_{16/3}`,
  '(-2+√19)/10': String.raw`\frac{-2+\sqrt{19}}{10}`,
  '(-2-√19)/10': String.raw`\frac{-2-\sqrt{19}}{10}`,
  '(2+√19)/10': String.raw`\frac{2+\sqrt{19}}{10}`,
  '(2-√19)/10': String.raw`\frac{2-\sqrt{19}}{10}`,
  'a =(-3-√41)/2': String.raw`a=\frac{-3-\sqrt{41}}{2}`,
  'a = (x²+8x-48)/16': String.raw`a=\frac{x^2+8x-48}{16}`,
  'a = 1/((3-x)(x+4))': String.raw`a=\frac{1}{(3-x)(x+4)}`,
  'a = 1/((x-3)(x+2))': String.raw`a=\frac{1}{(x-3)(x+2)}`,
  'a = 1/((x-3)(x+4))': String.raw`a=\frac{1}{(x-3)(x+4)}`,
  '(-1/a, -1/a)': String.raw`\left(-\frac1a;-\frac1a\right)`,
  'a = -0.5t': String.raw`a=-0{,}5t`,
};

function formatLabel(label) {
  label = label.replace(/−/g, '-');
  if (labelReplacements[label]) return labelReplacements[label];
  return label
    .replace(/(?:sqrt|√)\(([^()]+)\)/g, (_, body) => `\\sqrt{${body}}`)
    .replace(/√(\d+|[a-z])/g, (_, body) => `\\sqrt{${body}}`)
    .replace(/([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, (_, digits) => `^{${[...digits].map(digit => superscripts.indexOf(digit)).join('')}}`)
    .replace(/([₀₁₂₃₄₅₆₇₈₉]+)/g, (_, digits) => `_{${[...digits].map(digit => subscripts.indexOf(digit)).join('')}}`)
    .replace(/(^|[^a-z\\])pi(?=\/|\s|$)|π/g, (_, prefix) => `${prefix ?? ''}\\pi `)
    .replace(/γ/g, '\\gamma ')
    .replace(/≤/g, '\\le ')
    .replace(/≥/g, '\\ge ')
    .replace(/∈/g, '\\in ')
    .replace(/·/g, '\\cdot ')
    .replace(/\b(sin|cos|ctg|log)(?=[\s_{])/g, (_, name) => name === 'ctg' ? '\\operatorname{ctg}' : `\\${name}`)
    .replace(/_(max|min)/g, '_{\\mathrm{$1}}')
    .replace(/(\d*\\pi\s*|\d*\\sqrt\{[^}]+\}|\d+)\s*\/(\d+|[a-z])/g, '\\frac{$1}{$2}')
    .replace(/\(([^();,]+),\s*([^();,]+)\)/g, '($1;$2)')
    .replace(/(\d)[.,](\d)/g, '$1{,}$2')
    .replace(/\b([a-z])\/(\d+)\b/g, '\\frac{$1}{$2}')
    .replace(/([А-Яа-яЁё]+(?:[. ]+[А-Яа-яЁё]+)*\.?)/g, '\\text{$1}');
}

function annotationContent(node) {
  if (typeof node === 'string' || typeof node === 'number') return { text: String(node) };
  if (Array.isArray(node)) {
    const parts = node.map(annotationContent);
    const explicitMath = parts.filter(part => part.math);
    return explicitMath.length === 1
      ? explicitMath[0]
      : { text: parts.map(part => part.text ?? part.math ?? '').join('') };
  }
  if (!React.isValidElement(node)) return { text: '' };
  return node.props.math ? { math: node.props.math } : annotationContent(node.props.children);
}

function readLabel(node) {
  const props = node.props;
  const { text = '', math } = annotationContent(props.children);
  const label = text.trim().replace(/\s+/g, ' ');
  const colorName = props.className?.match(/(?:fill|text)-([a-z]+)-\d+/)?.[1];
  const color = typeof props.fill === 'string' && props.fill.startsWith('#')
    ? props.fill : inkColors[colorName];
  return {
    math: props['data-math'] ?? math ?? formatLabel(label),
    color,
  };
}

function collectPlot(children, namespace, legend) {
  return React.Children.toArray(children).map(node => {
    if (!React.isValidElement(node)) return null;
    const { type, props } = node;
    if (type === 'text' || type === 'foreignObject') {
      if (props['data-kind'] === 'curve') legend.push(readLabel(node));
      return null;
    }
    if (type === 'svg' || type === 'div') return null;
    if (type === 'g' && Number(props.strokeWidth) <= 1 && ['#e2e8f0', '#f1f5f9'].includes(props.stroke)) return null;

    const updates = {};
    for (const [name, value] of Object.entries(props)) {
      if (typeof value !== 'string') continue;
      if (['fill', 'stroke'].includes(name) && /^(?:#000000|#000|black)$/i.test(value)) {
        updates[name] = 'var(--diagram-axis)';
      } else if (name === 'id') updates.id = namespace + value;
      else if (name === 'href' && value.startsWith('#')) updates.href = '#' + namespace + value.slice(1);
      else if (value.includes('url(#')) updates[name] = value.replace(/url\(#([^)]*)\)/g, `url(#${namespace}$1)`);
    }
    if (!props.children) return React.cloneElement(node, updates);
    return React.cloneElement(node, updates, collectPlot(props.children, namespace, legend));
  });
}

const plotWidth = 810;
const gridSize = 45;

function labelSize(math) {
  const formula = math.replace(/\\dfrac/g, '\\frac');
  const symbols = formula
    .replace(/\\sqrt/g, 'xxx')
    .replace(/\\pi/g, 'x')
    .replace(/\\[a-z]+|[{}^_]/g, '');
  return {
    math: formula,
    width: Math.max(36, Math.min(220, symbols.length * 16 + 22)),
    height: /\\frac/.test(formula) ? 48 : 36,
  };
}

function overlaps(a, b) {
  return a.x < b.x + b.width + 4 && b.x < a.x + a.width + 4 &&
    a.y < b.y + b.height + 4 && b.y < a.y + a.height + 4;
}

function curveIntersects(box, segments) {
  return segments.some(([start, end]) => {
    const left = Math.max(Math.min(start[0], end[0]), box.x - 4);
    const right = Math.min(Math.max(start[0], end[0]), box.x + box.width + 4);
    if (left > right) return false;
    const slope = end[0] === start[0] ? null : (end[1] - start[1]) / (end[0] - start[0]);
    const startY = slope === null ? start[1] : start[1] + slope * (left - start[0]);
    const endY = slope === null ? end[1] : start[1] + slope * (right - start[0]);
    return Math.min(startY, endY) <= box.y + box.height + 4 &&
      Math.max(startY, endY) >= box.y - 4;
  });
}

function positionLabels(layout, translateX, translateY, height, segments) {
  const { horizontal, vertical, xTicks = [], yTicks = [] } = layout;
  const axisY = translateY(horizontal[0]);
  const axisX = vertical ? translateX(vertical[0]) : null;
  const labels = [
    { ...labelSize(horizontal[1]), x: plotWidth + 8, y: axisY - 18 },
  ];
  if (vertical) {
    const size = labelSize(vertical[1]);
    labels.push({ ...size, x: axisX - size.width / 2, y: -size.height - 5 });
  }

  const marks = [];
  const levels = yTicks.map(([value, math]) => ({ ...labelSize(math), at: translateY(value) }))
    .sort((a, b) => a.at - b.at);
  let nextTop = -Infinity;
  for (const level of levels) {
    level.y = Math.max(level.at - level.height / 2, nextTop);
    nextTop = level.y + level.height + 4;
  }
  const needsLeaders = levels.some(level => level.y > level.at - level.height / 2);
  for (const { at, ...level } of levels) {
    labels.push({ ...level, x: -level.width - (needsLeaders ? 26 : 9), rightAligned: true });
    marks.push(needsLeaders
      ? `M 4 ${at} H -5 L -21 ${level.y + level.height / 2}`
      : `M -5 ${at} h 9`);
  }

  const add = box => {
    if (labels.some(label => overlaps(box, label))) return false;
    labels.push(box);
    return true;
  };
  for (const [value, math] of xTicks) {
    const at = translateX(value);
    const size = labelSize(math);
    const left = at - size.width / 2;
    if (segments) {
      const candidates = math === '0' && axisX === at
        ? [{ ...size, x: at + 7, y: axisY + 7 }, { ...size, x: at + 7, y: axisY - size.height - 7 }]
        : [{ ...size, x: left, y: axisY - size.height - 7 }, { ...size, x: left, y: axisY + 7 }];
      const placed = candidates.some(box =>
        box.x >= 0 && box.x + box.width <= plotWidth &&
        box.y >= 0 && box.y + box.height <= height &&
        (axisX === null || box.x + box.width < axisX - 4 || box.x > axisX + 4) &&
        !curveIntersects(box, segments) && add(box),
      );
      if (placed) continue;
    }
    let row = 0;
    while (!add({ ...size, x: left, y: height + 8 + row * 54 })) row++;
    marks.push(`M ${at} ${height - 4} v 9`);
  }
  return { labels, marks, axisX, axisY };
}

function DiagramLabel({ label }) {
  return (
    <foreignObject x={label.x} y={label.y} width={label.width} height={label.height}>
      <div xmlns="http://www.w3.org/1999/xhtml" className={styles.axisLabel} style={label.rightAligned ? { justifyContent: 'flex-end' } : undefined}>
        <InlineMath math={label.math} />
      </div>
    </foreignObject>
  );
}

export function ParameterDiagram({ children, layout, segments }) {
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '_');
  const legend = [];
  const { props } = children;
  const [x, y, width, height] = props.viewBox.trim().split(/[\s,]+/).map(Number);
  const scale = plotWidth / width;
  const plotHeight = height * scale;
  const translateX = value => (value - x) * scale;
  const translateY = value => (value - y) * scale;
  const plot = collectPlot(props.children, id, legend);
  const { labels, marks, axisX, axisY } = positionLabels(layout, translateX, translateY, plotHeight, segments);
  const left = Math.max(12, ...labels.map(label => -label.x + 4));
  const top = Math.max(12, ...labels.map(label => -label.y + 4));
  const right = Math.max(12, ...labels.map(label => label.x + label.width - plotWidth + 4));
  const bottom = Math.max(12, ...labels.map(label => label.y + label.height - plotHeight + 4));
  return (
    <figure className={styles.figure} data-parameter-diagram>
      <div className={styles.viewport}>
        <svg
          className={styles.svg}
          role="img"
          aria-labelledby={`${id}-title`}
          viewBox={`${-left} ${-top} ${plotWidth + left + right} ${plotHeight + top + bottom}`}
        >
          <title id={`${id}-title`}>График к решению задачи</title>
          <defs>
            <pattern id={`${id}-grid`} x={axisX ?? 0} y={axisY} width={gridSize} height={gridSize} patternUnits="userSpaceOnUse">
              <path d={`M ${gridSize} 0 H 0 V ${gridSize}`} fill="none" className={styles.grid} />
            </pattern>
            <clipPath id={`${id}-plot`}>
              <rect width={plotWidth} height={plotHeight} rx="6" />
            </clipPath>
          </defs>
          <g clipPath={`url(#${id}-plot)`}>
            <rect width={plotWidth} height={plotHeight} className={styles.paper} />
            <rect width={plotWidth} height={plotHeight} fill={`url(#${id}-grid)`} />
            <g transform={`scale(${scale}) translate(${-x} ${-y})`}>{plot}</g>
          </g>
          <rect width={plotWidth} height={plotHeight} rx="6" className={styles.frame} />
          {marks.length > 0 && <path d={marks.join(' ')} fill="none" className={styles.railTicks} />}
          {labels.map((label, index) => <DiagramLabel key={index} label={label} />)}
        </svg>
      </div>
      {legend.length > 0 && (
        <figcaption className={styles.caption}>
          <ul className={styles.labels} aria-label="Функции на графике">
            {legend.map((label, index) => (
              <li key={index} className={styles.label}>
                {label.color && (
                  <span
                    className={styles.swatch}
                    style={{ '--diagram-ink': label.color }}
                    aria-hidden="true"
                  />
                )}
                <InlineMath math={label.math} />
              </li>
            ))}
          </ul>
        </figcaption>
      )}
    </figure>
  );
}

export function sampleCurve(pointAt, from, to, steps = 120) {
  return Array.from({ length: steps + 1 }, (_, index) => pointAt(from + (to - from) * index / steps));
}

const curveColors = ['#2563eb', '#0f766e', '#9333ea', '#c2410c', '#dc2626', '#0891b2'];

function tickLabels(ticks, convert) {
  return ticks.map(tick => typeof tick === 'number' ? [convert(tick), String(tick)] : [convert(tick.value), tick.math]);
}

export function CoordinateDiagram({ xRange, yRange, axes = ['x', 'a'], curves, points = [], xTicks = [], yTicks = [], equalScale = false }) {
  const [xMin, xMax] = xRange;
  const [yMin, yMax] = yRange;
  const width = plotWidth;
  const scaleX = width / (xMax - xMin);
  const height = equalScale ? (yMax - yMin) * scaleX : 450;
  const scaleY = height / (yMax - yMin);
  const x = value => (value - xMin) * scaleX;
  const y = value => (yMax - value) * scaleY;
  const axisY = Math.max(0, Math.min(height, y(0)));
  const axisX = Math.max(0, Math.min(width, x(0)));
  const showZero = xMin <= 0 && xMax >= 0 && yMin <= 0 && yMax >= 0;
  const layout = {
    horizontal: [axisY, axes[0]],
    vertical: [axisX, axes[1]],
    xTicks: tickLabels(showZero && !xTicks.includes(0) ? [0, ...xTicks] : xTicks, x),
    yTicks: tickLabels(showZero ? yTicks.filter(tick => tick !== 0) : yTicks, y),
  };
  const segments = [];
  const paths = curves.map(({ points: coordinates }) => {
    let previous = null;
    return coordinates.map(point => {
      if (!point || !point.every(Number.isFinite)) {
        previous = null;
        return '';
      }
      const current = [x(point[0]), y(point[1])];
      if (previous) segments.push([previous, current]);
      const instruction = previous ? 'L' : 'M';
      previous = current;
      return `${instruction}${current[0].toFixed(2)},${current[1].toFixed(2)}`;
    }).join(' ');
  });
  for (const point of points) {
    const at = x(point.x), level = y(point.y);
    segments.push([[at - 5, level - 5], [at + 5, level + 5]]);
  }
  return (
    <ParameterDiagram layout={layout} segments={segments}>
      <svg viewBox={`0 0 ${width} ${height}`}>
        <g className={styles.axes} fill="none" strokeWidth="1.7">
          <path d={`M 0,${axisY} H ${width - 2} M ${width - 12},${axisY - 5} L ${width - 2},${axisY} L ${width - 12},${axisY + 5}`} />
          <path d={`M ${axisX},${height} V 2 M ${axisX - 5},12 L ${axisX},2 L ${axisX + 5},12`} />
          {layout.xTicks.map(([at], index) => <path key={index} d={`M ${at},${axisY - 5} v 10`} />)}
          {layout.yTicks.map(([at], index) => <path key={index} d={`M ${axisX - 5},${at} h 10`} />)}
        </g>
        {curves.map(({ math, color, dashed }, index) => {
          const ink = color ?? curveColors[index % curveColors.length];
          return (
            <g key={index}>
              <path d={paths[index]} stroke={ink} fill="none" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray={dashed ? '8 6' : undefined} />
              {math && <text data-kind="curve" data-math={math} fill={ink} />}
            </g>
          );
        })}
        {points.map((point, index) => {
          const ink = point.color ?? '#334155';
          return (
            <circle key={index} cx={x(point.x)} cy={y(point.y)} r="5.5" stroke={ink} strokeWidth="2" fill={point.open ? 'var(--diagram-paper)' : ink} />
          );
        })}
      </svg>
    </ParameterDiagram>
  );
}
