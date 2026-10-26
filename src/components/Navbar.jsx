'use client';
import React from 'react';
import Link from 'next/link';
import { Compass, BookOpen, Layers, ExternalLink, Github } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-14 border-b border-[var(--border-color)] bg-[var(--ifm-background-color)] px-4 sm:px-6 flex items-center justify-between transition-colors">
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-md bg-[var(--ifm-color-primary)] flex items-center justify-center text-white">
            <Compass className="w-4 h-4" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-semibold text-base text-[var(--ifm-font-color-base)] tracking-tight">
              Atlas
            </span>
            <span className="text-xs text-[var(--ifm-color-emphasis-700)] hidden sm:inline">
              Plots & Charts Reference
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1 pl-4 border-l border-[var(--border-color)] text-sm">
          <Link
            href="/visualizations/design-table"
            className="px-3 py-1.5 rounded-md text-[var(--ifm-font-color-base)] opacity-85 hover:opacity-100 hover:bg-[var(--ifm-background-surface-color)] transition-colors flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5 text-[var(--ifm-color-primary)]" />
            <span>Pre-Visualization</span>
          </Link>
          <Link
            href="/post-visualizations/cop-matrix"
            className="px-3 py-1.5 rounded-md text-[var(--ifm-font-color-base)] opacity-85 hover:opacity-100 hover:bg-[var(--ifm-background-surface-color)] transition-colors flex items-center gap-1.5"
          >
            <Layers className="w-3.5 h-3.5 text-[var(--ifm-color-primary)]" />
            <span>Post-Visualization</span>
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </header>
  );
}
