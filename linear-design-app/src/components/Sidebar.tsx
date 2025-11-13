import React from 'react';
import './Sidebar.css';

interface SidebarProps {
  children: React.ReactNode;
  collapsed?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ children, collapsed = false }) => {
  return (
    <aside className={`sidebar ${collapsed ? 'sidebar--collapsed' : ''}`}>
      <div className="sidebar__content">
        {children}
      </div>
    </aside>
  );
};

export default Sidebar;
