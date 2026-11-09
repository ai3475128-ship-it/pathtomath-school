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

function textWidth(math) {
  return math
    .replace(/\\sqrt/g, 'rr')
    .replace(/\\pi/g, 'p')
    .replace(/\\[a-z]+|[{}^_\s]/g, '')
    .split('')
    .reduce((width, symbol) => width + (symbol === '-' ? 21 : symbol === '+' ? 27 : 14), 0);
}

function labelSize(math) {
  const formula = math.replace(/\\dfrac/g, '\\frac');
  const fraction = formula.match(/^(.*?)\\frac(?:\{(.*)\}|(\w))(?:\{(.*)\}|(\w))$/);
  const width = fraction
    ? textWidth(fraction[1]) + 0.8 * Math.max(textWidth(fraction[2] ?? fraction[3]), textWidth(fraction[4] ?? fraction[5]))
    : textWidth(formula);
  return {
    math: formula,
    width: Math.max(20, Math.min(220, Math.ceil(width + 8))),
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

function placeTick(tick, labels, segments, axisX, axisY, height) {
  const { at, math, axis, offset } = tick;
  const size = labelSize(math);
  const x = axis === 'x' ? at : axisX;
  const y = axis === 'y' ? at : axisY;
  const origin = axis === 'x' && math === '0' && x === axisX;
  const boxAt = ([dx, dy]) => ({
    ...size,
    x: x + dx - size.width / 2,
    y: y + dy - size.height / 2,
  });
  if (offset) return boxAt(offset);

  const clear = box => {
    // The zero glyph has extra vertical padding in the formula box.
    const ink = origin ? { ...box, y: box.y + 6, height: box.height - 12 } : box;
    return !labels.some(label => overlaps(box, label)) && !curveIntersects(ink, segments);
  };
  const horizontal = axis === 'x';
  const side = size.width / 2 + 10;
  const rise = size.height / 2 + (origin ? 3 : axisX === null ? 16 : 10);

  // Keep the center of each label aligned with its tick.
  for (const gap of [0, 10, 22, 38, 60, 88]) {
    const offsets = origin
      ? [[side + gap, rise + gap], [-side - gap, rise + gap], [side + gap, -rise - gap], [-side - gap, -rise - gap]]
      : horizontal
        ? [[0, rise + gap], [0, -rise - gap]]
        : [[-side - gap, 0], [side + gap, 0]];
    const box = offsets.map(boxAt).find(clear);
    if (box) return box;
  }

  // Use the margin when there is no free space along the projection inside the plot.
  const before = horizontal ? y + rise : x + side;
  const after = horizontal ? height - y + rise : plotWidth - x + side;
  const step = horizontal ? size.height + 8 : size.width + 8;
  for (let gap = 0; ; gap += step) {
    const offsets = [-(before + gap), after + gap].sort((a, b) => Math.abs(a) - Math.abs(b));
    const boxes = offsets.map(delta => boxAt(horizontal ? [0, delta] : [delta, 0]));
    const box = boxes.find(candidate => !labels.some(label => overlaps(candidate, label)));
    if (box) return box;
  }
}

function positionLabels(layout, translateX, translateY, height, segments = []) {
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

  const corners = [[0, 0], [plotWidth, 0], [plotWidth, height], [0, height]];
  const frame = corners.map((corner, index) => [corner, corners[(index + 1) % corners.length]]);
  const axisLines = [[[0, axisY], [plotWidth, axisY]]];
  if (vertical) axisLines.push([[axisX, 0], [axisX, height]]);
  const guides = [...frame, ...axisLines];
  const obstacles = [...guides, ...segments];
  const marks = [];
  // SVG ticks may include an offset from the division in normalized plot units.
  const divisions = [
    ...xTicks.map(([value, math, ...offset]) => ({ axis: 'x', at: translateX(value), math, offset: offset.length ? offset : null })),
    ...yTicks.map(([value, math, ...offset]) => ({ axis: 'y', at: translateY(value), math, offset: offset.length ? offset : null })),
  ];
  for (const tick of divisions) {
    const onXAxis = tick.axis === 'x';
    const x = onXAxis ? tick.at : axisX;
    const y = onXAxis ? axisY : tick.at;
    const box = placeTick(tick, labels, obstacles, axisX, axisY, height);
    labels.push(box);
    if (tick.math !== '0' || x !== axisX) {
      marks.push(onXAxis ? `M ${x} ${y - 5} v 10` : `M ${x - 5} ${y} h 10`);
    }
  }
  return { labels, marks, axisX, axisY };
}

function DiagramLabel({ label }) {
  return (
    <foreignObject x={label.x} y={label.y} width={label.width} height={label.height}>
      <div xmlns="http://www.w3.org/1999/xhtml" className={styles.axisLabel}>
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

function scaleTicks(min, max) {
  const unit = 10 ** Math.floor(Math.log10((max - min) / 4));
  const step = [unit, 2 * unit, 5 * unit, 10 * unit].find(value => value >= (max - min) / 4);
  const ticks = [];
  for (let i = Math.ceil(min / step); i <= Math.floor(max / step); i++) {
    if (i !== 0) ticks.push(Number((i * step).toPrecision(10)));
  }
  return ticks;
}

function tickLabels(ticks, convert) {
  return ticks.map(tick => typeof tick === 'number'
    ? [convert(tick), String(tick).replace('.', '{,}')]
    : [convert(tick.value), tick.math]);
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
  const horizontalTicks = xTicks.length ? xTicks : scaleTicks(xMin, xMax);
  const verticalTicks = yTicks.length ? yTicks : scaleTicks(yMin, yMax);
  const layout = {
    horizontal: [axisY, axes[0]],
    vertical: [axisX, axes[1]],
    xTicks: tickLabels(showZero && !horizontalTicks.includes(0) ? [0, ...horizontalTicks] : horizontalTicks, x),
    yTicks: tickLabels(showZero ? verticalTicks.filter(tick => tick !== 0) : verticalTicks, y),
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
