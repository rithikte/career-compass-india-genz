// Centralized chart color configuration
// All chart colors use design system tokens for consistency

export const CHART_COLORS = {
  primary: 'hsl(238 90% 60%)',
  primaryDark: 'hsl(238 85% 50%)',
  accent: 'hsl(275 85% 65%)',
  success: 'hsl(142 76% 42%)',
  warning: 'hsl(38 92% 50%)',
  destructive: 'hsl(0 72% 51%)',
  muted: 'hsl(215 15% 50%)',
};

export const CHART_GRADIENTS = {
  primary: 'url(#gradient-primary)',
  success: 'url(#gradient-success)',
  accent: 'url(#gradient-accent)',
};

// Color array for multi-series charts
export const CHART_COLOR_ARRAY = [
  CHART_COLORS.primary,
  CHART_COLORS.accent,
  CHART_COLORS.success,
  CHART_COLORS.warning,
  CHART_COLORS.destructive,
];
