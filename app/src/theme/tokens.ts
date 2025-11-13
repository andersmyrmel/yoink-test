// Design System Tokens
// Based on design specification

export const colors = {
  // Semantic tokens - backgrounds
  bgPrimary: 'rgb(205, 207, 209)',
  bgElevated: 'rgba(0, 0, 0, 0.06)',
  bgElevated2: 'rgb(238, 239, 241)',

  // Semantic tokens - text
  textMuted: 'rgb(36, 37, 41)',
  textSecondary: 'rgba(0, 0, 0, 0.4)',
  textSecondary2: 'rgba(0, 0, 0, 0.55)',
  textPrimary: 'rgb(229, 238, 255)',
  textDefault: 'rgb(0, 0, 0)',
  textLink: 'rgb(0, 0, 238)',

  // Semantic tokens - borders
  borderDefault: 'rgba(0, 0, 0, 0.05)',
  borderSecondary: 'rgb(230, 231, 234)',

  // Interactive colors
  white: 'rgb(255, 255, 255)',
  interactive1: 'rgb(251, 251, 251)',
  interactive2: 'rgb(38, 109, 240)',

  // Hover states
  hoverYellow: 'rgb(255, 255, 0)',
} as const;

export const typography = {
  fonts: {
    primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },

  sizes: {
    xs: '10px',
    sm: '12px',
    base: '14px',
    lg: '16px',
  },

  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
  },

  lineHeights: {
    tight: '15px',
    normal: '16px',
    relaxed: '20px',
  },
} as const;

export const spacing = {
  px: '1px',
  0.5: '2px',
  0.75: '3px',
  1: '4px',
  1.5: '6px',
  2: '8px',
  2.5: '10px',
  2.75: '11px',
  3: '12px',
  3.5: '14px',
  4: '16px',
  6: '24px',
  12: '48px',
} as const;

export const layout = {
  sidebarWidth: '276px',
  topbarHeight: '49px',
  mainWidth: '1185px',
} as const;

export const borderRadius = {
  sm: '6px',
  md: '8px',
  lg: '9px',
} as const;

export const shadows = {
  default: 'rgba(255, 255, 255, 0) 0px 0px 0px 1px inset, rgba(28, 40, 64, 0.18) 0px 0px 2px 0px, rgba(24, 41, 75, 0.04) 0px 1px 3px 0px',
  hover: 'rgb(255, 255, 0) 0px 2px 10px',
} as const;

export const transitions = {
  default: '0.16s ease',
  color: '0.14s ease-in-out',
  background: '0.2s ease-in-out',
  fast: '0.08s ease-in-out',
  slow: '0.3s ease-in-out',
} as const;

export const zIndex = {
  base: 1,
  dropdown: 10,
  modal: 100,
  toast: 2147483001,
} as const;

export const gradients = {
  radial: 'radial-gradient(100% 100% at right center, rgb(38, 109, 240), rgba(0, 0, 0, 0) 50%)',
  linear: 'linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255))',
} as const;
