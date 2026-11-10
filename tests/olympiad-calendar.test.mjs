import test from 'node:test';
import assert from 'node:assert/strict';
import { olympiads, events, registryUrl, orderOlympiadsByDates } from '../src/lib/olympiad-calendar.js';

test('all listed olympiads have unique IDs, levels and organizer links', () => {
  assert.equal(olympiads.length, 21);
  assert.equal(new Set(olympiads.map((o) => o.id)).size, olympiads.length);
  assert.deepEqual(['I', 'II', 'III'].map((level) => olympiads.filter((o) => o.level === level).length), [8, 8, 5]);
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


test('known dates come before missing dates and each olympiad retains its stages', () => {
  const sample = [{ id: 'no-date' }, { id: 'past' }, { id: 'active' }, { id: 'later' }];
  const dates = [
    { id: 'past-stage', olympiad: 'past', start: '2026-01-01', end: '2026-01-02' },
    { id: 'active-stage', olympiad: 'active', start: '2026-11-01', end: '2026-11-23' },
    { id: 'later-stage', olympiad: 'later', start: '2026-12-01', end: '2026-12-02' },
    { id: 'active-final', olympiad: 'active', start: '2026-11-29', end: '2026-11-29' },
  ];
  const result = orderOlympiadsByDates(sample, dates, '2026-11-10');
  assert.deepEqual(result.map((item) => item.id), ['active', 'later', 'past', 'no-date']);
  assert.deepEqual(result[0].dates.map((date) => date.id), ['active-stage', 'active-final']);
  assert.equal(result[3].dates.length, 0);
  assert.equal(new Set(result.map((item) => item.id)).size, sample.length);
});
