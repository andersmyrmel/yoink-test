import styled from 'styled-components';
import { colors, typography, spacing, transitions, borderRadius } from '../theme/tokens';

interface NavigationItemProps {
  label: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

const StyledNavItem = styled.button<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${spacing[2]};
  width: 100%;
  padding: ${spacing[1.5]} ${spacing[2]};
  background: ${(props) => (props.$isActive ? colors.bgElevated2 : 'transparent')};
  color: ${(props) => (props.$isActive ? colors.textLink : colors.textLink)};
  font-size: ${typography.sizes.xs};
  font-weight: ${typography.weights.regular};
  border: none;
  border-radius: ${borderRadius.lg};
  cursor: pointer;
  transition: background ${transitions.default}, color ${transitions.default};
  text-align: left;

  &:hover {
    background: ${colors.bgElevated2};
  }

  svg {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
  }
`;

export const NavigationItem: React.FC<NavigationItemProps> = ({
  label,
  icon,
  isActive,
  onClick
}) => {
  return (
    <StyledNavItem $isActive={isActive} onClick={onClick}>
      {icon && icon}
      <span>{label}</span>
    </StyledNavItem>
  );
};

const StyledNavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${spacing[0.5]};
  padding: 0;
`;

interface NavigationMenuProps {
  children: React.ReactNode;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({ children }) => {
  return <StyledNavMenu>{children}</StyledNavMenu>;
};
