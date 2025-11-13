import React from 'react';
import './Topbar.css';

interface TopbarProps {
  title?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
}

const Topbar: React.FC<TopbarProps> = ({ title, children, actions }) => {
  return (
    <header className="topbar">
      <div className="topbar__left">
        {title && <h2 className="topbar__title">{title}</h2>}
        {children}
      </div>
      {actions && (
        <div className="topbar__actions">
          {actions}
        </div>
      )}
    </header>
  );
};

export default Topbar;
