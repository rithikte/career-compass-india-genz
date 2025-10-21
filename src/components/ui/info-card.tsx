import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InfoCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  children?: React.ReactNode;
  className?: string;
}

export const InfoCard = ({ 
  title, 
  description, 
  icon: Icon, 
  children,
  className 
}: InfoCardProps) => (
  <div className={cn(
    "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700",
    "rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300",
    "hover:scale-[1.02]",
    className
  )}>
    {Icon && <Icon className="w-8 h-8 text-primary mb-4" />}
    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3">
      {title}
    </h3>
    <p className="text-slate-700 dark:text-slate-300 mb-4">
      {description}
    </p>
    {children}
  </div>
);
