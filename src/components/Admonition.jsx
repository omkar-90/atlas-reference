import React from 'react';
import { Info, Lightbulb, AlertTriangle, AlertOctagon } from 'lucide-react';

const ADMONITION_CONFIGS = {
  info: {
    icon: Info,
    title: 'Info',
    borderClass: 'border-[var(--admonition-info-border)]',
    bgClass: 'bg-[var(--admonition-info-bg)]',
    textClass: 'text-[var(--admonition-info-text)]',
    iconColor: 'var(--admonition-info-border)',
  },
  tip: {
    icon: Lightbulb,
    title: 'Tip',
    borderClass: 'border-[var(--admonition-tip-border)]',
    bgClass: 'bg-[var(--admonition-tip-bg)]',
    textClass: 'text-[var(--admonition-tip-text)]',
    iconColor: 'var(--admonition-tip-border)',
  },
  caution: {
    icon: AlertTriangle,
    title: 'Caution',
    borderClass: 'border-[var(--admonition-caution-border)]',
    bgClass: 'bg-[var(--admonition-caution-bg)]',
    textClass: 'text-[var(--admonition-caution-text)]',
    iconColor: 'var(--admonition-caution-border)',
  },
  danger: {
    icon: AlertOctagon,
    title: 'Danger',
    borderClass: 'border-[var(--admonition-danger-border)]',
    bgClass: 'bg-[var(--admonition-danger-bg)]',
    textClass: 'text-[var(--admonition-danger-text)]',
    iconColor: 'var(--admonition-danger-border)',
  },
};

export default function Admonition({ type = 'info', title, children }) {
  const config = ADMONITION_CONFIGS[type] || ADMONITION_CONFIGS.info;
  const Icon = config.icon;
  const displayTitle = title || config.title;

  return (
    <div className={`my-5 rounded-lg border-l-4 ${config.borderClass} ${config.bgClass} p-4 border border-t-0 border-r-0 border-b-0`}>
      <div className="flex items-center gap-2 mb-1.5 font-semibold text-sm" style={{ color: config.iconColor }}>
        <Icon className="w-4 h-4 flex-shrink-0" />
        <span className="uppercase tracking-wide text-xs">{displayTitle}</span>
      </div>
      <div className={`text-sm leading-relaxed ${config.textClass}`}>
        {children}
      </div>
    </div>
  );
}

