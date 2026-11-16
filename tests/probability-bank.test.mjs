import test from 'node:test';
import assert from 'node:assert/strict';
import katex from 'katex';
import tasks from '../src/lib/probability-tasks.json' with { type: 'json' };
import catalog from '../src/lib/task-catalog.json' with { type: 'json' };
import { paginateTasks } from '../src/lib/task-pagination.js';
import { isTaskInModule, legacyCandidates } from '../src/lib/task-modules.js';
import { taskModuleForRoute } from '../src/lib/ege-sections.js';

const div = pairs => pairs.map(([a, b]) => a / b);
const round = x => Math.round((x + Number.EPSILON) * 100) / 100;
const twoDice = predicate => {
  let count = 0;
  for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) if (predicate(a, b)) count++;
  return count / 36;
};
const conditionalDice = (excluded, sum) => {
  let total = 0, favorable = 0;
  for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) {
    if (a !== excluded && b !== excluded) { total++; if (a + b === sum) favorable++; }
  }
  return favorable / total;
};
const combinations = (n, k) => k === 2 ? n * (n - 1) / 2 : 0;
const separateChoices = (n, k) => Array.from({length:k}, (_, i) => (n-i)/n).reduce((a,b) => a*b, 1);
const groupedExpected = [
  [[550,3,110],[500,4,90],[480,3,120],[600,4,120]].map(([n,k,m]) => (n-k*m)/n),
  div([[3,5],[4,8],[5,10],[6,15]]), div([[3,10],[6,15],[9,20],[9,20]]),
  div([[5,25],[10,40],[6,30],[5,25]]),
  [[50,20,4],[60,24,4],[48,18,3],[80,32,4]].map(([n,first,days])=>(n-first)/(days-1)/n),
  div([[12,2000],[9,3000],[4,500],[10,1250]]),
  div([[1988,2000],[2991,3000],[496,500],[1240,1250]]),
  div([[24,80],[30,50],[30,40],[15,60]]), div([[5,50],[12,60],[12,48],[4,40]]),
  div([[7,20],[10,50],[6,30],[5,25]]), div([[36,40],[45,50],[20,25],[60,80]]),
  div([[2,5],[3,8],[4,10],[5,20]]), div([[8,40],[12,60],[10,80],[10,100]]),
  div([[10,50],[20,80],[20,100],[15,60]]), div([[10,100],[10,80],[10,50],[10,40]]),
  div([[4,8],[2,5],[3,6],[5,5]]), div([[10,40],[20,50],[15,60],[20,80]]),
  div([[50,200],[40,160],[30,120],[25,100]]), div([[5,20],[4,16],[3,12],[6,24]]),
  div([[10,100],[20,200],[8,80],[5,50]]),
  [0.5,0.5,0.5,0.5], [0.25,0.25,0.25,0.25], [0.5,0.5,0.5,0.5], [0.25,0.25,0.25,0.25],
  [1/8,1/8,1/8,1/8], [1/8,1/8,1/8,1/8], [0.5,0.5,0.5,0.5],
  [[4,7],[3,6,12],[5,6],[2,7,10]].map((s,i)=>{const x=twoDice((a,b)=>s.includes(a+b)); return i%2 ? round(x) : x;}),
  [twoDice((a,b)=>a*b%2===1),twoDice((a,b)=>a*b%2===0),twoDice((a,b)=>a%2===1&&b%2===1),twoDice((a,b)=>a%2===0&&b%2===0)],
  [[6,10],[1,4],[2,10],[5,3]].map(([e,s])=>conditionalDice(e,s)),
  [0.25,0.25,0.25,0.25], div([[4,20],[3,15],[6,24],[6,30]]), div([[1,4],[1,5],[1,8],[1,10]]),
  div([[2,5],[2,8],[2,10],[2,20]]), [[2,5],[3,5],[4,5],[3,6]].map(([m,n])=>combinations(m,2)/combinations(n,2)),
  [0.83,0.94,0.72,0.61].map(p=>1-p), [0.86-0.73,0.75-0.63,0.81-0.58,0.68-0.41],
  [0.94-0.56,0.88-0.43,0.76-0.31,0.91-0.67], [0.20+0.12,0.35+0.25,0.18+0.42,0.27+0.33],
  [1-0.20-0.12,1-0.35-0.25,1-0.18-0.42,1-0.27-0.33],
  [0.55+0.40-0.20,0.62+0.31-0.18,0.48+0.37-0.15,0.71+0.29-0.22],
  [[100,3],[200,8],[50,2],[125,5]].map(([a,b])=>round(a/(a+b))),
  [500*0.08,200*0.15,1000*0.012,400*0.025], div([[6,12],[3,12],[3,12],[6,12]]),
  div([[5,20],[12,30],[10,40],[20,50]]), div([[15,60],[10,40],[20,80],[6,30]]),
  [[[15,20],[24,30],[6,10]],[[8,10],[15,20],[21,30]],[[20,25],[16,20],[9,15]],[[30,40],[18,20],[7,10]]].map(group=>round(div(group).reduce((a,b)=>a+b,0)/3)),
  [[6,4],[8,5],[10,6],[8,4]].map(([n,k])=>round(separateChoices(n,k))),
  [0.8*0.5,0.6*0.75,0.9*0.4,0.7*0.8], [[8,15],[10,19],[12,23],[15,29]].map(([a,b])=>round(a/b)),
];

test('all 200 exercises are in section 4 with mathematically checked answers', () => {
  assert.equal(groupedExpected.length, 50);
  const expected = groupedExpected.flat();
  assert.equal(expected.length, 200);
  assert.equal(taskModuleForRoute('4'), '4');
  assert.deepEqual(tasks.map(t => t.id), Array.from({length: 200}, (_, i) => i + 1));
  assert.deepEqual(catalog['4'], tasks.map(t => t.id));
  for (const [i,t] of tasks.entries()) {
    assert.ok(isTaskInModule('4', t.id));
    assert.ok(t.probabilityPrompt.length > 50);
    assert.match(t.answer, /^\d+(?:,\d+)?$/);
    assert.ok(Math.abs(Number(t.answer.replace(',', '.')) - expected[i]) < 1e-9, `Задача ${t.id}: ${t.answer}, ожидается ${expected[i]}`);
    const parts = t.probabilityPrompt.split(/\$([^$]+)\$/g);
    assert.equal((t.probabilityPrompt.match(/\$/g) || []).length % 2, 0);
    for (let n = 1; n < parts.length; n += 2) assert.doesNotThrow(() => katex.renderToString(parts[n], {throwOnError: true}), `Задача ${t.id}`);
  }
});

test('tasks are reachable over ten pages, and cannot inherit unrelated legacy progress', () => {
  assert.equal(paginateTasks(tasks, 1).pageCount, 10);
  assert.deepEqual(Array.from({length:10}, (_,i)=>paginateTasks(tasks,i+1).items).flat(),tasks);
  for (const number of [401,450,500,550,600]) assert.ok(legacyCandidates(number).every(candidate => candidate.module !== '4'));
});

test('source ambiguities and incorrect answers are corrected', () => {
  assert.match(tasks[4].probabilityPrompt, /3 мальчика/);
  for (const id of [125,127,128]) assert.match(tasks[id-1].probabilityPrompt, /одного соперника/);
  assert.deepEqual([169,170,172].map(id=>tasks[id-1].answer), ['40','30','10']);
  assert.match(tasks[140].probabilityPrompt, /события, противоположного/);
});
