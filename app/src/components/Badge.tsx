import styled from 'styled-components';
import { colors, typography, borderRadius, spacing } from '../theme/tokens';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default';
}

const StyledBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: ${spacing[0.5]} ${spacing[2]};
  background: ${colors.bgElevated2};
  color: ${colors.textDefault};
  font-size: ${typography.sizes.xs};
  font-weight: ${typography.weights.regular};
  border-radius: ${borderRadius.sm};
  white-space: nowrap;
`;

export const Badge: React.FC<BadgeProps> = ({ children }) => {
  return <StyledBadge>{children}</StyledBadge>;
};
