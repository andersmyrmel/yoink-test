import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
}

export const HomeIcon: React.FC<IconProps> = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path
      d="M7 1L1 6V13H5V9H9V13H13V6L7 1Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <circle cx="6" cy="6" r="4.5" stroke={color} strokeWidth="1.5" />
    <path d="M9 9L12.5 12.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const PlusIcon: React.FC<IconProps> = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path d="M7 2V12M2 7H12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const SettingsIcon: React.FC<IconProps> = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="2" stroke={color} strokeWidth="1.5" />
    <path
      d="M7 1V3M7 11V13M13 7H11M3 7H1M11.5 2.5L10 4M4 10L2.5 11.5M11.5 11.5L10 10M4 4L2.5 2.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const FileIcon: React.FC<IconProps> = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path
      d="M8 1H3C2.44772 1 2 1.44772 2 2V12C2 12.5523 2.44772 13 3 13H11C11.5523 13 12 12.5523 12 12V5M8 1L12 5M8 1V5H12"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ListIcon: React.FC<IconProps> = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path
      d="M1 3.5H13M1 7H13M1 10.5H13"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const FilterIcon: React.FC<IconProps> = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path
      d="M1 2H13L8 8V12L6 13V8L1 2Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MoreIcon: React.FC<IconProps> = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="3" r="1" fill={color} />
    <circle cx="7" cy="7" r="1" fill={color} />
    <circle cx="7" cy="11" r="1" fill={color} />
  </svg>
);
