import React from 'react';

// Mapping each channel to 2R − G turns the blue curve black while preserving
// grayscale pixels: for R = G, the output is still exactly R.
const BLACK_CURVE_MATRIX = '2 -1 0 0 0  2 -1 0 0 0  2 -1 0 0 0  0 0 0 1 0';

export default function DerivativeDiagram({ diagram, taskId }) {
  const filterId = `derivative-black-curve-${taskId}`;
  return (
    <div className="rounded-2xl bg-white p-3 sm:p-5">
      <svg role="img" aria-label={`График к задаче ${taskId}`} width={diagram.width} height={diagram.height} viewBox={`0 ${diagram.y} ${diagram.width} ${diagram.height}`} className="mx-auto h-auto w-full" style={{maxWidth: Math.min(diagram.width, 700)}}>
        <defs>
          <filter id={filterId} colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values={BLACK_CURVE_MATRIX} />
          </filter>
        </defs>
        <image href={diagram.src} x="0" y="0" width={diagram.sheetWidth} height={diagram.sheetHeight} filter={`url(#${filterId})`} />
      </svg>
    </div>
  );
}
