import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import katex from 'katex';
import tasks from '../src/lib/graph-analysis-tasks.json' with {type:'json'};
import catalog from '../src/lib/task-catalog.json' with {type:'json'};
import {paginateTasks} from '../src/lib/task-pagination.js';
import {isTaskInModule,legacyCandidates} from '../src/lib/task-modules.js';
import {taskModuleForRoute} from '../src/lib/ege-sections.js';
const key=['13','9','4','-8','20','-55','6','7','0,5','0,1','8','6','-18','20','25','2,25','64','32','-3','-4'];
test('forty graph problems are registered, typeset and ordered in section 11',()=>{
 assert.equal(tasks.length,40);assert.deepEqual(tasks.map(t=>t.id),Array.from({length:40},(_,i)=>i+1));
 assert.equal(taskModuleForRoute('11'),'11');assert.deepEqual(catalog['11'],tasks.map(t=>t.id));
 for(const [i,t] of tasks.entries()){
  assert.ok(isTaskInModule('11',t.id));assert.ok(t.graphPrompt.length>50);assert.ok(t.answer);
  if(i<20)assert.equal(t.answer,key[i]);
  assert.equal((t.graphPrompt.match(/\$/g)||[]).length%2,0);
  for(const m of t.graphPrompt.matchAll(/\$([^$]+)\$/g))assert.doesNotThrow(()=>katex.renderToString(m[1],{throwOnError:true}),`task ${t.id}: ${m[1]}`);
  const d=t.graphDiagram,b=fs.readFileSync('public'+d.src);
  assert.deepEqual([...b.subarray(0,8)],[137,80,78,71,13,10,26,10]);
  assert.equal(b.readUInt32BE(16),d.sheetWidth);assert.equal(b.readUInt32BE(20),d.sheetHeight);
  assert.ok(d.width>=300&&d.height>=300&&d.y>=0&&d.y+d.height<=d.sheetHeight);
  assert.equal(d.y,((i%20)*d.height));
 }
});
test('pages and stored progress stay isolated',()=>{
 assert.equal(paginateTasks(tasks,1).pageCount,2);
 assert.deepEqual(paginateTasks(tasks,1).items.concat(paginateTasks(tasks,2).items),tasks);
 for(const n of [1101,1120,1140])assert.ok(legacyCandidates(n).every(x=>x.module!=='11'));
});
test('additional graph answers agree with their reconstructed curves',()=>{
 const answer=n=>Number(tasks[n-1].answer.replace(',','.'));const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-9,`${a} != ${b}`);
 close(answer(21),-3);close(answer(22),-1);close(-2-10/(answer(23)-4),8);
 close(answer(24),10);close(answer(25),2*Math.tan(Math.atan(2))-3);
 close(answer(26),-4*Math.sin(-10*Math.PI/4)-1);close(answer(27),Math.log(27)/Math.log(3)-1);
 close(2+Math.log(-1/answer(28))/Math.log(2),5);
 close(answer(29),3*0+5);close(answer(30),-4*6+9);
 close(answer(31),-2);close(answer(32),2);close(answer(33),4);close(answer(34),-2);
 close(answer(35),25);close(answer(36),27);close((1/3)**(answer(37)-2),27);close(answer(38),16);
 close(Math.sqrt(answer(39)/3),Math.sqrt(answer(39)-7));close(Math.sqrt(answer(40)/5),Math.sqrt(answer(40)-12));
});
