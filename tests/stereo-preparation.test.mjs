import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import katex from 'katex';
import catalog from '../src/lib/task-catalog.json' with {type:'json'};
import {legacyCandidates} from '../src/lib/task-modules.js';
import {practiceGroups} from '../src/lib/course-progress.js';

const source=fs.readFileSync('src/app/math-profile/sections-ege-intro/ege-intro-14.js','utf8');
test('seven replacement tasks have diagrams, solutions and new progress keys',()=>{
 assert.deepEqual(catalog['14-intro'],[101,102,103,104,105,106,107]);
 for(let i=1;i<=7;i++){
  assert.match(source,new RegExp(`title: 'Задача ${i}'`));
  assert.ok(source.includes(`function Solution${i}()`));
  for(const kind of ['condition','construction','plane']){
   const p=`public/diagrams/stereo-prep/${i}-${kind}.svg`;
   const svg=fs.readFileSync(p,'utf8'); assert.match(svg,/<svg /); assert.match(svg,/<\/svg>/); assert.match(svg,/<line /);
  }
 }
 for(const n of [1501,1507]) assert.ok(legacyCandidates(n).every(x=>x.module!=='14-intro'));
 const row=practiceGroups('ege-math',[{module:'14-intro',taskId:1}])[0].rows.find(r=>r.label.startsWith('№14'));
 assert.equal(row.done,0);assert.equal(row.total,7);
});
test('the exercises and steps use valid mathematical notation',()=>{
 for(const m of source.matchAll(/String\.raw`([^`]+)`/g)){
  const raw=m[1];
  for(const f of raw.includes('$')?[...raw.matchAll(/\$([^$]+)\$/g)].map(x=>x[1]):[raw])
   assert.doesNotThrow(()=>katex.renderToString(f,{throwOnError:true}),f);
 }
});
test('independent coordinates confirm all seven angles',()=>{
 const dot=(a,b)=>a.reduce((s,v,i)=>s+v*b[i],0);
 const sub=(a,b)=>a.map((v,i)=>v-b[i]);
 const scale=(a,k)=>a.map(v=>v*k);
 const cos=(a,b)=>Math.abs(dot(a,b))/Math.hypot(...a)/Math.hypot(...b);
 const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-12,`${a} != ${b}`);
 close(cos([0,0,1],[-2,2,1]),1/3);
 close(cos([3,0,-4],[1.5,3*Math.sqrt(3)/2,0]),3/10);
 const hex=Array.from({length:6},(_,i)=>[Math.cos(i*Math.PI/3),Math.sin(i*Math.PI/3),0]);
 const [a,b,c,,,f]=hex;
 const times=Math.SQRT2;const a3=scale(a,times),b3=scale(b,times),c3=scale(c,times),f3=scale(f,times);
 close(cos(sub([f3[0],f3[1],1],a3),sub(c3,[b3[0],b3[1],1])),0);
 const side=Math.sqrt(6), A=[0,0,0], B=[side,0,0], C=[side,side,0], S=[side/2,side/2,1];
 const mid=(p,q)=>p.map((v,i)=>(v+q[i])/2);
 close(cos(sub(mid(S,C),B),sub(S,A)),.5);
 const apex=[0,0,Math.SQRT2];
 close(cos(sub(mid(apex,c),a),sub(f,b)),Math.sqrt(3)/6);
 close(cos([6,4,3],[0,4,-3]),7/(5*Math.sqrt(61)));
 close(cos([4,0,3],[-4,4,4]),Math.sqrt(3)/15);
});
