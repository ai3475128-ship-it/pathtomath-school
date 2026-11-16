import test from 'node:test';
import assert from 'node:assert/strict';
import katex from 'katex';
import tasks from '../src/lib/word-problem-tasks.json' with {type:'json'};
import catalog from '../src/lib/task-catalog.json' with {type:'json'};
import {paginateTasks} from '../src/lib/task-pagination.js';
import {isTaskInModule,legacyCandidates} from '../src/lib/task-modules.js';
import {taskModuleForRoute} from '../src/lib/ege-sections.js';
const sourceAnswers=['120','50','50','80','10','60','15','20','55','48','90','47,5','15','8','15','10','750','350','65','50','15','4','14','18','8','10','6','4','56','15','18','10','4','3','728','96','19','14','22','12','20','10','11','9','4','2','18','15'];
const answer=n=>Number(tasks[n-1].answer.replace(',','.'));
const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-9,`${a} != ${b}`);
test('all 80 exercises remain complete, ordered and available in section 10',()=>{
 assert.equal(tasks.length,80);assert.deepEqual(tasks.map(t=>t.id),Array.from({length:80},(_,i)=>i+1));
 assert.equal(taskModuleForRoute('10'),'10');assert.deepEqual(catalog['10'],tasks.map(t=>t.id));
 for(const [i,t] of tasks.entries()){
  assert.ok(isTaskInModule('10',t.id));assert.ok(t.wordProblemPrompt.length>60);assert.ok(t.answer);
  assert.ok(!/Прототип|Аналог|Источник:|Ответ:/.test(t.wordProblemPrompt));
  if(i<48)assert.equal(t.answer,sourceAnswers[i]);
  assert.equal((t.wordProblemPrompt.match(/\$/g)||[]).length%2,0);
  for(const m of t.wordProblemPrompt.matchAll(/\$([^$]+)\$/g))assert.doesNotThrow(()=>katex.renderToString(m[1],{throwOnError:true}));
 }
});
test('pagination and legacy progress preserve the new section boundaries',()=>{
 assert.equal(paginateTasks(tasks,1).pageCount,4);
 assert.deepEqual(Array.from({length:4},(_,i)=>paginateTasks(tasks,i+1).items).flat(),tasks);
 for(const n of [1001,1050,1080])assert.ok(legacyCandidates(n).every(x=>x.module!=='10'));
});
test('answers for additional prototypes satisfy the original quantitative conditions',()=>{
 close(answer(49)*(60+80),560);close(answer(50),55*480/(55+65));
 close(120/(answer(51)-40)-120/answer(51),4);
 close(40/(answer(52)-20)-15/(answer(52)-15),3);
 close((80-answer(53))*40/60,14);close((112-answer(54))*20/60,17);
 close(60/answer(55)-60/(answer(55)+3),1);close(60/(answer(56)-2)-60/answer(56),1);
 close(answer(57)*12/60,1.2);close(answer(58)*8/60,.88);
 close(3/15+(answer(59)-3)*2/15,1);close(4/20+(answer(60)-4)*2/20,1);
 close(answer(61)/60*(1/3+1/6+1/4)/2,1);close(answer(62)/60*(1/6+1/12+1/8)/2,1);
 close(answer(63)/6-answer(63)/7,1/3);close(answer(64)/15-answer(64)/16,1/5);
 close(300/answer(65)-300/(answer(65)+5),3);close(480/answer(66)-480/(answer(66)+10),4);
 close((1+answer(67)/100),7*.75/5);close(1-answer(68)/100,6*1.28/8);
 close(answer(69)*.1,20*.95);close(answer(70)*.1,12*.95);
 close(1-(answer(71)/100)**2,.51);close(1-(answer(72)/100)**2,.64);
 close(answer(73),1e6*(1-.19-55000/200000-.24));close(answer(74),1.1e6*(1-.26-.25-.26));
 close(20000*(1-answer(75)/100)**2,15842);close(19800*(1-answer(76)/100)**2,16038);
 close(answer(77),(10*.18)/(10+5)*100);close(answer(78),(8*.24)/(8+4)*100);
 close(answer(79),(3*.20+12*.25)/15*100);close(answer(80),(3*.25+12*.15)/15*100);
});
