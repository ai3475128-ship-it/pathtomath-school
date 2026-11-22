import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import katex from 'katex';
import { splitFinancialCondition } from '../src/lib/financial-condition.js';

const require = createRequire(import.meta.url);
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { transformSync } = require('next/dist/build/swc');
const data = JSON.parse(fs.readFileSync('src/lib/ege16-new-tasks.json'));
const schedules = JSON.parse(fs.readFileSync('src/lib/ege16-financial-schedules.json'));
const folder = path.resolve('src/app/math-profile/[taskNumber]');
const originalLoader = require.extensions['.js'];
let FinanceSchedule, EconomicTaskSolution;
try {
  require.extensions['.js'] = (mod, filename) => [path.join(folder, 'FinanceSchedule.js'), path.join(folder, 'EconomicTaskSolution.js')].includes(filename)
    ? mod._compile(transformSync(fs.readFileSync(filename, 'utf8'), { filename, jsc: { parser: { syntax: 'ecmascript', jsx: true }, transform: { react: { runtime: 'classic' } } }, module: { type: 'commonjs' } }).code, filename)
    : originalLoader(mod, filename);
  FinanceSchedule = require(path.join(folder, 'FinanceSchedule.js')).default;
  EconomicTaskSolution = require(path.join(folder, 'EconomicTaskSolution.js')).default;
} finally { require.extensions['.js'] = originalLoader; }

test('each financial question preserves the condition and has a complete responsive table', () => {
  const ids = Array.from({length:36},(_,i)=>1001+i).filter((id)=>![1026,1027,1030,1031].includes(id));
  assert.equal(ids.length, 32);
  for (const task of data.filter((t)=>ids.includes(t.id))) {
    const { opening, terms, question } = splitFinancialCondition(task.wordProblemPrompt);
    assert.equal([opening, ...terms, question].filter(Boolean).join(' '), task.wordProblemPrompt, task.title);
    assert.ok(terms.length >= 1, task.title);
    const schedule = schedules[task.id];
    assert.ok(schedule?.rows.length >= 1, task.title);
    assert.ok(schedule.rows.every((row)=>row.length===schedule.columns.length), task.title);
    for (const row of schedule.rows) for (const cell of row)
      assert.doesNotThrow(()=>katex.renderToString(cell,{throwOnError:true}), `${task.title}: ${cell}`);
    const html=renderToStaticMarkup(React.createElement(FinanceSchedule,{schedule}));
    assert.match(html, /<table/);
    assert.match(html, /sm:hidden/); // stacked, readable values on narrow screens
    assert.doesNotMatch(html, /katex-error/);
  }
  for (const id of [6,16,24,25,39]) {
    const schedule = schedules[id];
    assert.ok(schedule, `old task ${id}`);
    for (const row of schedule.rows) {
      assert.equal(row.length, schedule.columns.length);
      for (const cell of row) assert.doesNotThrow(() => katex.renderToString(cell, {throwOnError:true}));
    }
  }
});

test('numerical debt and deposit rows preserve the order of interest and transactions', () => {
  for (const [id, rate, debt] of [[1001,.1,true],[1002,.1,true],[1003,null,true],[1007,.2,true],[1014,.1,true],[1015,.2,false],[1019,.2,false],[1022,.2,false],[1025,.1,false],[1028,null,false],[1029,.2,false],[1032,null,false],[1034,.25,false],[1036,null,false]]) {
    const s=schedules[id]; let previous=null;
    for (const [index,row] of s.rows.entries()) {
      const values=row.slice(1).map(v=>Number(v.replace('{,}', '.')));
      const [before,after,transfer,end]=values;
      assert.ok(values.every(Number.isFinite), `${id} row ${index+1}`);
      if (previous !== null && !(id===1035 && index===1)) assert.ok(Math.abs(before-previous)<1e-7, `${id} continuity`);
      const actualRate = rate ?? (id===1003 ? (index<2?.1:.2) : id===1028 ? (index===0?.1:.2) : id===1032 ? (index===0?.2:.1) : (index===0?.25:.2));
      assert.ok(Math.abs(after-before*(1+actualRate))<1e-7, `${id} interest`);
      assert.ok(Math.abs(end-(debt ? after-transfer : after+transfer))<1e-7, `${id} transfer`);
      previous=end;
    }
  }
  assert.equal((1000 + 200) * 1.25, Number(schedules[1035].rows[1][3])); // пополнение до начисления процентов
});


test('all new solutions render their text, formulae and a correctly attached schedule', () => {
  for (const task of data) {
    const schedule=schedules[task.id];
    const html=renderToStaticMarkup(React.createElement(EconomicTaskSolution,{task:{...task,financeSchedule:schedule}}));
    assert.match(html,/Решение:/,task.title);
    assert.match(html,/Ответ:/,task.title);
    assert.doesNotMatch(html,/katex-error/,task.title);
    assert.equal(html.includes('<table'),Boolean(schedule),task.title);
  }
});
