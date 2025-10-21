import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}

export const SectionHeader = ({ title, subtitle, children, className }: SectionHeaderProps) => (
  <div className={cn("text-center mb-8 sm:mb-12 px-4", className)}>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
    {children}
  </div>
);
