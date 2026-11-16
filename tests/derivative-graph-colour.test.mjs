import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import tasks from '../src/lib/derivative-bank-tasks.json' with {type:'json'};

const require=createRequire(import.meta.url);
const React=require('react');
const sharp=require('sharp');
const {renderToStaticMarkup}=require('react-dom/server');
const {transformSync}=require('next/dist/build/swc');
const componentPath=path.resolve('src/app/math-profile/[taskNumber]/DerivativeDiagram.js');
const originalLoader=require.extensions['.js'];
let DerivativeDiagram;
try {
  require.extensions['.js']=(mod,filename)=>filename===componentPath
    ? mod._compile(transformSync(fs.readFileSync(filename,'utf8'),{filename,jsc:{parser:{syntax:'ecmascript',jsx:true},transform:{react:{runtime:'classic'}}},module:{type:'commonjs'}}).code,filename)
    : originalLoader(mod,filename);
  DerivativeDiagram=require(componentPath).default;
} finally {require.extensions['.js']=originalLoader;}

const matrix='2 -1 0 0 0  2 -1 0 0 0  2 -1 0 0 0  0 0 0 1 0';
const clamp=n=>Math.max(0,Math.min(255,n));
test('every graph retains its image and cropping and has a unique monochrome filter',()=>{
 for(const t of tasks){
  const d=t.derivativeDiagram;
  const html=renderToStaticMarkup(React.createElement(DerivativeDiagram,{diagram:d,taskId:t.id}));
  assert.ok(html.includes(`viewBox="0 ${d.y} ${d.width} ${d.height}"`));
  assert.ok(html.includes(`href="${d.src}"`));
  assert.ok(html.includes(`id="derivative-black-curve-${t.id}"`));
  assert.ok(html.includes(`filter="url(#derivative-black-curve-${t.id})"`));
  assert.ok(html.includes(`values="${matrix}"`));
  assert.match(html,/color-interpolation-filters="sRGB"/);
 }
});
test('the filter makes the original blue strokes black and preserves neutral grid and background',async()=>{
 for(const t of tasks.filter(x=>x.sourceNumber.startsWith('Школково'))){
  const d=t.derivativeDiagram;
  const pixels=await sharp('public'+d.src).extract({left:0,top:d.y,width:d.width,height:d.height}).removeAlpha().raw().toBuffer();
  let blue=0,core=0,grey=0;
  for(let i=0;i<pixels.length;i+=3){
   const [r,g,b]=pixels.subarray(i,i+3),output=clamp(2*r-g);
   if(b>r*1.3&&b-r>30&&b-g>15){blue++;if(r<=95&&g>=165){core++;assert.ok(output<=25,`Задача ${t.id}: (${r},${g},${b})`);}}
   if(r===g&&g===b){grey++;assert.equal(output,r);}
  }
  assert.ok(blue>100&&core>100,`Задача ${t.id}: исходная синяя линия`);
  assert.ok(grey>1000,`Задача ${t.id}: нейтральная сетка`);
 }
});
