import test from 'node:test';
import assert from 'node:assert/strict';
import { EGE_SECTIONS, EGE_INTRO_SECTIONS, egeSection, taskModuleForRoute, displayNumberForModule } from '../src/lib/ege-sections.js';
import { getTaskModule, getEgeProgress, isTaskInModule, legacyCandidates } from '../src/lib/task-modules.js';

test('new exam numbering preserves topic identifiers and separates the new topics', () => {
  assert.equal(EGE_SECTIONS.length, 20);
  const expected = ['1','2','3','4','5','ege-random','6','7','8','9','10','11','16','13','14','15','ege-optimization','17','18','19'];
  assert.deepEqual(EGE_SECTIONS.map(x => x.module), expected);
  for (const { number, module } of EGE_SECTIONS) {
    assert.equal(taskModuleForRoute(String(number)), module);
    assert.equal(displayNumberForModule(module), number);
    assert.equal(getTaskModule(module), module);
  }
  assert.equal(egeSection('01'), null);
  assert.equal(egeSection('21'), null);
  assert.deepEqual(EGE_INTRO_SECTIONS.map(x => [x.number, x.module]), [[15,'14-intro'],[18,'17-intro'],[19,'18-intro'],[20,'19-intro']]);
  for (const {number, module} of EGE_INTRO_SECTIONS) assert.equal(taskModuleForRoute(`${number}-intro`), module);
  assert.deepEqual(egeSection(9).videoSections, [8, 12]);
  assert.equal(egeSection(13).videoSections[0], 16);
  assert.equal(egeSection(6).videoSections[0], 'ege-random');
  assert.equal(egeSection(17).videoSections[0], 'ege-optimization');
});

test('existing progress is displayed under its new topic number', async () => {
  const db = { all: async () => [
    { module: '13', taskId: 1 }, { module: '15', taskId: 101 },
    { module: '16', taskId: 1 }, { module: '18', taskId: 1 },
    { module: '19', taskId: 1 }, { module: '19-intro', taskId: 1 },
    { module: 'olympiad-1-main', taskId: 1 },
  ] };
  assert.deepEqual(await getEgeProgress(db, 'student'), [
    {section: 14, taskId: 1}, {section: 16, taskId: 101},
    {section: 13, taskId: 1}, {section: 19, taskId: 1}, {section: 20, taskId: 1},
  ]);
});

 test('all 14 optimization problems have separate valid progress IDs', () => {
  for (let id = 1; id <= 14; id++) assert.equal(isTaskInModule('ege-optimization', id), true);
  assert.equal(isTaskInModule('ege-optimization', 15), false);
  for (let id = 1; id <= 14; id++) assert.ok(!legacyCandidates(id).some(item => item.module === 'ege-optimization'));
});
