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
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '379px 379px 379px',
                gap: '1px',
                background: 'rgba(0, 0, 0, 0.05)',
                height: '100%',
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item) => (
                <div
                  key={item}
                  style={{
                    background: 'rgb(255, 255, 255)',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: 500,
                      lineHeight: '20px',
                      color: 'rgb(0, 0, 0)',
                    }}
                  >
                    Note {item}
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      fontWeight: 500,
                      lineHeight: '16px',
                      color: 'rgba(0, 0, 0, 0.55)',
                    }}
                  >
                    Sample note content demonstrating the data table layout with
                    proper typography and spacing from the design system.
                  </div>
                  <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                    <Badge>Tag</Badge>
                  </div>
                </div>
              ))}
            </div>
          </ContentArea>
        </MainContent>
      </AppContainer>
    </>
  );
}

export default App;
