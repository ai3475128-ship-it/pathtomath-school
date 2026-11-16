import test from 'node:test';
import assert from 'node:assert/strict';
import katex from 'katex';
import tasks from '../src/lib/calculation-tasks.json' with {type:'json'};
import catalog from '../src/lib/task-catalog.json' with {type:'json'};
import {paginateTasks} from '../src/lib/task-pagination.js';
import {isTaskInModule,legacyCandidates} from '../src/lib/task-modules.js';
import {taskModuleForRoute} from '../src/lib/ege-sections.js';

const log=(b,x)=>Math.log(x)/Math.log(b),rad=a=>a*Math.PI/180, sin=a=>Math.sin(rad(a)),cos=a=>Math.cos(rad(a));
const a7=-40/61,a8=-12/17;
// Calculated independently from the expressions and their given conditions.
const expected=[
(735**2-265**2)/1000,(812**2-188**2)/1000,(13**3-7**3)/(13-7),(11**3+4**3)/(11+4),(.75-.25)/(5/6-1/3),(7/8-3/8)/(2/3-1/6),61*a7+50,17*a8+20,(13**2-49)/(13-7),(5**3-8)/(5-2),Math.abs(5-4)+Math.abs(5-7),Math.abs(0+2)+Math.abs(0-5),Math.sqrt(10*15/6),Math.sqrt(14*21/6),Math.cbrt(6*12/9),Math.cbrt(20*25/4),(18*27/6)**.25,(8*32/16)**.25,32**(2/5),Math.cbrt(125**2),
(Math.sqrt(75)-Math.sqrt(12))/Math.sqrt(3),(Math.sqrt(98)-Math.sqrt(8))/Math.sqrt(2),25-7,48-25,Math.sqrt(7+4*Math.sqrt(3))-Math.sqrt(3),Math.sqrt(11+6*Math.sqrt(2))-Math.sqrt(2),3**11*3**4/3**12,5**8*5**-3/5**3,4**7/8**4,27**4/9**5,4**4.75/8**2.5,125**3.2/25**3.3,81**.75*27**(-1/3),32**.4*8**(-1/3),(2**.6*5**.4)**5,(3**(2/3)*2**(1/3))**6,(2**-3+2**-4)/2**-5,(3**-2-3**-3)/3**-4,Math.sqrt(2**6*5**2),Math.cbrt(3**6*2**3),
log(3,243),log(.5,32),log(3,2.7)+log(3,10),log(2,12)+log(2,2/3),log(.2,100)-log(.2,4),log(3,162)-log(3,2),2*log(5,10)-log(5,4),3*log(2,6)-log(2,27),log(4,125)/log(8,625),log(81,32)/log(27,4),log(2,7)/log(4,7),log(9,5)/log(3,5),log(25,5),log(16,8),7**log(7,13),5**log(5,18),49**log(7,3),8**log(2,5),3**(2+log(3,2)),5**(1+log(5,4)),
log(.25,2**6*Math.sqrt(.25)),log(8,8**4*2**3),1/.25,1/-2,4*sin(30)+2*cos(60),6*cos(60)-4*sin(30),2*sin(150)+4*cos(120),3*cos(240)-2*sin(330),2*Math.sin(7*Math.PI/6)+4*Math.cos(4*Math.PI/3),6*Math.cos(5*Math.PI/3)-2*Math.sin(11*Math.PI/6),sin(38)/cos(52),cos(17)/sin(73),-5*Math.sqrt(1-.6**2),-10*Math.sqrt(1-.8**2),-5*Math.sqrt(1-.8**2),13*Math.sqrt(1-(5/13)**2),.6/.8,(-12/13)/(5/13),25*(1-.6**2),49*(1-(5/7)**2),2*.6*.8,2*(-.6)*.8,2*.8**2-1,1-2*.6**2,2*(1/3)/(1-(1/3)**2),3*2*.5/(1-.5**2),44*sin(140)*cos(140)/sin(280),18*sin(35)*cos(35)/sin(70),10*sin(85)*cos(85)/sin(190),6*sin(95)*cos(95)/sin(170),sin(23)**2+sin(67)**2,cos(31)**2+cos(59)**2,2*sin(390)+4*cos(420),6*cos(720)-2*sin(690),3*2,5/.25,2/.8,2/.5,Math.sqrt(2)*Math.tan(11*Math.PI/6)*Math.sin(-13*Math.PI/3)/Math.cos(19*Math.PI/4),6*Math.sqrt(6)*Math.sin(23*Math.PI/6)*Math.cos(-11*Math.PI/4)/Math.tan(8*Math.PI/3)
];
test('all 100 expressions have valid LaTeX and independently checked answers',()=>{
 assert.equal(tasks.length,100);assert.equal(expected.length,100);assert.equal(taskModuleForRoute('7'),'7');
 assert.deepEqual(tasks.map(t=>t.id),Array.from({length:100},(_,i)=>i+1));assert.deepEqual(catalog['7'],tasks.map(t=>t.id));
 for(const [i,t] of tasks.entries()){
  assert.ok(isTaskInModule('7',t.id));assert.ok(Math.abs(Number(t.answer.replace(',','.'))-expected[i])<1e-7,`Задача ${t.id}: ${t.answer}, вычислено ${expected[i]}`);
  assert.doesNotThrow(()=>katex.renderToString(t.calculationExpression,{throwOnError:true,displayMode:true}),`Задача ${t.id}`);
  if(t.calculationCondition){const parts=t.calculationCondition.split(/\$([^$]+)\$/g);assert.equal((t.calculationCondition.match(/\$/g)||[]).length%2,0);for(let j=1;j<parts.length;j+=2)assert.doesNotThrow(()=>katex.renderToString(parts[j],{throwOnError:true}),`Условие ${t.id}`);}
 }
});
test('five pages retain the order and use a separate progress namespace',()=>{
 assert.equal(paginateTasks(tasks,1).pageCount,5);assert.deepEqual(Array.from({length:5},(_,i)=>paginateTasks(tasks,i+1).items).flat(),tasks);
 for(const n of [701,750,800])assert.ok(legacyCandidates(n).every(x=>x.module!=='7'));
});
