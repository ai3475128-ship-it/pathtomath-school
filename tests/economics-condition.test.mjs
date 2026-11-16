import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { parseEconomicsCondition } from '../src/lib/economics-condition.js';
import katex from 'katex';

const require = createRequire(import.meta.url);
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { transformSync } = require('next/dist/build/swc');
const source = fs.readFileSync('src/app/math-profile/[taskNumber]/sectoin16.js', 'utf8');
const conditions = [...source.matchAll(/^\s*mathA:\s*("(?:\\.|[^"\\])*")/gm)].map((match) => JSON.parse(match[1]));

function textParts(blocks) {
  return blocks.flatMap((block) => block.type === 'table' ? block.rows.flat(2) : block.parts);
}
function normalize(value) {
  return value.replace(/\\%/g, '%').replace(/\\,/g, '').replace(/---/g, '').replace(/[\s\u202f–—-]/g, '');
}

test('every economic task retains all its text and valid inline mathematics', () => {
  assert.equal(conditions.length, 41);
  for (const [index, condition] of conditions.entries()) {
    const blocks = parseEconomicsCondition(condition);
    const parts = textParts(blocks);
    const expected = [...condition.matchAll(/\\text\{([^{}]*)\}/g)].map((match) => match[1]).join('');
    const actual = parts.filter((part) => part.type === 'text').map((part) => part.value).join('');
    assert.equal(normalize(actual), normalize(expected), `Text in task ${index + 1}`);
    for (const part of parts.filter((part) => part.type === 'math')) {
      assert.doesNotThrow(() => katex.renderToString(part.value, { throwOnError: true }), `Math in task ${index + 1}: ${part.value}`);
      assert.doesNotMatch(part.value, /§TABLE|\\quad|\\begin\{array\}/);
    }
  }
});

test('the long examples keep their complete question and repair old line hyphenation', () => {
  const read = (index) => textParts(parseEconomicsCondition(conditions[index - 1])).map((part) => part.value).join('');
  assert.match(read(2), /общая сумма выплат после его погашения равнялась 17,5 млн рублей/);
  assert.match(read(3), /банку всего выплачено 1348 тыс\. рублей/);
  assert.match(read(5), /наименьший годовой платёж/);
  assert.match(read(21), /полного погашения кредита/);
  assert.match(read(25), /тыс\. рублей в конце года/);
});

test('all three embedded tables remain complete and fit a fixed-width table', () => {
  for (const [id, columns] of [[6, 5], [27, 6], [40, 6]]) {
    const tables = parseEconomicsCondition(conditions[id - 1]).filter((block) => block.type === 'table');
    assert.equal(tables.length, 1, `task ${id}`);
    assert.equal(tables[0].rows.length, 2);
    assert.ok(tables[0].rows.every((row) => row.length === columns));
  }
  const component = path.resolve('src/app/math-profile/[taskNumber]/EconomicsCondition.js');
  const previous = require.extensions['.js'];
  let EconomicsCondition;
  try {
    require.extensions['.js'] = (mod, filename) => filename === component
      ? mod._compile(transformSync(fs.readFileSync(filename, 'utf8'), { filename, jsc: { parser: { syntax: 'ecmascript', jsx: true }, transform: { react: { runtime: 'classic' } } }, module: { type: 'commonjs' } }).code, filename)
      : previous(mod, filename);
    EconomicsCondition = require(component).default;
  } finally { require.extensions['.js'] = previous; }
  for (const condition of conditions) {
    const html = renderToStaticMarkup(React.createElement(EconomicsCondition, { math: condition }));
    assert.doesNotMatch(html, /overflow-x-auto|katex-error/);
    assert.match(html, /overflow-wrap:anywhere/);
  }
  const html = renderToStaticMarkup(React.createElement(EconomicsCondition, { math: conditions[26] }));
  assert.match(html, /table-fixed/);
  assert.equal((html.match(/<tr>/g) || []).length, 2);
});
