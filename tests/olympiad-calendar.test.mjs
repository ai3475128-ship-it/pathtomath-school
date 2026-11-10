import test from 'node:test';
import assert from 'node:assert/strict';
import { olympiads, events, registryUrl } from '../src/lib/olympiad-calendar.js';

test('all 20 listed mathematics olympiads have unique IDs, levels and organizer links', () => {
  assert.equal(olympiads.length, 20);
  assert.equal(new Set(olympiads.map((o) => o.id)).size, olympiads.length);
  assert.deepEqual(['I', 'II', 'III'].map((level) => olympiads.filter((o) => o.level === level).length), [8, 7, 5]);
  for (const olympiad of olympiads) {
    assert.equal(new URL(olympiad.url).protocol, 'https:');
    assert.notEqual(olympiad.url, registryUrl);
  }
});

test('calendar dates are ordered, refer to known olympiads and have a source', () => {
  for (const event of events) {
    assert.ok(olympiads.some((o) => o.id === event.olympiad));
    assert.match(event.start, /^\d{4}-\d{2}-\d{2}$/);
    assert.match(event.end, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(event.start <= event.end);
    assert.equal(new URL(event.source).protocol, 'https:');
  }
});

test('sitemap only advertises the public origin when configured', async () => {
  const { default: sitemap } = await import('../src/app/sitemap.js');
  const previous = process.env.APP_ORIGIN;
  try {
    delete process.env.APP_ORIGIN;
    assert.deepEqual(sitemap(), []);
    process.env.APP_ORIGIN = 'https://school.example.test';
    assert.ok(sitemap().some((entry) => entry.url === 'https://school.example.test/olympiad-calendar'));
  } finally {
    if (previous === undefined) delete process.env.APP_ORIGIN;
    else process.env.APP_ORIGIN = previous;
  }
});
