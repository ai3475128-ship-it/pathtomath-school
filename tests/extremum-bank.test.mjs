import test from 'node:test';
import assert from 'node:assert/strict';
import katex from 'katex';
import tasks from '../src/lib/extremum-bank-tasks.json' with {type:'json'};
import catalog from '../src/lib/task-catalog.json' with {type:'json'};
import {paginateTasks} from '../src/lib/task-pagination.js';
import {isTaskInModule,legacyCandidates} from '../src/lib/task-modules.js';
import {taskModuleForRoute} from '../src/lib/ege-sections.js';

test('the 100 approved problems are ordered, registered and typeset',()=>{
 const answers='0 -3 1 9 1,6 -2 2 0 44 -8 7 -1 -1 3 697 16 -14 42 -10 6 1 2 0 -2 3 2,5 9 0 3 0 36 25 13 9 16 1 4 3 3 1 6 -2 -77 9 -83 2 -4 -5 6 1 1 2 1 1 -8,9 1 1 2 -2 8 -6 8 3 3 2 7 -8,25 1 -1 -4 3 3 2 3 0 0 2 0 -1 1 0,75 41 18 12 12 1 0,5 -0,25 1,25 1,125 0 0,5 1 3 -5 4 0,5 3 3 1'.split(' ');
 assert.equal(tasks.length,100);
 assert.deepEqual(tasks.map(t=>t.id),Array.from({length:100},(_,i)=>i+1));
 assert.deepEqual(tasks.map(t=>t.answer),answers);
 assert.equal(taskModuleForRoute('12'),'12');
 assert.deepEqual(catalog['12'],tasks.map(t=>t.id));
 for(const task of tasks){
  assert.ok(isTaskInModule('12',task.id));
  assert.match(task.extremumPrompt,/^Найдите/);
  for(const expression of [task.extremumExpression,task.extremumMobileExpression].filter(Boolean))
   assert.doesNotThrow(()=>katex.renderToString(expression,{throwOnError:true}),`task ${task.id}`);
  if(task.extremumCondition){
   assert.equal((task.extremumCondition.match(/\$/g)||[]).length,2);
   for(const m of task.extremumCondition.matchAll(/\$([^$]+)\$/g))
    assert.doesNotThrow(()=>katex.renderToString(m[1],{throwOnError:true}),`task ${task.id} condition`);
  }
 }
 assert.deepEqual(tasks.filter(t=>t.extremumMobileExpression).map(t=>t.id),[11,53,81,84,85,92]);
});
test('pagination and legacy progress stay isolated',()=>{
 assert.equal(paginateTasks(tasks,1).pageCount,5);
 assert.deepEqual(Array.from({length:5},(_,i)=>paginateTasks(tasks,i+1).items).flat(),tasks);
 for(const n of [1201,1250,1300]) assert.ok(legacyCandidates(n).every(x=>x.module!=='12'));
});
