'use client';
import React, { useState } from 'react';
import { BookOpen, ExternalLink, Copy, Check, Award } from 'lucide-react';

function formatDoiLabel(doi) {
  if (!doi) return '';
  if (doi.startsWith('10.') || doi.startsWith('http://doi.org/') || doi.startsWith('https://doi.org/')) {
    const cleanDoi = doi.replace(/^https?:\/\/doi\.org\//, '');
    return `DOI: ${cleanDoi}`;
  }
  try {
    const url = new URL(doi);
    if (url.hostname.includes('wiley.com')) return 'Publisher Catalog (Wiley)';
    if (url.hostname.includes('springer.com')) return 'Publisher Entry (Springer)';
    if (url.hostname.includes('archive.org')) return 'Digital Archive (Archive.org)';
    if (url.hostname.includes('dynardo.de')) return 'Conference Paper (PDF)';
    if (url.hostname.includes('stat.purdue.edu')) return 'Author Monograph (Purdue)';
    if (url.hostname.includes('conservancy.umn.edu')) return 'University Digital Conservancy';
    return `Source (${url.hostname.replace('www.', '')})`;
  } catch (e) {
    return 'View Source Reference';
  }
}

export default function CitationCard({
  title,
  authors,
  source,
  year,
  doi,
  indexing = 'Scopus Q1',
  bibtex,
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (bibtex) {
      navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const linkLabel = formatDoiLabel(doi);
  const targetHref = doi?.startsWith('http') ? doi : `https://doi.org/${doi}`;

  return (
    <div className="my-4 rounded-lg border border-[var(--border-color)] bg-[var(--ifm-background-card-color)] p-4 transition-colors overflow-hidden">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[var(--ifm-color-primary)] flex-shrink-0" />
          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[var(--ifm-background-surface-color)] text-[var(--ifm-color-primary)] border border-[var(--border-color)] flex items-center gap-1 font-mono">
            <Award className="w-3 h-3" />
            {indexing}
          </span>
          <span className="text-xs text-[var(--ifm-color-emphasis-700)] font-mono">({year})</span>
        </div>
        {bibtex && (
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs text-[var(--ifm-color-emphasis-700)] hover:text-[var(--ifm-font-color-base)] bg-[var(--ifm-background-surface-color)] px-2.5 py-1 rounded border border-[var(--border-color)] hover:border-[var(--ifm-color-emphasis-700)] transition-colors"
            title="Copy BibTeX citation"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-500 font-medium">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy BibTeX</span>
              </>
            )}
          </button>
        )}
      </div>

      <h4 className="text-base font-semibold text-[var(--ifm-font-color-base)] mb-1 leading-snug">
        {title}
      </h4>

      <p className="text-sm text-[var(--ifm-font-color-base)] mb-1 opacity-90">
        <span className="text-[var(--ifm-color-emphasis-700)]">Authors: </span>
        {authors}
      </p>

      <p className="text-xs text-[var(--ifm-color-emphasis-700)] italic mb-2.5">
        {source}
      </p>

      {doi && (
        <div className="pt-1">
          <a
            href={targetHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--ifm-color-primary)] hover:underline transition-colors max-w-full"
          >
            <span className="truncate">{linkLabel}</span>
            <ExternalLink className="w-3 h-3 flex-shrink-0" />
          </a>
        </div>
      )}
    </div>
  );
}
