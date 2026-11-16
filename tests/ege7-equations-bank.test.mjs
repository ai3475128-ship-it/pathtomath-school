import test from 'node:test';
import assert from 'node:assert/strict';
import katex from 'katex';
import tasks from '../src/lib/ege-equations-tasks.json' with {type:'json'};
import catalog from '../src/lib/task-catalog.json' with {type:'json'};
import {paginateTasks} from '../src/lib/task-pagination.js';
import {isTaskInModule,legacyCandidates} from '../src/lib/task-modules.js';
import {taskModuleForRoute} from '../src/lib/ege-sections.js';

const log=(base,x)=>Math.log(x)/Math.log(base);
// Each function evaluates the original equation at the proposed answer.
const residuals=[
 x=>7*x-19-23, x=>5*x+8-(2*x+29), x=>(x-2)/3+(x+1)/2-7, x=>3/(x-1)-6, x=>(5*x+7)/3-9,
 x=>x*x-49, x=>x*x-5*x+6, x=>(2*x-3)*(x+4), x=>x*x-12*x, x=>1/x+5-9,
 x=>(x+2)**3-64, x=>(1-x*x)**3+27, x=>(x*x-9)/(x-3)-8, x=>(2*x+1)/(x-3)-4, x=>1/(x-1)+1/(x+1)-3/4,
 x=>Math.sqrt(3*x+1)-5, x=>Math.sqrt(x+12)-x, x=>Math.sqrt(3*x-5)-(x-1), x=>Math.sqrt(3*x+7)-Math.sqrt(5*x-1), x=>Math.sqrt(x*x-16)-3,
 x=>Math.sqrt(x)+Math.sqrt(x-5)-5, x=>(3*x+13)**.25-2, x=>Math.cbrt(2*x-7)-3, x=>Math.sqrt(8*x*x-16)-x*x, x=>(1/x+8)**3-27,
 x=>3**x-81, x=>2**(x-3)-16, x=>(1/5)**(x+1)-25, x=>4**(2*x-1)-Math.sqrt(8), x=>9**(x-1)-27,
 x=>2**x+2**(x+1)-24, x=>3**x-3**(x-1)-18, x=>8**(x-1)-4**(2*x+1), x=>16**(2*x+1)-8**(5-x), x=>5**(2*x)-125,
 x=>2**(x*x-1)-8, x=>7*3**x-189, x=>4**x-2**(3*x-6), x=>log(3,x+1)-2, x=>log(2,5*x-1)-4,
 x=>log(5,x)-log(5,125), x=>log(4,x+7)-log(4,3*x-1), x=>log(27,3**(2*x+1))-5/3, x=>log(2,2**(3*x-4))-8, x=>log(3,x)+log(3,9)-4,
 x=>log(5,x)-log(5,25)-1, x=>log(2,x*x)-6, x=>log(3,.25-x)-log(3,x*x-x), x=>Math.sin(Math.PI*(2*x-1)/3), x=>Math.cos(Math.PI*(x-2)/3)-.5,
];
const roots={6:[-7,7],7:[2,3],8:[-4,1.5],9:[0,12],12:[-2,2],15:[-1/3,3],18:[2,3],20:[-5,5],24:[-2,2],36:[-2,2],47:[-8,8]};
test('all 50 equations match their answers and render as valid LaTeX',()=>{
 assert.equal(tasks.length,50);assert.equal(residuals.length,50);
 assert.deepEqual(tasks.map(t=>t.id),Array.from({length:50},(_,i)=>i+1));
 assert.deepEqual(catalog['6'],tasks.map(t=>t.id));assert.equal(taskModuleForRoute('7'),'6');
 for(const [i,t] of tasks.entries()){
  assert.equal(t.title,`Задача ${t.id}`);assert.ok(isTaskInModule('6',t.id));
  assert.match(t.answer,/^-?\d+(?:,\d+)?$/);const answer=Number(t.answer.replace(',','.'));
  const result=residuals[i](answer);assert.ok(Number.isFinite(result)&&Math.abs(result)<1e-8,`Задача ${t.id}: ${result}`);
  const parts=t.equationPrompt.split(/\$([^$]+)\$/g);assert.equal(parts.length,3,`Задача ${t.id}`);
  assert.doesNotThrow(()=>katex.renderToString(parts[1],{throwOnError:true}),`Задача ${t.id}`);
 }
});
test('the selected root obeys the requested minimum, maximum and sign',()=>{
 for(const [id,candidates] of Object.entries(roots)){
  const task=tasks[Number(id)-1],x=Number(task.answer.replace(',','.'));
  for(const root of candidates)assert.ok(Math.abs(residuals[Number(id)-1](root))<1e-8,`Задача ${id}: корень ${root}`);
  const eligible=task.equationPrompt.includes('положительный')?candidates.filter(y=>y>0):candidates;
  const expected=task.equationPrompt.includes('меньший')||task.equationPrompt.includes('наименьший')?Math.min(...eligible):Math.max(...eligible);
  assert.equal(x,expected,`Задача ${id}`);
 }
 const sinRoots=Array.from({length:21},(_,i)=>(3*(i-10)+1)/2).filter(x=>x>0);
 const cosRoots=Array.from({length:21},(_,i)=>[3+6*(i-10),1+6*(i-10)]).flat().filter(x=>x<0);
 assert.equal(Number(tasks[48].answer.replace(',','.')),Math.min(...sinRoots));
 assert.equal(Number(tasks[49].answer.replace(',','.')),Math.max(...cosRoots));
 assert.ok(!Number.isFinite(residuals[12](3))); // excluded denominator
 assert.ok(Number.isNaN(residuals[47](.5))); // excluded logarithm arguments
});
test('public section 7 has three accessible pages and no unrelated legacy progress',()=>{
 assert.equal(paginateTasks(tasks,1).pageCount,3);
 assert.deepEqual(Array.from({length:3},(_,i)=>paginateTasks(tasks,i+1).items).flat(),tasks);
 for(const id of [601,650,700])assert.ok(legacyCandidates(id).every(item=>item.module!=='6'));
});
