import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import catalog from '../src/lib/task-catalog.json' with { type: 'json' };
const require = createRequire(import.meta.url);
const { transformSync } = require('next/dist/build/swc');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const katex = require('katex');
const target = path.resolve('src/app/math-profile/sections-olympiad-intro/olympiad-intro-06.js');
const originalLoader = require.extensions['.js'];
let tasks;
try {
  require.extensions['.js'] = (mod, filename) => filename === target
    ? mod._compile(transformSync(fs.readFileSync(filename, 'utf8'), { filename, jsc: { parser: { syntax: 'ecmascript', jsx: true }, transform: { react: { runtime: 'classic' } } }, module: { type: 'commonjs' } }).code, filename)
    : originalLoader(mod, filename);
  tasks = require(target).olympiadIntro06Tasks;
} finally { require.extensions['.js'] = originalLoader; }

test('all supplied tasks and complete solutions render without KaTeX errors', () => {
  assert.deepEqual(tasks.map((task) => task.id), Array.from({length: 18}, (_, i) => i + 1));
  assert.deepEqual(catalog['olympiad-6-intro'], tasks.map((task) => task.id));
  for (const task of tasks) {
    assert.doesNotThrow(() => katex.renderToString(task.mathA, {throwOnError: true}), `condition ${task.id}`);
    const html = renderToStaticMarkup(React.createElement(React.Fragment, null, task.textBefore, task.solutionBuilder()));
    assert.match(html, /Решение/);
    assert.match(html, /Ответ:/);
    assert.doesNotMatch(html, /katex-error/, `solution ${task.id}`);
  }
  const last = renderToStaticMarkup(tasks[17].solutionBuilder());
  assert.match(last, /Способ 1/); assert.match(last, /Способ 2/); assert.match(last, /наименьшее общее кратное/);
});

test('key answers and boundary cases satisfy the original conditions', () => {
  const near = (a,b) => assert.ok(Math.abs(a-b) < 1e-9, `${a} ≠ ${b}`);
  for (const x of [-17/5, 11/3]) near(Math.abs(4*x-Math.abs(x-2)+3),16);
  for (const [x,y] of [[3,-0.5],[-0.5,3]]) near(Math.abs(1-x-y-x*y)+Math.abs(2*x*x*y*y-2*x*x*y-2*x*y*y+2*x*y-9)+Math.abs(x*y)/(x*y),-1);
  for (const x of [0,2,13,15]) near(Math.cbrt(15*x+1-x*x)+Math.cbrt(x*x-15*x+27),4);
  const cutoff = (150+2*Math.sqrt(501))/105;
  const f = (x) => Math.sqrt(x*x+2*x-3)+Math.sqrt(x*x+3*x-4)-5*(x-1);
  near(f(1),0); near(f(cutoff),0); assert.ok(f(cutoff-0.01)>0); assert.ok(f(cutoff+0.01)<0);
  near(Math.sqrt(4/9+1)+Math.sqrt(4/9-8/3+8),Math.sqrt(13));
  for (const [a,b] of [[-1,2],[0.5+Math.sqrt(3),-1+Math.sqrt(3)/2],[0.5-Math.sqrt(3),-1-Math.sqrt(3)/2]]) {
    near(a**3-3*a*b*b,11); near(b**3-3*a*a*b,2); near(a*a+b*b,5);
  }
});
