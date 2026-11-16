import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import katex from 'katex';
import tasks from '../src/lib/derivative-bank-tasks.json' with {type:'json'};
import catalog from '../src/lib/task-catalog.json' with {type:'json'};
import {paginateTasks} from '../src/lib/task-pagination.js';
import {isTaskInModule,legacyCandidates} from '../src/lib/task-modules.js';
import {taskModuleForRoute} from '../src/lib/ege-sections.js';

const sourceAnswers={
 '9.1':['3','4','4','2','5','5','7','6'],
 '9.2':['-0,2','-0,4','-3','-2,5','-1,5','-1,4','-1,25','-1,25','-0,25','0,2','0,25','0,4','1,2','1,4','1,4','1,5','1,5','1,6','1,8'],
 '9.3':['5','5','2','1','2','3'], '9.4':['-2','-2','-1','4','3','2'], '9.5':['4','-1','4','-1','2','-2'],
 '9.6':['1','5','5','4','2','4','1','4'], '9.7':['3','-5','3','-7','-8','2'],
 '9.8':['6','2','4','4','4','2','5','6'], '9.9':['4','2','0','5','3','-1'],
};
function sourceAnswer(ref){const parts=ref.split('.'),group=parts.slice(0,2).join('.'),index=parts[2]?Number(parts[2]):0;return sourceAnswers[group]?.[index];}
test('all problems and answers preserve the supplied sources, with formulas and images intact',()=>{
 assert.equal(tasks.length,78);assert.deepEqual(tasks.map(t=>t.id),Array.from({length:78},(_,i)=>i+1));
 assert.equal(taskModuleForRoute('9'),'8');assert.deepEqual(catalog['8'],tasks.map(t=>t.id));
 for(const t of tasks){
  assert.ok(isTaskInModule('8',t.id));assert.ok(t.derivativePrompt.length>70,`Задача ${t.id}: условие`);
  assert.equal(t.answer,t.id>=10&&t.id<=14?['2','3','8','4','2'][t.id-10]:sourceAnswer(t.sourceNumber),`Задача ${t.id}: ответ`);
  const parts=t.derivativePrompt.split(/\$([^$]+)\$/g);assert.equal((t.derivativePrompt.match(/\$/g)||[]).length%2,0);
  for(let i=1;i<parts.length;i+=2)assert.doesNotThrow(()=>katex.renderToString(parts[i],{throwOnError:true}),`Задача ${t.id}: формула ${parts[i]}`);
  const image=t.derivativeDiagram,buf=fs.readFileSync('public'+image.src);
  assert.deepEqual([...buf.subarray(0,8)],[137,80,78,71,13,10,26,10]);
  assert.equal(buf.readUInt32BE(16),image.sheetWidth);assert.equal(buf.readUInt32BE(20),image.sheetHeight);
  assert.ok(image.y>=0&&image.y+image.height<=image.sheetHeight&&image.width<=image.sheetWidth,`Задача ${t.id}: график вне изображения`);
  assert.ok(image.width>=250&&image.height>=260,`Задача ${t.id}: изображение`);
 }
});
test('all four pages preserve task order and progress cannot import unrelated legacy IDs',()=>{
 assert.equal(paginateTasks(tasks,1).pageCount,4);
 assert.deepEqual(Array.from({length:4},(_,i)=>paginateTasks(tasks,i+1).items).flat(),tasks);
 for(const id of [801,850,878,900])assert.ok(legacyCandidates(id).every(candidate=>candidate.module!=='8'));
});
