import { useState } from 'react';
import {
  AppContainer,
  Sidebar,
  MainContent,
  Topbar,
  ContentArea,
  SidebarSection,
  SidebarDivider,
} from './components/Layout';
import { Button } from './components/Button';
import { Badge } from './components/Badge';
import { NavigationMenu, NavigationItem } from './components/Navigation';
import {
  HomeIcon,
  SearchIcon,
  PlusIcon,
  SettingsIcon,
  FileIcon,
  ListIcon,
  FilterIcon,
  MoreIcon,
} from './components/Icons';
import { GlobalStyles } from './theme/GlobalStyles';

function App() {
  const [activeNav, setActiveNav] = useState('home');

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        {/* Sidebar */}
        <Sidebar>
          <SidebarSection>
            <Button variant="secondary" size="medium">
              <PlusIcon size={14} />
              New workspace
            </Button>
          </SidebarSection>

          <SidebarDivider />

          <SidebarSection>
            <NavigationMenu>
              <NavigationItem
                label="Home"
                icon={<HomeIcon />}
                isActive={activeNav === 'home'}
                onClick={() => setActiveNav('home')}
              />
              <NavigationItem
                label="Search"
                icon={<SearchIcon />}
                isActive={activeNav === 'search'}
                onClick={() => setActiveNav('search')}
              />
              <NavigationItem
                label="Projects"
                icon={<FileIcon />}
                isActive={activeNav === 'projects'}
                onClick={() => setActiveNav('projects')}
              />
              <NavigationItem
                label="Tasks"
                icon={<ListIcon />}
                isActive={activeNav === 'tasks'}
                onClick={() => setActiveNav('tasks')}
              />
              <NavigationItem
                label="Settings"
                icon={<SettingsIcon />}
                isActive={activeNav === 'settings'}
                onClick={() => setActiveNav('settings')}
              />
            </NavigationMenu>
          </SidebarSection>

          <SidebarDivider />

          <SidebarSection>
            <NavigationMenu>
              <NavigationItem
                label="Team workspace"
                icon={<HomeIcon />}
                onClick={() => {}}
              />
              <NavigationItem
                label="Personal notes"
                icon={<FileIcon />}
                onClick={() => {}}
              />
              <NavigationItem
                label="Archive"
                icon={<ListIcon />}
                onClick={() => {}}
              />
            </NavigationMenu>
          </SidebarSection>
        </Sidebar>

        {/* Main Content */}
        <MainContent>
          <Topbar>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Button variant="ghost">
                <FilterIcon size={14} />
                Filter
              </Button>
              <Button variant="ghost">
                <MoreIcon size={14} />
                Sort
              </Button>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Badge>13 items</Badge>
              <Button variant="secondary" size="small">
                <PlusIcon size={14} />
                New
              </Button>
              <Button variant="primary" size="small">
                Save
              </Button>
            </div>
          </Topbar>

          <ContentArea>
            <div style={{ maxWidth: '1185px', margin: '0 auto' }}>
              <h1
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  marginBottom: '24px',
                  color: 'rgb(36, 37, 41)',
                }}
              >
                Welcome to the Design System
              </h1>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '16px',
                  marginBottom: '24px',
                }}
              >
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    style={{
                      padding: '16px',
                      background: 'rgb(251, 251, 251)',
                      borderRadius: '8px',
                      border: '1px solid rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '14px',
                        fontWeight: 500,
                        marginBottom: '8px',
                      }}
                    >
                      Card {item}
                    </h3>
                    <p
                      style={{
                        fontSize: '12px',
                        color: 'rgba(0, 0, 0, 0.55)',
                        marginBottom: '12px',
                      }}
                    >
                      This is a sample card demonstrating the design system with
                      proper spacing, typography, and colors.
                    </p>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <Badge>Tag {item}</Badge>
                      <Button variant="ghost" size="small">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  padding: '24px',
                  background: 'rgb(251, 251, 251)',
                  borderRadius: '8px',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                }}
              >
                <h2
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    marginBottom: '16px',
                  }}
                >
                  Component Examples
                </h2>

                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                </div>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Badge>Badge 1</Badge>
                  <Badge>Badge 2</Badge>
                  <Badge>Badge 3</Badge>
                </div>
              </div>
            </div>
          </ContentArea>
        </MainContent>
      </AppContainer>
    </>
  );
}

export default App;
