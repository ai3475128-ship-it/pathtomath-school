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
    if (event.end) {
      assert.match(event.end, /^\d{4}-\d{2}-\d{2}$/);
      assert.ok(event.start <= event.end);
    }
    assert.ok(event.kinds.length > 0);
    assert.ok(event.kinds.every((kind) => ['registration', 'qualifying', 'final'].includes(kind)));
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


test('sorting follows the next relevant deadline and only confirmed completed finals go last', () => {
  const sample = [
    { id: 'no-date', name: 'Без дат' },
    { id: 'completed', name: 'Завершена' },
    { id: 'past-qualifier', name: 'Финал неизвестен' },
    { id: 'active', name: 'Активна' },
    { id: 'upcoming', name: 'Скоро' },
    { id: 'tentative', name: 'Финал предварительный' },
  ];
  const dates = [
    { id: 'complete-final', olympiad: 'completed', kinds: ['final'], start: '2026-01-01', end: '2026-01-02' },
    { id: 'past-qual', olympiad: 'past-qualifier', kinds: ['qualifying'], start: '2026-01-01', end: '2026-01-02' },
    { id: 'active-stage', olympiad: 'active', kinds: ['qualifying'], start: '2026-11-01', end: '2026-11-23' },
    { id: 'active-final', olympiad: 'active', kinds: ['final'], start: '2026-11-29', end: '2026-11-29' },
    { id: 'soon', olympiad: 'upcoming', kinds: ['registration'], start: '2026-11-12', end: '2026-11-15' },
    { id: 'tentative-final', olympiad: 'tentative', kinds: ['final'], tentative: true, start: '2026-01-01', end: '2026-01-02' },
  ];
  const result = orderOlympiadsByDates(sample, dates, '2026-11-10');
  assert.deepEqual(result.map((item) => item.id), ['upcoming', 'active', 'no-date', 'past-qualifier', 'tentative', 'completed']);
  assert.deepEqual(result.find((item) => item.id === 'active').dates.map((date) => date.id), ['active-stage', 'active-final']);
  assert.equal(result.find((item) => item.id === 'past-qualifier').completed, false);
  assert.equal(result.find((item) => item.id === 'tentative').completed, false);
  assert.equal(result.at(-1).completed, true);
  const nextDay = orderOlympiadsByDates(sample, dates, '2026-11-30');
  assert.equal(nextDay.find((item) => item.id === 'active').completed, true);
  const finalDay = orderOlympiadsByDates(sample, dates, '2026-11-29');
  assert.equal(finalDay.find((item) => item.id === 'active').completed, false);
});

test('registration with an unknown closing date does not imply completion', () => {
  const result = orderOlympiadsByDates([{ id: 'pvg', name: 'Покори Воробьёвы горы!' }], events, '2026-12-05');
  assert.equal(result[0].completed, false);
  assert.equal(result[0].nextDate, undefined);
  assert.equal(result[0].dates[0].end, null);
});
