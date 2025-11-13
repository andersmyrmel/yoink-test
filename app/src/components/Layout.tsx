import styled from 'styled-components';
import { colors, layout, spacing } from '../theme/tokens';

export const AppContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: ${colors.white};
`;

export const Sidebar = styled.aside`
  width: ${layout.sidebarWidth};
  height: 100vh;
  background: ${colors.white};
  border-right: 1px solid ${colors.borderDefault};
  display: flex;
  flex-direction: column;
  padding: ${spacing[4]};
  gap: ${spacing[4]};
  overflow-y: auto;
  flex-shrink: 0;
`;

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

export const Topbar = styled.header`
  height: ${layout.topbarHeight};
  background: ${colors.white};
  border-bottom: 1px solid ${colors.bgElevated2};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${spacing[4]};
  gap: ${spacing[2]};
  flex-shrink: 0;
`;

export const ContentArea = styled.div`
  flex: 1;
  overflow-y: auto;
  background: ${colors.white};
  padding: 0;
`;

export const SidebarSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[2]};
`;

export const SidebarDivider = styled.div`
  height: 1px;
  background: ${colors.borderDefault};
  margin: ${spacing[0.75]} 0;
`;
