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
const katex = require('katex');
const sectionDir = path.resolve('src/app/math-profile/[taskNumber]');
const originalLoader = require.extensions['.js'];
const target = path.join(sectionDir, 'ege-optimization.js');
let tasks;
try {
  require.extensions['.js'] = (mod, filename) => {
    if (filename === target || filename === path.join(sectionDir, 'DerivativeAxis.js')) {
      const code = transformSync(fs.readFileSync(filename, 'utf8'), {
        filename,
        jsc: { parser: { syntax: 'ecmascript', jsx: true }, transform: { react: { runtime: 'classic' } } },
        module: { type: 'commonjs' },
      }).code;
      return mod._compile(code, filename);
    }
    return originalLoader(mod, filename);
  };
  tasks = require(target).egeOptimizationTasks;
} finally {
  require.extensions['.js'] = originalLoader;
}

test('all PDF exercises render their conditions, solutions, formulas and derivative diagrams', () => {
  assert.deepEqual(tasks.map(task => task.id), Array.from({length:14}, (_, i) => i + 1));
  for (const task of tasks) {
    const math = katex.renderToString(task.mathA, { throwOnError: true });
    const html = renderToStaticMarkup(React.createElement(React.Fragment, null, task.textBefore, task.textAfter, task.solutionBuilder()));
    assert.ok(math.includes('katex'), `Задача ${task.id}: формула условия`);
    assert.ok(html.includes('Подробный разбор и ход решения'), `Задача ${task.id}: решение`);
    assert.ok(html.includes('Ответ:'), `Задача ${task.id}: ответ`);
    assert.ok(html.includes('Схема производной:'), `Задача ${task.id}: ось`);
    assert.ok(!html.includes('katex-error'), `Задача ${task.id}: ошибка формулы`);
    const expected = task.id === 4 || task.id === 7 ? 'слева −, справа +' : 'слева +, справа −';
    assert.ok(html.includes(expected), `Задача ${task.id}: знаки производной`);
  }
});
