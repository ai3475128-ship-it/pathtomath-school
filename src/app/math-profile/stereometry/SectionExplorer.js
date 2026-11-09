'use client';

import { useId, useRef, useState } from 'react';
import { buildSectionSteps, pickEdge, pointOnEdge, projectSolid, projectToEdge, sliceSolid, solids, viewHeight, viewWidth } from './geometry';
import styles from './section-explorer.module.css';

const pointNames = ['P', 'Q', 'R'];
const initialView = { yaw: 0.64, pitch: 0.46 };
const examplePoints = solid => solid.example.map(edge => ({ edge, percent: 50 }));
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const svgPoints = points => points.map(({ x, y }) => `${x},${y}`).join(' ');
const sectionNames = ['Нет пересечения', 'Касание в вершине', 'Касание по ребру', 'Сечение — треугольник',
  'Сечение — четырёхугольник', 'Сечение — пятиугольник', 'Сечение — шестиугольник'];

function constructionViewBox(guidePoints) {
  const left = Math.min(0, ...guidePoints.map(point => point.x - 24));
  const top = Math.min(0, ...guidePoints.map(point => point.y - 24));
  const right = Math.max(viewWidth, ...guidePoints.map(point => point.x + 24));
  const bottom = Math.max(viewHeight, ...guidePoints.map(point => point.y + 24));
  return `${left} ${top} ${right - left} ${bottom - top}`;
}

function ConstructionLines({ steps, current, project }) {
  return (
    <g className={styles.constructionLines} aria-hidden="true">
      {current?.guides.map((line, i) => <polyline key={i} className={styles.guide} points={svgPoints(line.map(project))} />)}
      {steps.flatMap(step => step.segments).map((line, i) => (
        <polyline key={i} className={styles.trace} points={svgPoints(line.map(point => project(point.position)))} />
      ))}
      {[...steps.flatMap(step => step.vertices), ...(current?.auxiliary ?? [])].map(({ position, name, auxiliary }) => {
        const { x, y } = project(position);
        return (
          <g key={name} className={auxiliary ? styles.auxiliaryPoint : styles.tracePoint}>
            <circle cx={x} cy={y} r={3.5} />
            <text x={x + (x < viewWidth / 2 ? -13 : 13)} y={y - 12}>{name}</text>
          </g>
        );
      })}
    </g>
  );
}

export default function SectionExplorer() {
  const hintId = useId();
  const drag = useRef(null);
  const [solidId, setSolidId] = useState('cube');
  const [points, setPoints] = useState(() => examplePoints(solids.cube));
  const [activePoint, setActivePoint] = useState(0);
  const [shift, setShift] = useState(0);
  const [camera, setCamera] = useState(initialView);
  const [zoom, setZoom] = useState(100);
  const [sectionView, setSectionView] = useState(false);
  const [stepIndex, setStepIndex] = useState(null);
  const [dragViewBox, setDragViewBox] = useState(null);

  const solid = solids[solidId];
  const positions = points.map(point => point && pointOnEdge(solid, point));
  const section = sliceSolid(solid, positions, shift);
  const missing = positions.filter(point => !point).length;
  let currentView = camera;
  if (sectionView && section) {
    const [x, y, z] = section.normal;
    currentView = { yaw: Math.atan2(x, z), pitch: Math.asin(clamp(y, -1, 1)) };
  }
  const scene = projectSolid(solid, currentView, zoom);
  const outline = section?.vertices.map(scene.project) ?? [];
  const building = stepIndex !== null;
  const steps = building ? buildSectionSteps(solid, positions, section) : [];
  const step = steps[stepIndex];
  const visibleSteps = steps.slice(0, stepIndex + 1);
  const showFill = !building || stepIndex === steps.length || (step && !step.segments.length);
  const viewBox = dragViewBox ?? constructionViewBox(step?.guides.flat().map(scene.project) ?? []);

  function resetPoints(nextPoints) {
    setPoints(nextPoints);
    setActivePoint(0);
    setShift(0);
    setSectionView(false);
    setStepIndex(value => value === null ? null : 0);
  }

  function updatePoint(index, point) {
    setPoints(previous => previous.map((value, i) => i === index ? point : value));
    setShift(0);
    setSectionView(false);
    setStepIndex(value => value === null ? null : 0);
  }

  function resetView() {
    setCamera(initialView);
    setZoom(100);
    setSectionView(false);
  }

  function rotate(view, dx, dy) {
    setCamera({ yaw: view.yaw + dx, pitch: clamp(view.pitch + dy, -Math.PI / 2, Math.PI / 2) });
    setSectionView(false);
  }

  function startDrag(event) {
    if (!event.isPrimary || event.button !== 0) return;
    const { pointerId, clientX, clientY } = event;
    const transform = event.currentTarget.getScreenCTM()?.inverse();
    if (!transform) return;
    const marker = event.target.closest('[data-section-point]');
    const { x, y } = new DOMPoint(clientX, clientY).matrixTransform(transform);
    const point = marker ? points[Number(marker.dataset.sectionPoint)] : pickEdge(scene.edges, x, y);
    const index = marker ? Number(marker.dataset.sectionPoint) : activePoint;
    const edge = point && scene.edges.find(item => item.id === point.edge);
    if (marker) setActivePoint(index);
    if (point && building) setDragViewBox(viewBox);
    event.currentTarget.setPointerCapture(pointerId);
    drag.current = { pointerId, clientX, clientY, view: currentView, moved: false, transform, point, index, edge, marker };
  }

  function movePoint(event, start) {
    const { x, y } = new DOMPoint(event.clientX, event.clientY).matrixTransform(start.transform);
    const projection = projectToEdge(start.edge, x, y);
    if (!projection) return;
    setCamera(start.view);
    updatePoint(start.index, { edge: start.point.edge, percent: projection.percent });
  }

  function moveDrag(event) {
    const start = drag.current;
    if (start?.pointerId !== event.pointerId) return;
    const dx = event.clientX - start.clientX;
    const dy = event.clientY - start.clientY;
    if (Math.hypot(dx, dy) > 5) start.moved = true;
    if (!start.moved) return;
    if (start.edge) movePoint(event, start);
    else rotate(start.view, -dx * 0.009, dy * 0.009);
  }

  function finishDrag(event) {
    const start = drag.current;
    if (start?.pointerId !== event.pointerId) return;
    clearDrag();
    if (!start.edge) return;
    if (start.moved || Math.hypot(event.clientX - start.clientX, event.clientY - start.clientY) > 5) {
      movePoint(event, start);
    } else if (!start.marker) {
      setCamera(start.view);
      updatePoint(start.index, start.point);
    }
    if (!start.marker) {
      const next = points.findIndex((point, i) => !point && i !== start.index);
      if (next !== -1) setActivePoint(next);
    }
  }

  function clearDrag() {
    drag.current = null;
    setDragViewBox(null);
  }

  function toggleConstruction() {
    setShift(0);
    setStepIndex(building ? null : 0);
  }

  function useArrowKeys(event) {
    const steps = { ArrowLeft: [0.12, 0], ArrowRight: [-0.12, 0], ArrowUp: [0, -0.12], ArrowDown: [0, 0.12] };
    if (Object.hasOwn(steps, event.key)) {
      event.preventDefault();
      rotate(currentView, ...steps[event.key]);
    } else if (event.key === '+' || event.key === '=' || event.key === '-') {
      event.preventDefault();
      setZoom(value => clamp(value + (event.key === '-' ? -5 : 5), 65, 115));
    }
  }

  const status = section ? sectionNames[outline.length] : missing
    ? `Отмечено точек: ${3 - missing} из 3`
    : 'Точки лежат на одной прямой';

  return (
    <details className={styles.explorer}>
      <summary className={styles.heading}>
        <span>
          <span className={styles.title}>3D-конструктор</span>
          <span className={styles.subtitle}>Вращайте многогранники и стройте сечения по трём точкам.</span>
        </span>
        <span className={styles.chevron} aria-hidden="true" />
      </summary>
      <div className={styles.workbench}>
        <div className={styles.stage}>
          <div className={styles.viewport} role="group" aria-label="Управление моделью" aria-describedby={hintId}
            tabIndex={0} onKeyDown={useArrowKeys}>
            <svg className={styles.scene} viewBox={viewBox} role="img"
              aria-label={`${solid.name}. ${status}.`}
              onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={finishDrag}
              onLostPointerCapture={clearDrag}>
              {solid.faces.map(({ indices }, i) => scene.faces[i] && (
                <polygon className={styles.face} key={i} points={svgPoints(indices.map(index => scene.vertices[index]))} />
              ))}
              {scene.edges.filter(edge => !edge.visible).map(({ id, a, b }) => (
                <line key={id} className={styles.hiddenEdge} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
              ))}
              {step && <polygon className={styles.constructionFace} points={svgPoints(step.face.map(index => scene.vertices[index]))} />}
              {showFill && outline.length >= 2 && (
                <polygon className={styles.section} points={svgPoints(outline)} data-section-sides={outline.length} />
              )}
              {showFill && outline.length === 1 && <circle className={styles.section} cx={outline[0].x} cy={outline[0].y} r={4} />}
              {scene.edges.filter(edge => edge.visible).map(({ id, a, b }) => (
                <line key={id} className={styles.edge} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
              ))}
              {building && <ConstructionLines steps={visibleSteps} current={step} project={scene.project} />}
              {!sectionView && scene.vertices.map(({ x, y }, i) => (
                <text key={i} className={styles.vertex} x={x + (x < viewWidth / 2 ? -13 : 13)}
                  y={y + (y < viewHeight / 2 ? -9 : 9)}>{solid.labels[i]}</text>
              ))}
              {positions.map((point, i) => {
                if (!point) return null;
                const { x, y } = scene.project(point);
                return (
                  <g key={i} className={i === activePoint ? styles.activeMarker : styles.marker} data-section-point={i}>
                    <circle className={styles.pointTarget} cx={x} cy={y} r={13} />
                    <circle className={styles.pointDot} cx={x} cy={y} r={i === activePoint ? 5.5 : 4.5} />
                    <text x={x + (i === 1 ? -12 : 12)} y={y + (i === 2 ? 13 : -11)}>{pointNames[i]}</text>
                  </g>
                );
              })}
            </svg>
          </div>
          <p id={hintId} className={styles.hint}>Нажмите на ребро, чтобы поставить точку {pointNames[activePoint]}, или перетащите уже отмеченную точку вдоль ребра. Вращайте фигуру перетаскиванием свободной области. На клавиатуре работают стрелки и +/−.</p>
          <div className={styles.viewControls}>
            <button type="button" disabled={!section && !building} aria-pressed={building}
              onClick={toggleConstruction}>Пошаговое построение</button>
            <label className={styles.zoom}>Масштаб
              <input type="range" min="65" max="115" value={zoom} onChange={event => setZoom(Number(event.target.value))} />
            </label>
            <button type="button" onClick={resetView}>Сбросить вид</button>
          </div>
          {building && (
            <div className={styles.stepPanel}>
              <div aria-live="polite">
                <p className={styles.stepTitle}>{step ? `Шаг ${stepIndex + 1} из ${steps.length}` : 'Пошаговое построение'}</p>
                <p>{step?.message ?? (steps.length ? 'Сечение готово.' : 'Отметьте три точки, которые не лежат на одной прямой.')}</p>
              </div>
              {step?.guides.length > 0 && <p className={styles.hint}>Пунктиром показаны вспомогательные прямые.</p>}
              <div className={styles.actions}>
                <button type="button" disabled={stepIndex === 0} onClick={() => setStepIndex(stepIndex - 1)}>Назад</button>
                <button type="button" disabled={stepIndex === steps.length} onClick={() => setStepIndex(stepIndex + 1)}>
                  {stepIndex + 1 === steps.length ? 'Показать сечение' : 'Далее'}
                </button>
              </div>
            </div>
          )}
        </div>
        <div className={styles.controls}>
          <label className={styles.field}>Фигура
            <select value={solidId} onChange={event => {
              const nextId = event.target.value;
              setSolidId(nextId);
              resetPoints(examplePoints(solids[nextId]));
              resetView();
            }}>
              {Object.entries(solids).map(([id, figure]) => <option key={id} value={id}>{figure.name}</option>)}
            </select>
          </label>
          <fieldset className={styles.points}>
            <legend>Точки сечения</legend>
            {points.map((point, i) => (
              <div className={styles.pointRow} key={pointNames[i]}>
                <button type="button" className={styles.pointName} aria-pressed={activePoint === i}
                  aria-label={`Поставить точку ${pointNames[i]} на рисунке`} onClick={() => setActivePoint(i)}>{pointNames[i]}</button>
                <select aria-label={`Ребро для точки ${pointNames[i]}`} value={point?.edge ?? ''}
                  onChange={event => updatePoint(i, event.target.value ? { edge: event.target.value, percent: 50 } : null)}>
                  <option value="">Выбрать ребро</option>
                  {Object.entries(solid.edges).map(([id, edge]) => <option key={id} value={id}>{edge.name}</option>)}
                </select>
                <label className={styles.pointPosition}>
                  <input type="range" aria-label={`Положение точки ${pointNames[i]} вдоль ребра`} disabled={!point}
                    min="0" max="100" value={point?.percent ?? 50}
                    onChange={event => updatePoint(i, { ...point, percent: Number(event.target.value) })} />
                  <span>{point ? `${point.percent}%` : '—'}</span>
                </label>
              </div>
            ))}
            <div className={styles.actions}>
              <button type="button" onClick={() => resetPoints(examplePoints(solid))}>Показать пример</button>
              <button type="button" onClick={() => resetPoints([null, null, null])}>Очистить точки</button>
            </div>
          </fieldset>
          <div className={styles.cutControls}>
            <p className={styles.status} role="status">{status}</p>
            <label className={styles.field}>Сдвиг плоскости
              <input type="range" min="-100" max="100" value={shift} disabled={!section || building}
                aria-valuetext={shift === 0 ? 'Через точки P, Q и R' : `${shift}%`}
                onChange={event => setShift(Number(event.target.value))} />
            </label>
            {shift !== 0 && <p className={styles.hint}>Точки P, Q и R задают исходное положение.</p>}
            <div className={styles.actions}>
              <button type="button" disabled={!section} aria-pressed={sectionView}
                onClick={() => setSectionView(value => !value)}>Вид на сечение</button>
              <button type="button" disabled={shift === 0} onClick={() => setShift(0)}>Вернуть плоскость</button>
            </div>
          </div>
        </div>
      </div>
    </details>
  );
}
