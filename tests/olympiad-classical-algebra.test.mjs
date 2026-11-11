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
  assert.deepEqual(tasks.map((task) => task.id).sort((a,b) => a-b), Array.from({length: 20}, (_, i) => i + 1));
  assert.deepEqual(tasks.map((task) => task.title), Array.from({length: 20}, (_, i) => `Задача ${i + 1}`));
  assert.equal(tasks[0].id, 1);
  assert.equal(tasks.at(-2).id, 3);
  assert.equal(tasks.at(-1).id, 18);
  assert.deepEqual(catalog['olympiad-6-intro'], tasks.map((task) => task.id));
  for (const task of tasks) {
    if (task.mathA) assert.doesNotThrow(() => katex.renderToString(task.mathA, {throwOnError: true}), `condition ${task.id}`);
    const html = renderToStaticMarkup(React.createElement(React.Fragment, null, task.textBefore, task.solutionBuilder()));
    assert.match(html, /Решение/);
    assert.match(html, /Ответ:/);
    assert.doesNotMatch(html, /katex-error/, `solution ${task.id}`);
  }
  const last = renderToStaticMarkup(tasks.at(-1).solutionBuilder());
  assert.match(last, /1 способ решения/); assert.match(last, /2 способ решения/); assert.match(last, /наименьш/);
  assert.match(renderToStaticMarkup(tasks[0].solutionBuilder()), /равносильн/);
  assert.match(renderToStaticMarkup(tasks.at(-2).solutionBuilder()), /вектор/);
  assert.match(renderToStaticMarkup(tasks.find((task) => task.id === 19).solutionBuilder()), /n=2/);
  assert.match(renderToStaticMarkup(tasks.find((task) => task.id === 20).solutionBuilder()), /хотя бы одно/);
});

test('requested explanations and method headings are present in the corresponding tasks',()=>{
  const htmlByTitle=(title)=>renderToStaticMarkup(tasks.find((task)=>task.title===`Задача ${title}`).solutionBuilder());
  const first=htmlByTitle(1);
  assert.doesNotMatch(first,/или/);assert.match(first,/\\begin\{array\}/);
  assert.match(htmlByTitle(4),/делитель единицы/);
  assert.doesNotMatch(htmlByTitle(5),/Положим|замен/);
  assert.match(htmlByTitle(6),/симметрический/);assert.match(htmlByTitle(6),/постоянном коэффициенте/);
  assert.doesNotMatch(htmlByTitle(9),/Положим|замен/);
  for(const title of [10,20]){
    const html=htmlByTitle(title);
    assert.match(html,/1 способ решения/);assert.match(html,/2 способ решения/);
    assert.equal((html.match(/font-bold text-black dark:text-white/g)||[]).length,2);
  }
  assert.match(htmlByTitle(11),/возвратное уравнение/);
  assert.match(htmlByTitle(14),/первый кубический корень через/);
  assert.match(htmlByTitle(15),/геометрической прогрессии/);
  assert.match(htmlByTitle(18),/строго возрастает/);
  assert.match(htmlByTitle(19),/сократятся/);
  assert.match(htmlByTitle(20),/общей степени/);
});

test('reworked inequality boundaries and vector signs are correct',()=>{
  const root=(150+2*Math.sqrt(501))/105;
  const f=(x)=>Math.sqrt(x*x+2*x-3)+Math.sqrt(x*x+3*x-4)-5*(x-1);
  assert.equal(f(1),0);assert.ok(Math.abs(f(root))<1e-10);assert.ok(f(root-0.001)>0);assert.ok(f(root+0.001)<0);
  const nested=(x)=>x-Math.sqrt(2+Math.sqrt(2+x));
  assert.equal(nested(2),0);assert.ok(nested(1.99)<0);assert.ok(nested(2.01)>0);
  const x=-2/3,u=[-x,1],v=[x+2,2];
  assert.ok(Math.abs(v[0]-2*u[0])<1e-12);assert.equal(v[1],2*u[1]);
  for(const value of [0.1,0.5,1,2,10]){
    const lhs=(1+value+value**2)*(1+value+value**2+value**3+value**4);
    const rhs=(1+value+value**2+value**3)**2;
    assert.ok(Math.abs((rhs-lhs)-value**3)<1e-7*Math.max(1,rhs));
    const transformed=(value**4-1)**2-(value**3-1)*(value**5-1);
    assert.ok(Math.abs(transformed-value**3*(value-1)**2)<1e-7*Math.max(1,Math.abs(transformed)));
  }
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
