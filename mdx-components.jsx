import React from 'react';
import ChartPreview from './src/components/ChartPreview';
import Admonition from './src/components/Admonition';

export function useMDXComponents(components) {
  return {
    ChartPreview,
    Admonition,
    h1: ({ children }) => (
      <h1 className="text-3xl font-semibold tracking-tight text-[var(--ifm-font-color-base)] mb-5 mt-2 border-b border-[var(--border-color)] pb-3">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold tracking-tight text-[var(--ifm-font-color-base)] mt-10 mb-4 border-b border-[var(--border-color)] pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-[var(--ifm-font-color-base)] mt-6 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-base font-semibold text-[var(--ifm-font-color-base)] mt-4 mb-2">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-[var(--ifm-font-color-base)] leading-[1.65] mb-4 text-base opacity-95">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-1.5 mb-4 text-[var(--ifm-font-color-base)] pl-2 text-base leading-[1.65]">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-1.5 mb-4 text-[var(--ifm-font-color-base)] pl-2 text-base leading-[1.65]">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-[var(--ifm-font-color-base)] opacity-95">
        {children}
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[var(--ifm-color-primary)] bg-[var(--ifm-background-surface-color)] px-4 py-3 rounded-r-md my-4 italic text-[var(--ifm-font-color-base)] opacity-90">
        {children}
      </blockquote>
    ),
    table: ({ children }) => (
      <div className="docs-table-wrapper">
        <table className="docs-table">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead>
        {children}
      </thead>
    ),
    th: ({ children }) => (
      <th>
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td>
        {children}
      </td>
    ),
    code: ({ children, className }) => {
      const isInline = !className;
      if (isInline) {
        return (
          <code className="px-1.5 py-0.5 rounded bg-[var(--code-bg)] border border-[var(--border-color)] text-[var(--ifm-color-primary)] font-mono text-[13px]">
            {children}
          </code>
        );
      }
      return <code className={className}>{children}</code>;
    },
    pre: ({ children }) => (
      <pre className="p-4 rounded-lg bg-[var(--code-bg)] border border-[var(--border-color)] overflow-x-auto my-4 text-[13.5px] font-mono text-[var(--ifm-font-color-base)] leading-relaxed">
        {children}
      </pre>
    ),
    hr: () => <hr className="my-8 border-[var(--border-color)]" />,
    a: ({ href, children }) => (
      <a
        href={href}
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="text-[var(--ifm-color-primary)] hover:underline font-medium transition-colors"
      >
        {children}
      </a>
    ),
    ...components,
  };
}
