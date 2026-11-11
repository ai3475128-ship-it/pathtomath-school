import test from 'node:test';
import assert from 'node:assert/strict';
import { paginateTasks } from '../src/lib/task-pagination.js';

test('every task remains accessible in order on pages of twenty, including filtered lists', () => {
  for (const count of [0, 1, 19, 20, 21, 44, 101, 200]) {
    const tasks = Array.from({ length: count }, (_, id) => ({ id: id * 2 + 1 }));
    const pages = Math.max(1, Math.ceil(count / 20));
    assert.equal(paginateTasks(tasks, 1).pageCount, pages);
    const shown = Array.from({ length: pages }, (_, i) => paginateTasks(tasks, i + 1).items).flat();
    assert.deepEqual(shown, tasks);
    assert.equal(paginateTasks(tasks, pages + 10).activePage, pages);
    assert.equal(paginateTasks(tasks, 0).activePage, 1);
  }
});
