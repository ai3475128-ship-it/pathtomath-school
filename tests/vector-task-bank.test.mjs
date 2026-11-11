import test from 'node:test';
import assert from 'node:assert/strict';
import tasks from '../src/lib/vector-tasks.json' with { type: 'json' };
import catalog from '../src/lib/task-catalog.json' with { type: 'json' };
import { layoutVectorGrid, vectorLabelCollisions } from '../src/lib/vector-layout.js';
import { legacyCandidates } from '../src/lib/task-modules.js';
import katex from 'katex';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require=createRequire(import.meta.url);
const React=require('react');
const {renderToStaticMarkup}=require('react-dom/server');
const {transformSync}=require('next/dist/build/swc');
const diagramPath=path.resolve('src/app/math-profile/[taskNumber]/VectorDiagram.js');
const originalLoader=require.extensions['.js'];
let VectorDiagram;
try {
  require.extensions['.js']=(mod,filename)=>filename===diagramPath
    ? mod._compile(transformSync(fs.readFileSync(filename,'utf8').replace('@/lib/vector-layout',path.resolve('src/lib/vector-layout.js')), {filename,jsc:{parser:{syntax:'ecmascript',jsx:true},transform:{react:{runtime:'classic'}}},module:{type:'commonjs'}}).code,filename)
    : originalLoader(mod,filename);
  VectorDiagram=require(diagramPath).default;
} finally { require.extensions['.js']=originalLoader; }

const near=(actual,expected,id)=>assert.ok(Math.abs(actual-expected)<1e-8,`Задача ${id}: ${actual} ≠ ${expected}`);
function computedAnswer(task) {
  const id=task.id, group=task.vectorGroup,p=task.vectorParameters;
  if(id<=48){
    const vectors=task.vectorDiagram.vectors.map(({from,to})=>to.map((v,i)=>v-from[i]));
    const [ax,ay]=vectors[0],[bx,by]=vectors[1]||[0,0];
    return [ax,ay,ax+bx,ay-by,ax*bx+ay*by,2*ax-bx,3*ay+2*by,Math.hypot(ax,ay),ax*(ax+bx)+ay*(ay+by),(ax-bx)*bx+(ay-by)*by,ax*by-ay*bx,(ax-bx)**2+(ay-by)**2][group-1];
  }
  if(id<=52)return p[0]**2;
  if(id<=56)return p[1]**2-p[0]**2;
  if(id<=60)return p[0]**2+p[1]**2;
  if(id<=64)return p[0]**2;
  if(id<=68)return p[0]+p[4]*p[2];
  if(id<=72)return p[0]*p[2]+p[1]*p[3];
  if(id<=76)return (2*p[0]-p[2])*p[0]+(2*p[1]-p[3])*p[1];
  if(id<=80)return Math.hypot(p[2]-p[0],p[3]-p[1])/Math.sqrt(5);
  if(id<=84)return p[0]*p[2]/p[1];
  if(id<=88)return -p[0]*p[1]/p[2];
  if(id<=92)return 2*Math.hypot(p[0],p[1]);
  if(id<=96)return p[0]**2+p[1]**2;
  return (id<=98?2:1)*p[0]*p[1]*Math.cos(p[2]*Math.PI/180);
}

test('all 100 vector problems have correct IDs, prompts and numeric answers',()=>{
  assert.deepEqual(tasks.map(t=>t.id),Array.from({length:100},(_,i)=>i+1));
  assert.deepEqual(catalog['2'],tasks.map(t=>t.id));
  for(const t of tasks){
    assert.ok(t.vectorPrompt.length>20,`Задача ${t.id}: условие`);
    assert.match(t.answer,/^-?\d+(?:[.,]\d+)?$/);
    assert.equal(t.vectorDiagram?.kind,t.id<=48?'grid':t.id<=64?'quadrilateral':undefined);
    near(computedAnswer(t),Number(t.answer.replace(',','.')),t.id);
    assert.equal((t.vectorPrompt.match(/\$/g)||[]).length%2,0);
    for(const [i,part] of t.vectorPrompt.split(/\$([^$]+)\$/g).entries())if(i%2)assert.doesNotThrow(()=>katex.renderToString(part,{throwOnError:true}),`Формула ${t.id}: ${part}`);
  }
});

test('new vector and planimetry tasks cannot claim unrelated legacy progress',()=>{
  for(const number of [101,200,201,250,300])assert.ok(legacyCandidates(number).every(({module})=>module!=='1'&&module!=='2'));
});

test('every grid has readable, unclipped labels away from axes and arrows',()=>{
  for(const task of tasks.filter(t=>t.vectorDiagram?.kind==='grid')){
    const d=layoutVectorGrid(task.vectorDiagram);
    assert.deepEqual(vectorLabelCollisions(d),[],`Задача ${task.id}`);
    assert.equal(d.labels.length,task.vectorDiagram.vectors.length);
    for(const box of [...d.axisLabels,...d.labels])assert.ok(box.x>=0&&box.y>=0&&box.x+box.width<=d.width&&box.y+box.height<=d.height,`Задача ${task.id}: подпись вне рисунка`);
    for(const {from,to} of task.vectorDiagram.vectors){
      assert.notDeepEqual(from,to,`Задача ${task.id}: нулевой вектор`);
      for(const [x,y] of [from,to])assert.ok(x>=d.minX&&x<=d.maxX&&y>=d.minY&&y<=d.maxY,`Задача ${task.id}: вектор вне сетки`);
    }
  }
});

test('quadrilaterals preserve stated lengths and required diagonals',()=>{
  for(const t of tasks.filter(t=>t.vectorDiagram?.kind==='quadrilateral')){
    const d=t.vectorDiagram;
    near(d.width,t.vectorParameters[0],t.id);
    if(t.id<=60)near(d.height,t.vectorParameters[1],t.id);
    else near(d.skew**2+d.height**2,t.vectorParameters[1],t.id);
    assert.equal(d.diagonals,t.id>=61?'none':t.id>=53&&t.id<=56?'both':'ac');
  }
});

test('all 64 diagrams render as scalable labelled SVG without KaTeX errors',()=>{
  for(const t of tasks.filter(task=>task.vectorDiagram)){
    const html=renderToStaticMarkup(React.createElement(VectorDiagram,{diagram:t.vectorDiagram,taskNumber:t.id}));
    assert.match(html,/<svg/);assert.match(html,/viewBox=/);
    assert.match(html,/max-w-\[/);assert.doesNotMatch(html,/katex-error/);
    if(t.id<=48){assert.match(html,/marker-end=/);assert.match(html,/foreignObject/);}
  }
});
