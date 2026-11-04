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
    kind: props['data-kind'],
    label,
    x: Number(props.x) + (node.type === 'foreignObject' ? (Number(props.width) || 0) / 2 : 0),
    y: Number(props.y),
    color,
  };
}

function collectPlot(children, namespace, labels, lines) {
  return React.Children.toArray(children).map(node => {
    if (!React.isValidElement(node)) return null;
    const { type, props } = node;
    if (type === 'text' || type === 'foreignObject') {
      const label = readLabel(node);
      if (label.math) labels.push(label);
      return null;
    }
    if (type === 'line' && !props.strokeDasharray) lines.push(props);
    if (type === 'svg' || type === 'div') return null;

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
    return React.cloneElement(node, updates, collectPlot(props.children, namespace, labels, lines));
  });
}

function longestAxis(lines, horizontal) {
  const along = horizontal ? 'x' : 'y';
  const across = horizontal ? 'y' : 'x';
  return lines
    .filter(line => Number(line[`${across}1`]) === Number(line[`${across}2`]))
    .sort((a, b) =>
      Math.abs(Number(b[`${along}2`]) - Number(b[`${along}1`])) -
      Math.abs(Number(a[`${along}2`]) - Number(a[`${along}1`])),
    )[0];
}

function positionLabels(labels, lines, [x, y, width, height]) {
  const horizontal = longestAxis(lines, true);
  const vertical = longestAxis(lines, false);
  const horizontalY = Number(horizontal?.y1);
  const verticalX = Number(vertical?.x1);
  const numberLine = horizontal && width > 2.2 * height &&
    (!vertical || Math.abs(Number(vertical.y2) - Number(vertical.y1)) < height * 0.35);
  const tickPositions = numberLine ? lines
    .filter(line => Number(line.x1) === Number(line.x2) &&
      Math.abs((Number(line.y1) + Number(line.y2)) / 2 - horizontalY) < 8)
    .map(line => Number(line.x1)) : [];
  const chartLabels = [];
  const legend = [];
  const occupies = (candidate) => chartLabels.some(box =>
    box.x < candidate.x + candidate.width + 3 && candidate.x < box.x + box.width + 3 &&
    box.y < candidate.y + candidate.height + 3 && candidate.y < box.y + box.height + 3,
  );

  for (const label of labels) {
    let kind = label.kind;
    if (!kind && /^[xayt]$/.test(label.label) && Number.isFinite(label.x + label.y)) {
      kind = label.x > x + width * 0.74 ? 'axis-x' : 'axis-y';
    }
    let labelX = label.x;
    const numericMath = /[0-9]|\\pi/.test(label.math) &&
      /^[-+0-9().{},^/\s]*$/.test(label.math.replace(/\\(?:d?frac|sqrt|pi|left|right)/g, ''));
    if (!kind && numberLine && numericMath && Number.isFinite(labelX)) {
      kind = 'tick-x';
      const nearbyTick = tickPositions.find(position => Math.abs(position - labelX) < 12);
      if (nearbyTick !== undefined) labelX = nearbyTick;
    }
    if (!kind && /^-?\s*\d+(?:[.,]\d+)?$/.test(label.label) && label.label !== '0') {
      if (Math.abs(label.y - horizontalY) < 20 && Math.abs(label.x - verticalX) > 24) kind = 'tick-x';
      else if (Math.abs(label.x - verticalX) < 28) kind = 'tick-y';
    }

    let bounds;
    if (kind === 'axis-x') {
      bounds = { x: x + width + 4, y: (Number.isFinite(label.y) ? label.y : horizontalY) - 13, width: 25, height: 26 };
    } else if (kind === 'axis-y') {
      bounds = { x: label.x - 14, y: y - 28, width: 28, height: 26 };
    } else if (kind === 'tick-x') {
      const labelWidth = Math.min(90, Math.max(28, label.math.length * 2.6 + 17));
      const labelHeight = /\\d?frac/.test(label.math) ? 36 : 26;
      for (let row = 0; row < 3; row++) {
        const candidate = {
          x: labelX - labelWidth / 2, y: y + height + 3 + row * 39,
          width: labelWidth, height: labelHeight,
        };
        if (!occupies(candidate)) {
          bounds = candidate;
          break;
        }
      }
    } else if (kind === 'tick-y') {
      bounds = { x: x - 55, y: label.y - 13, width: 52, height: 26 };
    }
    if (bounds && Number.isFinite(bounds.x + bounds.y) && !occupies(bounds)) {
      chartLabels.push({ ...label, ...bounds, kind });
    } else if (kind === 'curve') {
      legend.push(label);
    }
  }
  return { chartLabels, legend };
}

function DiagramLabel({ label }) {
  return (
    <foreignObject x={label.x} y={label.y} width={label.width} height={label.height} overflow="hidden">
      <div xmlns="http://www.w3.org/1999/xhtml" className={styles.axisLabel}>
        <InlineMath math={label.math} />
      </div>
    </foreignObject>
  );
}

export function ParameterDiagram({ children, gridStep = 24, gridOrigin }) {
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '_');
  const labels = [];
  const lines = [];
  const { props } = children;
  const viewport = props.viewBox?.trim().split(/[\s,]+/).map(Number) ??
    [0, 0, Number(props.width) || 400, Number(props.height) || 300];
  const [x, y, width, height] = viewport;
  const plot = collectPlot(props.children, id, labels, lines);
  const { chartLabels, legend } = positionLabels(labels, lines, viewport);
  const [originX, originY] = gridOrigin ?? [
    Number(longestAxis(lines, false)?.x1 ?? x),
    Number(longestAxis(lines, true)?.y1 ?? y),
  ];
  const left = Math.max(12, ...chartLabels.map(label => x - label.x + 3));
  const top = Math.max(12, ...chartLabels.map(label => y - label.y + 3));
  const right = Math.max(12, ...chartLabels.map(label => label.x + label.width - x - width + 3));
  const bottom = Math.max(12, ...chartLabels.map(label => label.y + label.height - y - height + 3));
  return (
    <figure className={styles.figure} data-parameter-diagram>
      <svg
        className={styles.svg}
        role="img"
        aria-labelledby={`${id}-title`}
        viewBox={`${x - left} ${y - top} ${width + left + right} ${height + top + bottom}`}
      >
        <title id={`${id}-title`}>График к решению задачи</title>
        <defs>
          <pattern id={`${id}-grid`} x={originX} y={originY} width={gridStep} height={gridStep} patternUnits="userSpaceOnUse">
            <path d={`M ${gridStep} 0 H 0 V ${gridStep}`} fill="none" className={styles.grid} />
          </pattern>
          <clipPath id={`${id}-plot`}>
            <rect x={x} y={y} width={width} height={height} rx="5" />
          </clipPath>
        </defs>
        <g clipPath={`url(#${id}-plot)`}>
          <rect x={x} y={y} width={width} height={height} className={styles.paper} />
          <rect x={x} y={y} width={width} height={height} fill={`url(#${id}-grid)`} />
          {plot}
        </g>
        <rect x={x} y={y} width={width} height={height} rx="5" className={styles.frame} />
        {chartLabels.map((label, index) => <DiagramLabel key={index} label={label} />)}
      </svg>
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

export function CoordinateDiagram({ xRange, yRange, axes = ['x', 'a'], curves, points = [], xTicks = [], yTicks = [] }) {
  const [xMin, xMax] = xRange;
  const [yMin, yMax] = yRange;
  const scale = Math.min(480 / (xMax - xMin), 400 / (yMax - yMin));
  const width = (xMax - xMin) * scale;
  const height = (yMax - yMin) * scale;
  const x = value => (value - xMin) * scale;
  const y = value => (yMax - value) * scale;
  const xAxis = Math.max(0, Math.min(height, y(0)));
  const yAxis = Math.max(0, Math.min(width, x(0)));
  const interval = 10 ** Math.floor(Math.log10(32 / scale));
  const cell = [interval, interval * 2, interval * 5, interval * 10].find(step => step * scale >= 20) * scale;
  const tick = item => typeof item === 'number' ? { value: item, math: String(item) } : item;
  const path = coordinates => {
    let start = true;
    return coordinates.map(point => {
      if (!point || !point.every(Number.isFinite)) {
        start = true;
        return '';
      }
      const instruction = start ? 'M' : 'L';
      start = false;
      return `${instruction}${x(point[0]).toFixed(2)},${y(point[1]).toFixed(2)}`;
    }).join(' ');
  };
  return (
    <ParameterDiagram gridStep={cell} gridOrigin={[x(0), y(0)]}>
      <svg viewBox={`0 0 ${width} ${height}`}>
        <g className={styles.axes} fill="none" strokeWidth="1.3">
          <path d={`M 0,${xAxis} H ${width - 2} M ${width - 9},${xAxis - 4} L ${width - 2},${xAxis} L ${width - 9},${xAxis + 4}`} />
          <path d={`M ${yAxis},${height} V 2 M ${yAxis - 4},9 L ${yAxis},2 L ${yAxis + 4},9`} />
        </g>
        <text x={width} y={xAxis} data-kind="axis-x" data-math={axes[0]} />
        <text x={yAxis} y={0} data-kind="axis-y" data-math={axes[1]} />
        {xTicks.map(item => {
          const { value, math } = tick(item);
          return (
            <g key={value}>
              <path className={styles.axes} d={`M ${x(value)},${xAxis - 3} v 6`} />
              <text x={x(value)} y={xAxis} data-kind="tick-x" data-math={math} />
            </g>
          );
        })}
        {yTicks.map(item => {
          const { value, math } = tick(item);
          return (
            <g key={value}>
              <path className={styles.axes} d={`M ${yAxis - 3},${y(value)} h 6`} />
              <text x={yAxis} y={y(value)} data-kind="tick-y" data-math={math} />
            </g>
          );
        })}
        {curves.map(({ math, points: coordinates, color, dashed }, index) => {
          const ink = color ?? curveColors[index % curveColors.length];
          return (
            <g key={index}>
              <path d={path(coordinates)} stroke={ink} fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray={dashed ? '6 5' : undefined} />
              {math && <text data-kind="curve" data-math={math} fill={ink} />}
            </g>
          );
        })}
        {points.map((point, index) => {
          const ink = point.color ?? '#334155';
          return (
            <g key={index}>
              <circle cx={x(point.x)} cy={y(point.y)} r="3.9" stroke={ink} strokeWidth="1.6" fill={point.open ? 'var(--diagram-paper)' : ink} />
            </g>
          );
        })}
      </svg>
    </ParameterDiagram>
  );
}
