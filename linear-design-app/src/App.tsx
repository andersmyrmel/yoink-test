import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Navigation from './components/Navigation';
import Button from './components/Button';
import Badge from './components/Badge';

// SVG Icons
const HomeIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 6L8 2L14 6V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const InboxIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 10V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V10M10 6L8 2L6 6M8 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ProjectIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M6 7L7.5 8.5L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TeamIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M3 13C3 10.7909 4.79086 9 7 9H9C11.2091 9 13 10.7909 13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const SettingsIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M14 8C14 8.55228 13.5523 9 13 9H12.5C12.2239 9 12 9.22386 12 9.5C12 10.3284 11.3284 11 10.5 11C10.2239 11 10 11.2239 10 11.5V12C10 12.5523 9.55228 13 9 13C8.44772 13 8 12.5523 8 12V12C8 11.4477 7.55228 11 7 11C6.44772 11 6 11.4477 6 12V12C6 12.5523 5.55228 13 5 13C4.44772 13 4 12.5523 4 12V11.5C4 11.2239 3.77614 11 3.5 11C2.67157 11 2 10.3284 2 9.5C2 9.22386 1.77614 9 1.5 9H1C0.447715 9 0 8.55228 0 8C0 7.44772 0.447715 7 1 7H1.5C1.77614 7 2 6.77614 2 6.5C2 5.67157 2.67157 5 3.5 5C3.77614 5 4 4.77614 4 4.5V4C4 3.44772 4.44772 3 5 3C5.55228 3 6 3.44772 6 4V4C6 4.55228 6.44772 5 7 5C7.55228 5 8 4.55228 8 4V4C8 3.44772 8.44772 3 9 3C9.55228 3 10 3.44772 10 4V4.5C10 4.77614 10.2239 5 10.5 5C11.3284 5 12 5.67157 12 6.5C12 6.77614 12.2239 7 12.5 7H13C13.5523 7 14 7.44772 14 8Z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M10 10L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

function App() {
  const [activeNav, setActiveNav] = useState('Projects');

  const navigationItems = [
    { label: 'Home', icon: <HomeIcon />, active: activeNav === 'Home' },
    { label: 'Inbox', icon: <InboxIcon />, count: 5, active: activeNav === 'Inbox' },
    { label: 'Projects', icon: <ProjectIcon />, active: activeNav === 'Projects' },
    { label: 'Team', icon: <TeamIcon />, active: activeNav === 'Team' },
    { label: 'Settings', icon: <SettingsIcon />, active: activeNav === 'Settings' },
  ];

  const projects = [
    { name: 'Design System', status: 'In Progress', tasks: 12 },
    { name: 'Marketing Website', status: 'Planning', tasks: 8 },
    { name: 'Mobile App', status: 'In Progress', tasks: 24 },
    { name: 'Documentation', status: 'Completed', tasks: 0 },
    { name: 'User Research', status: 'Planning', tasks: 6 },
  ];

  return (
    <div className="app">
      <Sidebar>
        <div className="sidebar-header">
          <h1 className="workspace-name">Workspace</h1>
        </div>
        <Navigation items={navigationItems.map(item => ({
          ...item,
          onClick: () => setActiveNav(item.label)
        }))} />
      </Sidebar>

      <div className="main-container">
        <Topbar
          title="Projects"
          actions={
            <>
              <Button variant="ghost" icon={<SearchIcon />}>
                Search
              </Button>
              <Button variant="primary" icon={<PlusIcon />}>
                New Project
              </Button>
            </>
          }
        />

        <main className="content">
          <div className="content-header">
            <h1 className="page-title">All Projects</h1>
            <p className="page-description">
              Manage and track all your projects in one place
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-card__header">
                  <h3 className="project-card__name">{project.name}</h3>
                  <Badge variant={
                    project.status === 'Completed' ? 'primary' :
                    project.status === 'In Progress' ? 'secondary' :
                    'default'
                  }>
                    {project.status}
                  </Badge>
                </div>
                <div className="project-card__meta">
                  <span className="project-card__tasks">
                    {project.tasks} {project.tasks === 1 ? 'task' : 'tasks'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="design-showcase">
            <h2 className="section-title">Design System Components</h2>

            <div className="component-section">
              <h3 className="component-title">Buttons</h3>
              <div className="component-demo">
                <Button variant="primary">Primary Button</Button>
                <Button variant="default">Default Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="primary" icon={<PlusIcon />}>With Icon</Button>
              </div>
            </div>

            <div className="component-section">
              <h3 className="component-title">Badges</h3>
              <div className="component-demo">
                <Badge variant="default">Default</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
