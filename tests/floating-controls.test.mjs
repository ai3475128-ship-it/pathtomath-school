import test from 'node:test';
import assert from 'node:assert/strict';
import { observeCookieSurface } from '../src/lib/floating-controls.js';

function fakeBrowser(viewport, top, withObserver = true) {
  const properties = new Map(), handlers = new Map();
  const surface = { top, getBoundingClientRect() { return { top: this.top }; } };
  const win = {
    innerHeight: viewport,
    document: { documentElement: { style: {
      setProperty(name, value) { properties.set(name, value); },
      removeProperty(name) { properties.delete(name); },
    } } },
    addEventListener(name, fn) { handlers.set(name, fn); },
    removeEventListener(name, fn) { if (handlers.get(name) === fn) handlers.delete(name); },
  };
  let observer;
  if (withObserver) win.ResizeObserver = class {
    constructor(callback) { this.callback = callback; observer = this; }
    observe(element) { assert.equal(element, surface); }
    disconnect() { this.disconnected = true; }
  };
  return { win, surface, properties, handlers, get observer() { return observer; } };
}

test('report trigger remains above either cookie surface while the viewport or surface changes', () => {
  for (const [viewport, top] of [[900, 850], [900, 610], [500, 260], [320, 140]]) {
    const f = fakeBrowser(viewport, top);
    const dispose = observeCookieSurface(f.surface, f.win);
    const bottom = Number.parseInt(f.properties.get('--cookie-surface-offset'));
    assert.ok(viewport - bottom <= top - 12);
    f.surface.top = Math.max(30, top - 40);
    f.observer.callback();
    const resizedBottom = Number.parseInt(f.properties.get('--cookie-surface-offset'));
    assert.ok(viewport - resizedBottom <= f.surface.top - 12);
    f.win.innerHeight = viewport + 50;
    f.handlers.get('resize')();
    assert.equal(Number.parseInt(f.properties.get('--cookie-surface-offset')), Math.ceil(f.win.innerHeight - f.surface.top + 12));
    dispose();
    assert.equal(f.observer.disconnected, true);
    assert.equal(f.handlers.size, 0);
    assert.equal(f.properties.size, 0);
  }
});

test('offset also follows window resizing when ResizeObserver is unavailable', () => {
  const f = fakeBrowser(800, 720, false);
  const dispose = observeCookieSurface(f.surface, f.win);
  assert.equal(f.properties.get('--cookie-surface-offset'), '92px');
  f.surface.top = 600;
  f.handlers.get('resize')();
  assert.equal(f.properties.get('--cookie-surface-offset'), '212px');
  dispose();
});
