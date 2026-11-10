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
