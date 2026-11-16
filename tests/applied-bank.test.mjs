import test from 'node:test';
import assert from 'node:assert/strict';
import katex from 'katex';
import tasks from '../src/lib/applied-tasks.json' with {type:'json'};
import catalog from '../src/lib/task-catalog.json' with {type:'json'};
import {paginateTasks} from '../src/lib/task-pagination.js';
import {isTaskInModule,legacyCandidates} from '../src/lib/task-modules.js';
import {taskModuleForRoute} from '../src/lib/ege-sections.js';

const sourceAnswers=['44','25','45','126','17','12','5','18','301','151','315','411','36','45','3','6','24','2,5','45','12','25','10','1,8','1,4','3','8','24000','4900','0,7','0,5','0,18','0,045','7000','8000','8','8','90','60','16','6','11,2','20','30','5','7','2'];
test('all supplied problems are registered in section 9 in order with readable mathematics',()=>{
 assert.equal(tasks.length,68);assert.deepEqual(tasks.map(t=>t.id),Array.from({length:68},(_,i)=>i+1));
 assert.deepEqual(catalog['9'],tasks.map(t=>t.id));assert.equal(taskModuleForRoute('9'),'9');
 tasks.forEach((t,i)=>{
  assert.ok(isTaskInModule('9',t.id));assert.ok(t.probabilityPrompt.length>100);assert.ok(t.answer);
  if(i<46)assert.equal(t.answer,sourceAnswers[i]);
  for(const content of [t.probabilityPrompt,t.answer]){
   assert.equal((content.match(/\$/g)||[]).length%2,0);
   for(const m of content.matchAll(/\$([^$]+)\$/g))assert.doesNotThrow(()=>katex.renderToString(m[1],{throwOnError:true}),`task ${t.id}: ${m[1]}`);
  }
 });
});
test('page order and legacy progress remain isolated',()=>{
 assert.equal(paginateTasks(tasks,1).pageCount,4);
 assert.deepEqual(Array.from({length:4},(_,i)=>paginateTasks(tasks,i+1).items).flat(),tasks);
 for(const id of [901,950,968])assert.ok(legacyCandidates(id).every(candidate=>candidate.module!=='9'));
});
test('nonstandard source problems retain mathematically valid answers',()=>{
 assert.equal(tasks[50].answer,'$\\frac{125}{6}$');
 assert.equal(tasks[58].answer,'таких значений нет');
 assert.ok((9+2*3)*10**2/2>625);
 assert.ok(Math.abs(0.65-0.28/21**(8/15)-0.595)<0.0005);
});
