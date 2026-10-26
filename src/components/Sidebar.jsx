'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Table,
  Grid,
  Sliders,
  Network,
  BarChart3,
  GitBranch,
  Target,
  Cpu,
  Layers,
  LineChart,
  Radio,
  BookMarked,
  Home
} from 'lucide-react';

const PRE_VIS_LINKS = [
  { href: '/visualizations/design-table', label: 'Design Table', icon: Table },
  { href: '/visualizations/correlation', label: 'Correlation Matrix', icon: Grid },
  { href: '/visualizations/sensitivity', label: 'Sensitivity Matrix', icon: Sliders },
  { href: '/visualizations/anthill', label: 'Anthill Plot', icon: Network },
  { href: '/visualizations/histogram', label: 'Histogram & Distributions', icon: BarChart3 },
  { href: '/visualizations/parallel-coordinates', label: 'Parallel Coordinates', icon: GitBranch },
  { href: '/visualizations/spider', label: 'Spider / Radar Chart', icon: Target },
];

const POST_VIS_LINKS = [
  { href: '/post-visualizations/cop-matrix', label: 'CoP Matrix', icon: Cpu },
  { href: '/post-visualizations/response-surface', label: 'Response Surface', icon: Layers },
  { href: '/post-visualizations/residual-plot', label: 'Residual Diagnostics', icon: LineChart },
  { href: '/post-visualizations/signal-plot', label: 'Signal / Field Plot', icon: Radio },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[280px] flex-shrink-0 border-r border-[var(--border-color)] bg-[var(--ifm-background-color)] sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto p-4 hidden md:block transition-colors">
      <div className="mb-5">
        <Link
          href="/"
          className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors ${
            pathname === '/'
              ? 'bg-[var(--ifm-color-primary)] text-white font-medium'
              : 'text-[var(--ifm-font-color-base)] opacity-85 hover:opacity-100 hover:bg-[var(--ifm-background-surface-color)]'
          }`}
        >
          <Home className="w-4 h-4" />
          <span>Documentation Home</span>
        </Link>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 px-3 mb-2 text-xs font-semibold text-[var(--ifm-color-emphasis-700)] uppercase tracking-wider">
          <BookMarked className="w-3.5 h-3.5 text-[var(--ifm-color-primary)]" />
          <span>Pre-Visualization (DoE)</span>
        </div>
        <div className="space-y-0.5">
          {PRE_VIS_LINKS.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors ${
                  isActive
                    ? 'bg-[var(--ifm-background-surface-color)] text-[var(--ifm-color-primary)] font-semibold border-l-2 border-[var(--ifm-color-primary)]'
                    : 'text-[var(--ifm-font-color-base)] opacity-85 hover:opacity-100 hover:bg-[var(--ifm-background-surface-color)]'
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0 text-[var(--ifm-color-emphasis-700)]" />
                <span className="whitespace-normal leading-tight">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 px-3 mb-2 text-xs font-semibold text-[var(--ifm-color-emphasis-700)] uppercase tracking-wider">
          <Cpu className="w-3.5 h-3.5 text-[var(--ifm-color-primary)]" />
          <span>Post-Visualization (Surrogates)</span>
        </div>
        <div className="space-y-0.5">
          {POST_VIS_LINKS.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors ${
                  isActive
                    ? 'bg-[var(--ifm-background-surface-color)] text-[var(--ifm-color-primary)] font-semibold border-l-2 border-[var(--ifm-color-primary)]'
                    : 'text-[var(--ifm-font-color-base)] opacity-85 hover:opacity-100 hover:bg-[var(--ifm-background-surface-color)]'
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0 text-[var(--ifm-color-emphasis-700)]" />
                <span className="whitespace-normal leading-tight">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
