import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { olympiads } from '../src/lib/olympiad-calendar.js';
import { competitionTasks, competitionArchives } from '../src/lib/olympiad-competition-tasks.js';
import { isTaskInModule } from '../src/lib/task-modules.js';

const require = createRequire(import.meta.url);
const { transformSync } = require('next/dist/build/swc');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const originalLoader = require.extensions['.js'];
const sectionDir = path.resolve('src/app/math-profile/sections-olympiad-intro');
const modules = {};
try {
  require.extensions['.js'] = (mod, filename) => {
    if (filename.startsWith(`${sectionDir}/`)) {
      const code = transformSync(fs.readFileSync(filename, 'utf8'), {
        filename,
        jsc: { parser: { syntax: 'ecmascript', jsx: true }, transform: { react: { runtime: 'classic' } } },
        module: { type: 'commonjs' },
      }).code;
      return mod._compile(code, filename);
    }
    return originalLoader(mod, filename);
  };
  for (let n = 1; n <= 4; n++) {
    const padded = String(n).padStart(2, '0');
    modules[`olympiad-${n}-intro`] = require(path.join(sectionDir, `olympiad-intro-${padded}.js`))[`olympiadIntro${padded}Tasks`];
  }
} finally {
  require.extensions['.js'] = originalLoader;
}

test('competition task references resolve to the original tasks and their progress modules', () => {
  const expectedTitle = { lomonosov: '«Ломоносов»', omo: 'ОММО', belchonok: '«Бельчонок»', turgor: 'Турнир городов', turlom: 'Турнир Ломоносова', hse: '«Высшая проба»' };
  const ids = new Set(olympiads.map((item) => item.id));
  let count = 0;
  for (const [competition, groups] of Object.entries(competitionTasks)) {
    assert.ok(ids.has(competition));
    for (const { module, ids: taskIds } of groups) {
      for (const id of taskIds) {
        assert.ok(isTaskInModule(module, id), `${competition}: missing progress key ${module}/${id}`);
        const task = modules[module]?.find((item) => item.id === id);
        assert.ok(task, `${competition}: missing task ${module}/${id}`);
        assert.match(renderToStaticMarkup(React.createElement(React.Fragment, null, task.title)), new RegExp(expectedTitle[competition]));
        assert.equal(typeof task.solutionBuilder, 'function');
        count++;
      }
    }
  }
  assert.equal(count, 20);
});

test('archive links and task pages use only competitions in the calendar', () => {
  const ids = new Set(olympiads.map((item) => item.id));
  assert.deepEqual(Object.keys(competitionArchives).sort(), [...ids].sort());
  for (const [id, url] of Object.entries(competitionArchives)) {
    assert.ok(ids.has(id));
    assert.equal(new URL(url).protocol, 'https:');
  }
});
