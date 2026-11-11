import test from 'node:test';
import assert from 'node:assert/strict';
import tasks from '../src/lib/planimetry-tasks.json' with { type: 'json' };
import catalog from '../src/lib/task-catalog.json' with { type: 'json' };
import { planimetryGeometry } from '../src/lib/planimetry-geometry.js';
import { layoutPlanimetry, planimetryLabelCollisions } from '../src/lib/planimetry-layout.js';
import { tokenizePlanimetryCondition } from '../src/lib/planimetry-condition.js';
import katex from 'katex';

const near=(a,b,message)=>assert.ok(Math.abs(a-b)<1e-7,`${message}: ${a} != ${b}`);
const dist=(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1]);
const mid=(a,b)=>[(a[0]+b[0])/2,(a[1]+b[1])/2];
const point=(a,b,message)=>{near(a[0],b[0],message);near(a[1],b[1],message);};
const angle=(a,b,c)=>{const x=[a[0]-b[0],a[1]-b[1]], y=[c[0]-b[0],c[1]-b[1]], cosine=(x[0]*y[0]+x[1]*y[1])/(Math.hypot(...x)*Math.hypot(...y));return Math.acos(Math.max(-1,Math.min(1,cosine)))*180/Math.PI;};
const lineDistance=(p,a,b)=>Math.abs((b[0]-a[0])*(a[1]-p[1])-(a[0]-p[0])*(b[1]-a[1]))/dist(a,b);

test('all 200 problems have stable catalog IDs, statements and answer-only content',()=>{
  assert.equal(tasks.length,200);assert.deepEqual(tasks.map((t)=>t.id),Array.from({length:200},(_,i)=>i+1));
  assert.deepEqual(catalog['1'],tasks.map((t)=>t.id));
  for(const t of tasks){assert.ok(t.conditionText.endsWith('.'));assert.match(t.answer,/^\d+(?:,\d+)?$/);assert.equal(t.diagramType,(t.id-1)%25+1);assert.equal(t.solutionBuilder,undefined);}
});

test('all 200 answers agree with the geometry in their conditions',()=>{
  for(const t of tasks){const n=t.diagramValues,k=t.diagramType;let answer;
    if(k===1)answer=n[0]*3/4;else if(k===2)answer=n[0]/4;else if(k===3)answer=n[0]+n[1];else if(k===4)answer=Math.abs(90-2*n[0]);
    else if(k===5||k===6)answer=Math.abs(45-n[0]);else if(k===7)answer=n[1];else if(k===8)answer=2*n[0]-180;
    else if(k===9)answer=n[0]*3/4;else if(k===10)answer=n[0]/4;else if(k===11)answer=n[0];else if(k===12)answer=Math.max(n[0],n[1])/2;
    else if(k===13)answer=n[0];else if(k===14)answer=2*n[0];else if(k===15)answer=180-2*n[0];else if(k===16)answer=(180-n[0])/2;
    else if(k===17)answer=180-n[0];else if(k===18)answer=n[0]-n[1];else if(k===19)answer=n[0]+n[1];else if(k===20||k===21)answer=90-n[0];
    else if(k===22)answer=2*(n[0]+n[1]);else if(k===23)answer=n[0]/2-n[1];else if(k===24)answer=n[0]+n[2]-n[1];else answer=4*n[0];
    near(answer,Number(t.answer.replace(',','.')),`answer ${t.id}`);
  }
});

test('diagrams respect the points, tangencies and angles stated in each problem',()=>{
  for(const t of tasks){const k=t.diagramType,n=t.diagramValues,g=planimetryGeometry(k,n),p=g.points;
    for(const [a,b] of g.segments){assert.ok(p[a]&&p[b],`missing endpoint in ${t.id}`);assert.ok(dist(p[a],p[b])>1e-8,`degenerate segment in ${t.id}`);}
    for(const v of Object.values(p))assert.ok(v.every(Number.isFinite),`nonfinite point in ${t.id}`);
    if(k===1||k===2){point(p.D,mid(p.A,p.C),`D ${t.id}`);point(p.E,mid(p.B,p.C),`E ${t.id}`);}
    if(k===3){near(angle(p.B,p.A,p.D),n[1],`bisector ${t.id}`);near(angle(p.D,p.A,p.C),n[1],`bisector ${t.id}`);near(angle(p.A,p.C,p.B),n[0],`angle C ${t.id}`);near(lineDistance(p.D,p.B,p.C),0,`D on BC ${t.id}`);}
    if([4,5,6].includes(k)){near(angle(p.A,p.C,p.B),90,`right angle ${t.id}`);near(angle(p.A,p.B,p.C),n[0],`angle B ${t.id}`);if(p.M)point(p.M,mid(p.A,p.B),`median ${t.id}`);if(p.H){near(lineDistance(p.H,p.A,p.B),0,`height foot ${t.id}`);near(angle(p.C,p.H,p.A),90,`altitude ${t.id}`);}if(p.D){near(angle(p.A,p.C,p.D),45,`bisector ${t.id}`);near(lineDistance(p.D,p.A,p.B),0,`D on AB ${t.id}`);}}
    if(k===7){near(angle(p.A,p.C,p.B),90,`right ${t.id}`);near(dist(p.A,p.C),n[0],`side ${t.id}`);near(dist(p.C,p.B),n[1],`side ${t.id}`);}
    if(k===8){near(dist(p.A,p.C),dist(p.B,p.C),`isosceles ${t.id}`);near(angle(p.C,p.B,p.X),n[0],`exterior ${t.id}`);}
    if([9,10].includes(k))point(p.E,mid(p.A,p.D),`midpoint ${t.id}`);
    if(k===11){near(angle(p.B,p.A,p.D),90,`rectangle ${t.id}`);near(dist(p.A,p.D),n[0],`side ${t.id}`);near(dist(p.A,p.B),n[1],`side ${t.id}`);}
    if(k===12){point(p.E,mid(p.A,p.B),`middle line ${t.id}`);point(p.F,mid(p.C,p.D),`middle line ${t.id}`);point(p.X,mid(p.A,p.C),`diagonal ${t.id}`);near(lineDistance(p.X,p.E,p.F),0,`intersection ${t.id}`);}
    if([13,14].includes(k))near(angle(p.A,p.O,p.B),2*angle(p.A,p.C,p.B),`central angle ${t.id}`);
    if([15,16].includes(k)){point(p.O,mid(p.A,p.C),`diameter AC ${t.id}`);point(p.O,mid(p.B,p.D),`diameter BD ${t.id}`);near(k===15?angle(p.A,p.C,p.B):angle(p.A,p.O,p.D),n[0],`given angle ${t.id}`);}
    if(k===17)near(angle(p.B,p.A,p.D),n[0],`inscribed angle ${t.id}`);
    if(k===18){near(angle(p.A,p.B,p.C),n[0],`ABC ${t.id}`);near(angle(p.C,p.A,p.D),n[1],`CAD ${t.id}`);}
    if(k===19){near(angle(p.A,p.B,p.D),n[0],`ABD ${t.id}`);near(angle(p.C,p.A,p.D),n[1],`CAD ${t.id}`);}
    if([20,21].includes(k)){near(angle(p.C,p.A,p.O),90,`tangency ${t.id}`);near(lineDistance(p.B,p.C,p.O),0,`B on CO ${t.id}`);near(k===20?angle(p.A,p.O,p.B):angle(p.A,p.C,p.O),n[0],`given angle ${t.id}`);}
    if([22,23,24].includes(k))for(const [a,b] of g.segments)near(lineDistance([0,0],p[a],p[b]),1,`incircle ${t.id}`);
    if(k===25){point(p.D,mid(p.A,p.B),`D ${t.id}`);point(p.E,mid(p.A,p.C),`E ${t.id}`);}
  }
});

test('all 200 diagrams keep point names clear of strokes and each other inside the viewBox', () => {
  for (const task of tasks) {
    const layout = layoutPlanimetry(planimetryGeometry(task.diagramType, task.diagramValues));
    assert.deepEqual(planimetryLabelCollisions(layout), [], `Task ${task.id}`);
    for (const { box } of layout.labels) {
      assert.ok(box.left >= 0 && box.top >= 0 && box.right <= layout.width && box.bottom <= layout.height, `Task ${task.id}: label outside viewBox`);
    }
  }
});

test('mathematical notation in every condition and diagram is valid KaTeX', () => {
  for (const task of tasks) {
    const parts = tokenizePlanimetryCondition(task.conditionText);
    assert.equal(parts.map(({math,value}) => math ? value.replace('^{\\circ}', '°') : value).join(''), task.conditionText);
    for (const part of parts.filter(({math}) => math)) assert.doesNotThrow(() => katex.renderToString(part.value, { throwOnError: true }), `Task ${task.id}: ${part.value}`);
    for (const label of layoutPlanimetry(planimetryGeometry(task.diagramType, task.diagramValues)).labels) assert.doesNotThrow(() => katex.renderToString(label.text, { throwOnError: true }), `Task ${task.id}: ${label.text}`);
  }
});
