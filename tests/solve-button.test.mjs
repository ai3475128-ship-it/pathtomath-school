import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require=createRequire(import.meta.url), React=require('react');
const { renderToStaticMarkup }=require('react-dom/server'),{ transformSync }=require('next/dist/build/swc');
const file=path.resolve('src/app/math-profile/[taskNumber]/SolveButton.js'),previous=require.extensions['.js'];
let SolveButton;
try {
 require.extensions['.js']=(mod,name)=>name===file?mod._compile(transformSync(fs.readFileSync(name,'utf8'),{filename:name,jsc:{parser:{syntax:'ecmascript',jsx:true},transform:{react:{runtime:'classic'}}},module:{type:'commonjs'}}).code,name):previous(mod,name);
 SolveButton=require(file).default;
} finally {require.extensions['.js']=previous;}

test('solve and solved states retain the same footprint and expose the toggle state',()=>{
 const states=[false,true].map(isSolved=>renderToStaticMarkup(React.createElement(SolveButton,{isSolved,onClick:()=>{}})));
 for(const html of states){
  assert.match(html,/h-9 w-28/);assert.match(html,/transition-opacity/);assert.doesNotMatch(html,/hover:scale|active:scale/);
  assert.match(html,/Решить/);assert.match(html,/Решено/);assert.match(html,/motion-reduce:transition-none/);
 }
 assert.match(states[0],/aria-pressed="false"/);assert.match(states[1],/aria-pressed="true"/);
 assert.match(states[0],/Отметить задачу как решённую/);assert.match(states[1],/Отменить отметку о решении/);
});
