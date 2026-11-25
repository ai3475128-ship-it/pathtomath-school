import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const Module = require('node:module');
const { transformSync } = require('next/dist/build/swc');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const dir = path.resolve('src/app/math-profile/[taskNumber]');
const original = require.extensions['.js'];
const originalCss = require.extensions['.css'];
let tasks;
try {
  require.extensions['.css'] = mod => { mod.exports = new Proxy({}, { get: (_, key) => String(key) }); };
  require.extensions['.js'] = (mod, filename) => {
    if ([path.join(dir, 'section15.js'), path.join(dir, 'InequalityNumberLine.js')].includes(filename)) {
      const code = transformSync(fs.readFileSync(filename, 'utf8'), {
        filename,
        jsc: { parser: { syntax: 'ecmascript', jsx: true }, transform: { react: { runtime: 'classic' } } },
        module: { type: 'commonjs' },
      }).code;
      return mod._compile(code, filename);
    }
    return original(mod, filename);
  };
  tasks = require(path.join(dir, 'section15.js')).section15Tasks;
} finally {
  require.extensions['.js'] = original;
  require.extensions['.css'] = originalCss;
}

test('all 122 solutions and their mathematical labels render without KaTeX errors', () => {
  assert.deepEqual(tasks.map(t => t.id), Array.from({ length: 122 }, (_, i) => i + 1));
  for (const task of tasks) {
    const html = renderToStaticMarkup(task.solutionBuilder());
    assert.ok(html.includes('Ответ:'), `Задача ${task.id}: ответ`);
    assert.ok(!html.includes('katex-error'), `Задача ${task.id}: некорректная формула`);
  }
  const source = fs.readFileSync(path.join(dir, 'section15.js'), 'utf8');
  assert.ok(!source.includes("document.documentElement.classList.contains('dark')"));
});

test('previously incorrect endpoint and domain cases satisfy the original inequalities', () => {
  const log = (x, b) => Math.log(x) / Math.log(b);
  const log2 = Math.log2;
  const cases = [
    [7, x => (log2(2-x)-log2(x+1))/((log2(x*x))**2+log2(x**4)+1) >= 0, [[0, false], [-0.5, true], [0.5, true]]],
    [11, x => log(3*x+1,5)+log(1/(72*x*x)+1,5) >= log(1/(24*x)+1,5), [[-0.1,true],[-0.02,false],[1,true]]],
    [12, x => log(2/x+2,5)-log(x+3,5) <= log((x+6)/(x*x),5), [[-1.5,true],[-2.5,false],[5,true],[10,false]]],
    [14, x => log((x-5)**2*(x+3),4)+1 >= 0.5*log((x-5)**2,2), [[-2,true],[-2.9,false],[0,true],[6,true]]],
    [24, x => (log(x,3)**2-log(x,3))/log(0.5*2**x,0.2) >= 0, [[0.5,true],[2,true],[4,false]]],
    [48, x => log(Math.sqrt(x-3),Math.abs(x-5)) <= 0.25, [[3.5,true],[4.5,true],[5.5,true],[7,false]]],
    [50, x => x*x*log(4-x,243) <= log((x-4)**2,3), [[3,true],[3.1,false],[3.5,true]]],
    [55, x => 2*log(x*Math.SQRT2,7)-log(x/(1-x),7) <= log(8*x*x+1/x-5,7), [[0.1,true],[0.5,false],[0.8,true]]],
    [72, x => 16*5**(1-8/x)-189*20**(-4/x)+25*2**(2-16/x) <= 0, [[-3,true],[-1,false],[3,false],[5,true]]],
    [77, x => (3**Math.abs(x-2)-9)/(5**Math.sqrt(x)-5) >= 0, [[0,true],[0.5,true],[2,false],[5,true]]],
    [89, x => (log2(2*x*x-17*x+35)-1)/log2(x+6) <= 0, [[-5.5,true],[-4,false],[3.2,true],[5.25,true]]],
    [94, x => 8**Math.log10(-1-x) <= (x*x-1)**Math.log10(2), [[-4,false],[-2,true]]],
    [114, x => log(3+x,Math.sqrt(3-x)) <= 2, [[-1,true],[1,false],[2.5,true]]],
    [120, x => 1/(x-Math.SQRT2)**2+3*x*x-2*Math.SQRT2*x+2+2*(-2*x*(Math.SQRT2+1)+(Math.SQRT2+1)**2) <= 2+1e-12, [[Math.SQRT2-1,false],[Math.SQRT2+1,true]]],
    [122, x => Math.sqrt(5*(log2(x+2)-1)/(log2(x+2)+1)) <= log2(x), [[2,false],[3,true]]],
  ];
  for (const [id, predicate, samples] of cases) for (const [x, expected] of samples) assert.equal(predicate(x), expected, `Задача ${id}, x=${x}`);
});

test('system inequalities retain their original domain while showing corrected answers', () => {
  const expected = new Map([
    [62, '\\{0;1\\}'], [63, '\\{8\\}'], [64, '\\{-4\\}'], [65, '\\{-3;0\\}'],
    [75, '(2;3)'], [118, '\\left\\{\\frac14;\\frac13\\right\\}'],
  ]);
  for (const [id, snippet] of expected) {
    const answer = renderToStaticMarkup(tasks[id-1].solutionBuilder()).split('Ответ:').at(-1);
    assert.ok(answer.includes(snippet), `Задача ${id}: исправленный ответ`);
  }
});

test('interval diagrams use valid boundaries and preserve isolated solutions', () => {
  const diagrams = new Map();
  function visit(node, collected) {
    if (!node || typeof node !== 'object') return;
    if (node.type?.name === 'InequalityNumberLine') collected.push(node.props);
    React.Children.forEach(node.props?.children, child => visit(child, collected));
  }
  for (const task of tasks) {
    const collected = [];
    visit(task.solutionBuilder(), collected);
    diagrams.set(task.id, collected);
    for (const diagram of collected) {
      assert.ok(Array.isArray(diagram.points));
      for (const [start, end] of diagram.selected) {
        assert.ok(Number.isInteger(start) && Number.isInteger(end) && start >= 0 && start < end && end <= diagram.points.length + 1, `Задача ${task.id}: границы интервала`);
      }
    }
  }
  assert.equal([...diagrams.values()].flat().length, 128);
  const example = diagrams.get(9).at(-1);
  assert.deepEqual(example.points.map(({ label, closed }) => [label, closed]), [['0', false], ['1', false], ['27', true], ['81', false]]);
  assert.deepEqual(example.selected, [[1, 2], [4, 5]]);
  assert.equal(diagrams.get(92).length, 2);
  assert.deepEqual(diagrams.get(92).at(-1).selected, [[1, 2]]);
  const system = diagrams.get(100)[0];
  assert.deepEqual(system.points.map(({ label, closed }) => [label, closed]), [['-5', true], ['-4', true], ['8', true]]);
  assert.deepEqual(system.selected, [[1, 2]]);
  const isolated = diagrams.get(116).at(-1);
  assert.deepEqual(isolated.points.map(({ label, closed }) => [label, closed]), [['0', true], ['1', true], ['3', true]]);
  assert.deepEqual(isolated.selected, [[2, 3]]);
});
