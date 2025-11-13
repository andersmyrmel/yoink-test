import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  shape?: 'default' | 'pill';
  onClick?: () => void;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  size = 'small',
  shape = 'default',
  onClick,
  icon,
}) => {
  const classNames = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    shape === 'pill' ? 'btn--pill' : '',
  ].filter(Boolean).join(' ');

  return (
    <button className={classNames} onClick={onClick}>
      {icon && <span className="btn__icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
