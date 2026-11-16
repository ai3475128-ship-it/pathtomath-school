import test from 'node:test';
import assert from 'node:assert/strict';
import katex from 'katex';
import tasks from '../src/lib/advanced-probability-tasks.json' with {type:'json'};
import catalog from '../src/lib/task-catalog.json' with {type:'json'};
import {paginateTasks} from '../src/lib/task-pagination.js';
import {isTaskInModule,legacyCandidates} from '../src/lib/task-modules.js';
import {taskModuleForRoute} from '../src/lib/ege-sections.js';

const round=x=>Math.round((x+1e-12)*100)/100;
const choose=(n,k)=>{let x=1;for(let i=1;i<=k;i++)x=x*(n-i+1)/i;return x;};
const binom=(n,k,p)=>choose(n,k)*p**k*(1-p)**(n-k);
const conditional=(limit,target,k)=>{
  let numerator=0,total=0;
  function visit(sum,n,p){if(sum>limit){if(sum===target){total+=p;if(n===k)numerator+=p;}return;}for(let d=1;d<=6;d++)visit(sum+d,n+1,p/6);}
  visit(0,0,1);return round(numerator/total);
};
const values={};
function add(first,items){items.forEach((x,i)=>values[first+i]=x);}
add(1,[.83,.91,.76,.64].map(x=>1-x));
add(5,[.965,.94,.92,.875].map(x=>1-x));
add(9,[.74-.67,.8-.75,.72-.6,.69-.58]);
add(13,[.95+.82-1,.93+.76-1,.89+.68-1,.96+.71-1]);
add(17,[[.3,.12],[.25,.15],[.35,.18],[.2,.09]].map(([p,q])=>1-2*p+q));
add(21,[[.3,.18],[.35,.12],[.25,.1],[.4,.22]].map(([p,q])=>2*p-2*q));
add(25,[[.55,.4,.2],[.62,.31,.18],[.48,.37,.15],[.71,.29,.22]].map(([a,b,c])=>a+b-c));
add(29,[[.9,.6,.5,.7],[.8,.7,.6,.5],[.75,.8,.4,.6],[.85,.65,.7,.5]].map(([a,b,c,d])=>a*b*(c+d-c*d)));
add(49,[[.02,.99,.01],[.03,.95,.02],[.05,.9,.01],[.04,.98,.03]].map(([p,t,f])=>p*t+(1-p)*f));
const pairs=[[.8,.9],[.7,.6],[.85,.75],[.9,.5]];
add(57,pairs.map(([a,b])=>a*b));add(61,pairs.map(([a,b])=>(1-a)*(1-b)));add(65,pairs.map(([a,b])=>1-(1-a)*(1-b)));add(69,pairs.map(([a,b])=>a*(1-b)+b*(1-a)));
add(73,[.3,.4,.2,.5].map(p=>p**3));
add(77,[[2,.3],[3,.2],[4,.1],[2,.25]].map(([n,p])=>1-p**n));
add(81,[[5,3,.8],[3,2,.7],[5,4,.9],[4,2,.6]].map(([n,k,p])=>round(p**k*(1-p)**(n-k))));
add(85,[[5,3,.8],[4,2,.7],[5,2,.6],[4,3,.9]].map(([n,k,p])=>round(binom(n,k,p))));
add(89,[[4,3,.8],[5,4,.7],[4,2,.6],[5,4,.9]].map(([n,k,p])=>round(Array.from({length:n-k+1},(_,i)=>binom(n,k+i,p)).reduce((a,b)=>a+b,0))));
add(93,[[.4,3],[.6,2],[.5,4],[.7,3]].map(([p,k])=>(1-p)**(k-1)*p));
add(97,[[.6,.98],[.5,.97],[.4,.95],[.7,.99]].map(([p,target])=>{let n=0;while(1-(1-p)**n<target)n++;return n;}));
const chess=[[.52,.3],[.6,.4],[.7,.5],[.45,.35]];
add(101,chess.map(([a,b])=>a*b));add(105,chess.map(([a,b])=>a*(1-b)+b*(1-a)));
add(109,[[.06,2],[.04,3],[.02,2],[.1,2]].map(([p,n])=>(1-p)**n));
add(113,[[.05,2],[.1,3],[.02,4],[.08,2]].map(([p,n])=>1-(1-p)**n));
add(117,[.25,.25,.5,.25]);
add(121,[[8,6,11],[10,9,6],[7,5,8],[12,8,10]].map(([a,b,c])=>round(a*b/choose(a+b+c,2))));
add(125,[[6,8,5],[7,9,4],[5,6,9],[10,5,5]].map(([a,b,c])=>round(choose(a,2)/choose(a+b+c,2))));
add(129,[[5,7,8],[6,4,10],[8,6,6],[4,9,7]].map(([a,b,c])=>round(1-choose(b+c,2)/choose(a+b+c,2))));
add(133,[1/8,1/9,1/16,1/27]);
add(137,[[10,2],[8,3],[12,4],[6,2]].map(([n,k])=>(k/n+(k/n)**2)*(1-k/n)));
add(141,[1/5,1/4,1/6,1/3]);add(145,[1/2,2/5,1/3,2/3]);
add(149,[[3,4,1],[2,3,2],[4,5,1],[3,5,2]].map(([a,b,c])=>conditional(a,b,c)));
add(153,[4/5,9/10,4/5,9/10]);
add(157,[[[.5,.3,.2],[.7,.8,.9],0],[[.4,.4,.2],[.8,.6,.9],2],[[.6,.25,.15],[.75,.85,.95],1],[[.3,.5,.2],[.9,.7,.8],0]].map(([a,b,i])=>round(a[i]*b[i]/a.reduce((t,p,j)=>t+p*b[j],0))));
add(169,[.6,.7,.8,.9].map(p=>round(binom(4,3,p)+binom(4,4,p))));
add(173,[[4,.2],[3,.3],[5,.1],[2,.4]].map(([n,p])=>(1-p)**n));
add(177,[[6,5,4],[8,3,7],[4,9,5],[7,6,3]].map(([a,b,c])=>round(a*b/choose(a+b+c,2))));
add(181,[[4,3,3],[5,4,3],[6,5,4],[7,3,5]].map(([a,b,c])=>round((a*b+a*c+b*c)/choose(a+b+c,2))));
add(185,[[20,4,2],[25,5,2],[30,3,3],[16,4,3]].map(([n,d,k])=>round(d*choose(n-d,k-1)/choose(n,k))));
add(189,[[20,4,2],[25,5,3],[30,6,2],[18,3,3]].map(([n,d,k])=>round(choose(n-d,k)/choose(n,k))));
add(193,[[.5,.75,.6],[.4,.8,.7],[.6,.9,.5],[.3,.7,.4]].map(([q,a,b])=>round(q*a/(q*a+(1-q)*b))));
add(197,[[.3,.5,3],[.4,.6,4],[.2,.7,3],[.5,.4,5]].map(([p,q,n])=>1-(1-p)*(1-q)**(n-1)));
function numericAnswer(s){const m=s.match(/^\$\\frac\{(\d+)\}\{(\d+)\}\$$/);return m?Number(m[1])/Number(m[2]):Number(s.replace(',','.'));}
const missing=[...Array.from({length:16},(_,i)=>i+33),53,54,55,56,...Array.from({length:8},(_,i)=>i+161)];
test('all intact source exercises have valid statements, formulas and independently verified answers',()=>{
 assert.equal(tasks.length,172); assert.equal(Object.keys(values).length,172);
 assert.deepEqual(tasks.map(t=>t.id),Array.from({length:200},(_,i)=>i+1).filter(i=>!missing.includes(i)));
 assert.deepEqual(catalog['5'],tasks.map(t=>t.id));assert.equal(taskModuleForRoute('5'),'5');
 for(const t of tasks){
  assert.ok(isTaskInModule('5',t.id)); assert.ok(t.probabilityPrompt.length>40,`Задача ${t.id}: неполное условие`);
  assert.ok(Math.abs(numericAnswer(t.answer)-values[t.id])<1e-8,`Задача ${t.id}: ${t.answer}, вычислено ${values[t.id]}`);
  for(const text of [t.probabilityPrompt,t.answer]){const parts=text.split(/\$([^$]+)\$/g);assert.equal((text.match(/\$/g)||[]).length%2,0);for(let i=1;i<parts.length;i+=2)assert.doesNotThrow(()=>katex.renderToString(parts[i],{throwOnError:true}),`Задача ${t.id}`);}
 }
});
test('source order and progress IDs are preserved across nine pages',()=>{
 assert.equal(paginateTasks(tasks,1).pageCount,9);
 assert.deepEqual(Array.from({length:9},(_,i)=>paginateTasks(tasks,i+1).items).flat(),tasks);
 for(const n of [501,550,600,650,700]) assert.ok(legacyCandidates(n).every(x=>x.module!=='5'));
 for(const id of missing) assert.equal(isTaskInModule('5',id),false);
});
