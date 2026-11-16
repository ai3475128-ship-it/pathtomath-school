import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import tasks from '../src/lib/ege-equations-tasks.json' with {type:'json'};

const require=createRequire(import.meta.url);
const React=require('react');
const {renderToStaticMarkup}=require('react-dom/server');
const {transformSync}=require('next/dist/build/swc');
const componentPath=path.resolve('src/app/math-profile/[taskNumber]/EquationCondition.js');
const originalLoader=require.extensions['.js'];
let EquationCondition;
try {
  require.extensions['.js']=(mod,filename)=>filename===componentPath
    ? mod._compile(transformSync(fs.readFileSync(filename,'utf8'), {filename,jsc:{parser:{syntax:'ecmascript',jsx:true},transform:{react:{runtime:'classic'}}},module:{type:'commonjs'}}).code,filename)
    : originalLoader(mod,filename);
  EquationCondition=require(componentPath).default;
} finally { require.extensions['.js']=originalLoader; }

test('all equations have a separate title, centered display formula and optional condition',()=>{
  for(const task of tasks){
    const [,math,tail]=task.equationPrompt.split(/\$([^$]+)\$/g);
    const note=tail.replace(/^\.\s*/,'').trim();
    const html=renderToStaticMarkup(React.createElement(EquationCondition,{text:task.equationPrompt}));
    assert.match(html,/<p>Решите уравнение<\/p>/,`Задача ${task.id}`);
    assert.match(html,/<div class="text-center text-sm sm:text-base"><div data-testid="react-katex"><span class="katex-display">/,`Задача ${task.id}`);
    assert.ok(html.includes(math.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')),`Задача ${task.id}: формула`);
    assert.doesNotMatch(html,/katex-error/);
    if(note)assert.ok(html.includes(`<p>${note}</p>`),`Задача ${task.id}: дополнительное условие`);
    assert.equal((html.match(/<p>/g)||[]).length,note?2:1,`Задача ${task.id}: строки текста`);
    assert.ok(html.indexOf('Решите уравнение')<html.indexOf('katex-display'));
    if(note)assert.ok(html.indexOf('katex-display')<html.indexOf(note));
  }
});
