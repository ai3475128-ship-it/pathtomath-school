import React from 'react';

export default function GraphDiagram({ diagram, taskId }) {
  return (
    <div className="rounded-2xl bg-white p-3 sm:p-5">
      <svg role="img" aria-label={`График к задаче ${taskId}`}
        viewBox={`0 ${diagram.y} ${diagram.width} ${diagram.height}`}
        width={diagram.width} height={diagram.height}
        className="mx-auto h-auto w-full" style={{ maxWidth: 420 }}>
        <image href={diagram.src} x="0" y="0" width={diagram.sheetWidth} height={diagram.sheetHeight} />
      </svg>
    </div>
  );
}
