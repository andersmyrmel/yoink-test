import React from 'react';
import './Navigation.css';

interface NavigationItem {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  count?: number;
  onClick?: () => void;
}

interface NavigationProps {
  items: NavigationItem[];
}

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  return (
    <nav className="navigation">
      {items.map((item, index) => (
        <a
          key={index}
          href="#"
          className={`navigation__item ${item.active ? 'navigation__item--active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            item.onClick?.();
          }}
        >
          {item.icon && <span className="navigation__icon">{item.icon}</span>}
          <span className="navigation__label">{item.label}</span>
          {item.count !== undefined && (
            <span className="navigation__count">{item.count}</span>
          )}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
