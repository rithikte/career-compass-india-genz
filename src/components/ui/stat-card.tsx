import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type GradientVariant = 'primary' | 'success' | 'accent';

interface StatCardProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
  sublabel?: string;
  gradient?: GradientVariant;
  className?: string;
}

const gradientClasses: Record<GradientVariant, string> = {
  primary: 'from-primary to-accent',
  success: 'from-success to-success/80',
  accent: 'from-destructive to-warning'
};

export const StatCard = ({ 
  icon: Icon, 
  value, 
  label, 
  sublabel,
  gradient = 'primary',
  className 
}: StatCardProps) => (
  <div className={cn(
    "relative overflow-hidden rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300",
    "bg-gradient-to-br",
    gradientClasses[gradient],
    className
  )}>
    <div className="relative z-10">
      <Icon className="w-8 h-8 mb-4 opacity-90" />
      <div className="text-3xl sm:text-4xl font-bold mb-2">{value}</div>
      <div className="text-sm font-medium opacity-90">{label}</div>
      {sublabel && (
        <div className="text-xs opacity-75 mt-1">{sublabel}</div>
      )}
    </div>
    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
  </div>
);
