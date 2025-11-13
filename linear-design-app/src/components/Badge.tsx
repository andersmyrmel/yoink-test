import React from 'react';
import './Badge.css';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'default' }) => {
  return (
    <span className={`badge badge--${variant}`}>
      {children}
    </span>
  );
};

export default Badge;
