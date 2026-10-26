import React from 'react';

export default function ChartPreview({ children, caption, alt }) {
  return (
    <figure className="chart-preview">
      <div className="w-full flex justify-center items-center">
        {children}
      </div>
      {caption && (
        <figcaption className="chart-preview-caption">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

