import test from 'node:test';
import assert from 'node:assert/strict';
import { EGE_SECTIONS, EGE_INTRO_SECTIONS, egeSection, taskModuleForRoute, displayNumberForModule } from '../src/lib/ege-sections.js';
import { getTaskModule, getEgeProgress, isTaskInModule, legacyCandidates } from '../src/lib/task-modules.js';

test('the previous 19-section numbering keeps bank, preparatory and video topics aligned', () => {
  assert.equal(EGE_SECTIONS.length, 19);
  assert.deepEqual(EGE_SECTIONS.map(x => x.module), Array.from({length:19},(_,i)=>String(i+1)));
  for (const { number, module } of EGE_SECTIONS) {
    assert.equal(taskModuleForRoute(String(number)), module);
    assert.equal(displayNumberForModule(module), number);
    assert.equal(getTaskModule(module), module);
  }
  assert.equal(egeSection('01'), null);assert.equal(egeSection('20'), null);
  assert.deepEqual(EGE_INTRO_SECTIONS.map(x => [x.number, x.module]), [[14,'14-intro'],[17,'17-intro'],[18,'18-intro'],[19,'19-intro']]);
  for (const {number, module} of EGE_INTRO_SECTIONS) assert.equal(taskModuleForRoute(`${number}-intro`), module);
  assert.deepEqual(egeSection(8).videoSections, [8]);assert.deepEqual(egeSection(12).videoSections, [12]);
  assert.deepEqual(egeSection(16).videoSections, [16,'ege-optimization']);
  assert.equal(displayNumberForModule('ege-optimization'),16);
  assert.equal(egeSection(6).previewNumber,7);assert.equal(egeSection(7).previewNumber,8);assert.equal(egeSection(8).previewNumber,9);
  assert.equal(egeSection(12).previewNumber,17);assert.equal(egeSection(16).previewNumber,13);
});

test('existing progress is shown under the previous topic number without changing module IDs', async () => {
  const db = { all: async () => [
    { module: '13', taskId: 1 }, { module: '15', taskId: 101 },
    { module: '16', taskId: 1 }, { module: '18', taskId: 1 },
    { module: '19', taskId: 1 }, { module: 'ege-optimization', taskId: 1 }, { module: '19-intro', taskId: 1 },
    { module: 'olympiad-1-main', taskId: 1 },
  ] };
  assert.deepEqual(await getEgeProgress(db, 'student'), [
    {section: 13, taskId: 1}, {section: 15, taskId: 101},
    {section: 16, taskId: 1}, {section: 18, taskId: 1}, {section: 19, taskId: 1}, {section:16,taskId:1},
  ]);
});

test('all 14 additional problems preserve their own progress IDs', () => {
  for (let id = 1; id <= 14; id++) assert.equal(isTaskInModule('ege-optimization', id), true);
  assert.equal(isTaskInModule('ege-optimization', 15), false);
  for (let id = 1; id <= 14; id++) assert.ok(!legacyCandidates(id).some(item => item.module === 'ege-optimization'));
});
