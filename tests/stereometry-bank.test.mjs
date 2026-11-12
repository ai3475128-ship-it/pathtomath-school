import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import katex from 'katex';
import tasks from '../src/lib/stereometry-tasks.json' with { type: 'json' };
import catalog from '../src/lib/task-catalog.json' with { type: 'json' };
import { paginateTasks } from '../src/lib/task-pagination.js';

test('all 200 PDF exercises have their original order, answers and progress IDs', () => {
  assert.equal(tasks.length, 200);
  assert.deepEqual(tasks.map(task => task.id), Array.from({ length: 200 }, (_, i) => i + 1));
  assert.deepEqual(catalog['3'], tasks.map(task => task.id));
  for (const task of tasks) {
    assert.ok(task.stereometryPrompt.length > 20);
    assert.match(task.answer, /^\d+(?:,\d+)?$/);
    assert.equal(task.solutionBuilder, undefined);
  }
  // The five supplied examples and the retake prototype.
  assert.deepEqual([3, 20, 23, 25, 29, 31].map(id => tasks[id - 1].answer), ['4', '500', '20', '48', '10', '6']);
  assert.deepEqual(Array.from({ length: 10 }, (_, i) => paginateTasks(tasks, i + 1).items).flat().map(t => t.id), catalog['3']);
});

test('all conditions have valid mathematical notation and a present vector diagram', () => {
  for (const task of tasks) {
    const pieces = task.stereometryPrompt.split('$');
    assert.equal(pieces.length % 2, 1, `Unpaired math delimiters in task ${task.id}`);
    for (let i = 1; i < pieces.length; i += 2) katex.renderToString(pieces[i], { throwOnError: true });
    assert.match(task.stereometryDiagram, /^\/stereometry-bank\/[a-z0-9-]+\.svg$/i);
    const svg = readFileSync(path.join(process.cwd(), 'public', task.stereometryDiagram.slice(1)), 'utf8');
    assert.match(svg, /<svg\b/);
    assert.match(svg, /viewBox=/);
  }
});
