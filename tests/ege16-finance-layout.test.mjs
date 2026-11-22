import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
import path from 'node:path';
import katex from 'katex';
import {splitFinancialCondition} from '../src/lib/financial-condition.js';
const require=createRequire(import.meta.url),React=require('react'),{renderToStaticMarkup}=require('react-dom/server'),{transformSync}=require('next/dist/build/swc');
const data=JSON.parse(fs.readFileSync('src/lib/ege16-new-tasks.json'));
const schedules=JSON.parse(fs.readFileSync('src/lib/ege16-financial-schedules.json'));
const folder=path.resolve('src/app/math-profile/[taskNumber]'),previous=require.extensions['.js'];
let FinanceSchedule,EconomicTaskSolution;
try{
 require.extensions['.js']=(mod,file)=>[path.join(folder,'FinanceSchedule.js'),path.join(folder,'EconomicTaskSolution.js')].includes(file)
   ?mod._compile(transformSync(fs.readFileSync(file,'utf8'),{filename:file,jsc:{parser:{syntax:'ecmascript',jsx:true},transform:{react:{runtime:'classic'}}},module:{type:'commonjs'}}).code,file):previous(mod,file);
 FinanceSchedule=require(path.join(folder,'FinanceSchedule.js')).default;
 EconomicTaskSolution=require(path.join(folder,'EconomicTaskSolution.js')).default;
}finally{require.extensions['.js']=previous;}

test('financial conditions are preserved and every loan or deposit has a readable gridded table',()=>{
  const financial=data.slice(0,48);assert.equal(Object.keys(schedules).length,53);
  for(const task of financial){
    const {opening,terms,question}=splitFinancialCondition(task.wordProblemPrompt);
    assert.equal([opening,...terms,question].filter(Boolean).join(' '),task.wordProblemPrompt,task.title);
    assert.ok(terms.length>=1,task.title);const schedule=schedules[task.id];
    assert.ok(schedule?.rows.length>=2,task.title);
    for(const row of schedule.rows){assert.equal(row.length,schedule.columns.length,task.title);for(const cell of row)assert.doesNotThrow(()=>katex.renderToString(cell,{throwOnError:true}),`${task.title}: ${cell}`);}
    const html=renderToStaticMarkup(React.createElement(FinanceSchedule,{schedule}));
    assert.match(html,/<table/);assert.match(html,/border:1px solid currentColor/);assert.match(html,/padding:10px 12px/);assert.match(html,/sm:hidden/);assert.doesNotMatch(html,/katex-error/);
  }
  for(const id of [6,16,24,25,39]){
    const schedule=schedules[id];assert.ok(schedule);
    for(const row of schedule.rows){assert.equal(row.length,schedule.columns.length);for(const cell of row)assert.doesNotThrow(()=>katex.renderToString(cell,{throwOnError:true}));}
  }
});

test('every solution renders its full text and only financial tasks have schedules',()=>{
  for(const [index,task] of data.entries()){
    const schedule=schedules[task.id];const html=renderToStaticMarkup(React.createElement(EconomicTaskSolution,{task:{...task,financeSchedule:schedule}}));
    assert.match(html,/Решение:/,task.title);assert.match(html,/Ответ:/,task.title);assert.doesNotMatch(html,/katex-error/,task.title);
    assert.equal(html.includes('<table'),index<48,task.title);
  }
});
