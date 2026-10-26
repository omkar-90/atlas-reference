import React from 'react';

export default function MathBlock({ formula, name, note }) {
  return (
    <div className="my-5 rounded-lg border border-[var(--border-color)] bg-[var(--ifm-background-surface-color)] p-4">
      {name && (
        <div className="text-xs font-mono uppercase tracking-wider text-[var(--ifm-color-emphasis-700)] mb-2 border-b border-[var(--border-color)] pb-1 flex justify-between items-center">
          <span>{name}</span>
          <span className="text-[11px] font-sans lowercase opacity-75">formulation</span>
        </div>
      )}
      <div className="text-center py-2 text-[var(--ifm-font-color-base)] overflow-x-auto text-base">
        {formula}
      </div>
      {note && (
        <p className="mt-2 text-xs text-[var(--ifm-color-emphasis-700)] italic text-center">
          {note}
        </p>
      )}
    </div>
  );
}
