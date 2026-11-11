import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const css = await readFile(new URL('../src/app/math-profile/ege/components/EgeCardPreview.module.css', import.meta.url), 'utf8');
const component = await readFile(new URL('../src/app/math-profile/ege/components/EgeCardPreview.js', import.meta.url), 'utf8');

function frames(name, rotation = false) {
  const block = css.match(new RegExp(`@keyframes ${name}\\s*\\{([\\s\\S]*?)\\n\\}`));
  assert.ok(block, `Missing animation ${name}`);
  const pattern = rotation
    ? /(\d+)%\s*\{\s*transform:\s*translate\(([-\d.]+)px,\s*([-\d.]+)px\)\s*rotate\(([-\d.]+)deg\);/g
    : /(\d+)%\s*\{\s*transform:\s*translate\(([-\d.]+)px,\s*([-\d.]+)px\);/g;
  const result = [...block[1].matchAll(pattern)].map((match) => match.slice(1).map(Number));
  assert.deepEqual(result.map((frame) => frame[0]), [0, 25, 50, 75, 100]);
  return result;
}

function close(actual, expected, tolerance = 1e-4) {
  assert.ok(Math.abs(actual - expected) < tolerance, `${actual} differs from ${expected}`);
}

test('the moving tangent touches the parabola and has the correct slope', () => {
  assert.ok(component.includes('M40 105 Q100 -15 160 105'));
  const points = frames('tangentCurve', true);
  for (const [percent, x, y, angle] of points) {
    const t = .25 + percent / 400;
    close(x, 40 + 120 * t);
    close(y, 105 - 240 * t * (1 - t));
    close(angle, Math.atan(-2 + 4 * t) * 180 / Math.PI);
  }
  // Between keyframes CSS interpolates linearly; bound the visual error too.
  for (let i = 0; i < points.length - 1; i++) {
    const left = points[i], right = points[i + 1];
    const t = .25 + (left[0] + right[0]) / 800;
    close((left[2] + right[2]) / 2, 105 - 240 * t * (1 - t), .24);
    close((left[3] + right[3]) / 2, Math.atan(-2 + 4 * t) * 180 / Math.PI, .5);
  }
});

test('the optimization marker follows the curve and stops at the vertex', () => {
  assert.ok(component.includes('M40 120 Q100 -20 160 120'));
  const points = frames('maximumCurve');
  for (const [percent, x, y] of points) {
    const t = .25 + percent / 400;
    close(x, 40 + 120 * t);
    close(y, 120 - 280 * t * (1 - t));
  }
  assert.deepEqual(points.at(-1).slice(1), [100, 50]);
});

test('the shaded pyramid cross-section meets all four side edges', () => {
  const match = component.match(/<polygon points="([\d,. ]+)"/);
  assert.ok(match);
  const points = match[1].split(' ').map(point => point.split(',').map(Number));
  const apex = [100, 22];
  const base = [[28, 101], [100, 72], [172, 101], [100, 129]];
  for (let i = 0; i < base.length; i++) {
    close(points[i][0], apex[0] + .6 * (base[i][0] - apex[0]), .25);
    close(points[i][1], apex[1] + .6 * (base[i][1] - apex[1]), .25);
  }
  assert.match(component, /clipPath="url\(#ege-pyramid-section\)"/);
});

const cross = ([x1, y1], [x2, y2]) => x1 * y2 - y1 * x2;
const subtract = ([x1, y1], [x2, y2]) => [x1 - x2, y1 - y2];

function introCase(number, next) {
  const start = component.indexOf(`      case ${number}: return`);
  const end = component.indexOf(next ? `      case ${next}: return` : '      default: return null;', start);
  assert.ok(start >= 0 && end > start);
  return component.slice(start, end);
}

test('three-perpendiculars diagram keeps the projected lines in the plane', () => {
  const section = introCase(15, 18);
  assert.match(section, /M20 78 97 50 178 88 101 116Z/);
  const vertical = section.match(/M([\d.]+) ([\d.]+)V([\d.]+)/);
  const sloped = section.match(/M75\.3 25\.5 ([\d.]+) ([\d.]+)/);
  assert.ok(vertical && sloped);
  const [, ax, ay, hy] = vertical.map(Number);
  const [, bx, by] = sloped.map(Number);
  const A = [ax, ay], H = [ax, hy], B = [bx, by];
  const projectedY = [81, 38], projectedX = [77, -28];
  close(cross(subtract(B, H), projectedY), 0, .001);
  assert.ok(A[1] < H[1]);
  const floorLine = section.match(/M([\d.]+) ([\d.]+) ([\d.]+) ([\d.]+)" delay=\{660\}/);
  assert.ok(floorLine);
  const [, x1, y1, x2, y2] = floorLine.map(Number);
  const L1 = [x1, y1], L2 = [x2, y2];
  close(cross(subtract(L2, L1), projectedX), 0, .001);
  close(cross(subtract(B, L1), subtract(L2, L1)), 0, .001);
  assert.match(section, /HB ⟂ ℓ  ⇒  AB ⟂ ℓ/);
});

test('Menelaus secant intersects two sides and the extension with the correct ratio', () => {
  const section = introCase(18, 19);
  assert.match(section, /M50 110 90 35 150 110Z/);
  assert.match(section, /M150 110h45/);
  const secant = section.match(/M([\d.]+) ([\d.]+) ([\d.]+) ([\d.]+)" delay=\{700\}/);
  assert.ok(secant);
  const [, dx, dy, fx, fy] = secant.map(Number);
  const A = [50, 110], B = [90, 35], C = [150, 110], D = [dx, dy], F = [fx, fy];
  close(cross(subtract(D, A), subtract(B, A)), 0);
  close(cross(subtract(F, A), subtract(C, A)), 0);
  assert.ok(F[0] > C[0]);
  const direction = subtract(F, D), side = subtract(C, B);
  const t = cross(subtract(B, D), side) / cross(direction, side);
  const E = [D[0] + t * direction[0], D[1] + t * direction[1]];
  const len = (p, q) => Math.hypot(...subtract(p, q));
  close(len(A, D) / len(D, B) * len(B, E) / len(E, C) * len(C, F) / len(F, A), 1);
  assert.match(section, /AD\/DB · BE\/EC · CF\/FA = 1/);
});

test('trigonometric label is separated from circle, ray and axes', () => {
  const section = component.slice(component.lastIndexOf('    case 14: return'), component.lastIndexOf('    case 15: return'));
  assert.match(section, /<Text x=\{159\} y=\{36\} size=\{13\}>π\/3<\/Text>/);
  // Its estimated left edge lies to the right of the circle's furthest point.
  assert.ok(159 - 13 > 100 + 45);
});

test('vector sum reaches the opposite corner of the parallelogram', () => {
  const start = component.lastIndexOf('    case 2: return');
  const end = component.lastIndexOf('    case 3: return');
  const section = component.slice(start, end);
  const horizontal = section.match(/M([\d.]+) ([\d.]+)H([\d.]+)/);
  const slanted = section.match(/M43 110 ([\d.]+) ([\d.]+)" delay=\{180\}/);
  const outer = section.match(/M([\d.]+) ([\d.]+) ([\d.]+) ([\d.]+) ([\d.]+) ([\d.]+)" className=\{styles\.dashed\}/);
  assert.ok(horizontal && slanted && outer);
  const [, ox, oy, ax] = horizontal.map(Number);
  const [, bx, by] = slanted.map(Number);
  const [, fromX, fromY, sumX, sumY, toX, toY] = outer.map(Number);
  close(fromX, ax); close(fromY, oy);
  close(toX, bx); close(toY, by);
  close(sumX, ax + bx - ox); close(sumY, oy + by - oy);
  assert.match(section, /M43 110 156 41/);
});

test('the parameters preview states the Bolzano–Cauchy theorem', () => {
  const section = introCase(19, 20);
  assert.match(section, /∀ a,b ∈ ℝ/);
  assert.match(section, /∀ f ∈ C/);
  assert.match(section, /f\(a\) · f\(b\) &lt; 0 ⇒/);
  assert.match(section, /∃ c ∈ \(a; b\): f\(c\) = 0/);
});

test('the Venn diagram displays the correct intersection', () => {
  const section = introCase(20);
  assert.match(section, />1, 2<\/Text>/);
  assert.match(section, />3<\/Text>/);
  assert.match(section, />4, 5<\/Text>/);
  assert.match(section, /A ∩ B = \{'\{3\}'\}/);
  assert.match(section, /clipPath="url\(#ege-intro-sets-overlap\)"/);
});


test('selected previews draw in stages once and respect reduced motion', () => {
  const chosen = [introCase(15, 18), introCase(18, 19), component.slice(component.lastIndexOf('    case 2: return'), component.lastIndexOf('    case 3: return'))];
  for (const section of chosen) {
    assert.ok((section.match(/<SmoothLine\b/g) || []).length >= 2);
    assert.ok((section.match(/<SmoothFade\b/g) || []).length >= 2);
    const delays = [...section.matchAll(/delay=\{(\d+)\}/g)].map(match => Number(match[1]));
    assert.ok(delays.some(delay => delay >= 1000));
  }
  assert.match(css, /\.card:hover \.smoothDraw \{ animation: draw 650ms ease-in-out var\(--delay, 0ms\) forwards; \}/);
  assert.match(css, /\.card:hover \.smoothFade \{ animation: appear 400ms ease-in-out var\(--delay, 0ms\) forwards; \}/);
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.match(css, /\.card \.draw, \.card \.smoothDraw, \.card \.thermometer \{ animation: none !important; stroke-dashoffset: 0; \}/);
  assert.match(css, /\.card \.reveal, \.card \.smoothFade \{ animation: none !important; opacity: 1; \}/);
});
