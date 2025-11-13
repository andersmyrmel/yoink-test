import styled, { css } from 'styled-components';
import { colors, typography, borderRadius, spacing, transitions, shadows } from '../theme/tokens';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  onClick?: () => void;
}

const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return css`
        background: ${colors.interactive2};
        color: ${colors.textDefault};
        padding: ${spacing[0.5]} ${spacing[1.5]};
        border-radius: ${borderRadius.sm};
        font-size: ${typography.sizes.xs};
        font-weight: ${typography.weights.regular};
        height: 20px;
        min-width: 62px;

        &:hover {
          opacity: 0.9;
        }
      `;
    case 'secondary':
      return css`
        background: ${colors.white};
        color: ${colors.textDefault};
        padding: ${spacing[1]} ${spacing[1]};
        border-radius: ${borderRadius.md};
        font-size: ${typography.sizes.xs};
        font-weight: ${typography.weights.regular};
        box-shadow: ${shadows.default};
        height: 28px;

        &:hover {
          background: ${colors.interactive1};
        }
      `;
    case 'ghost':
    default:
      return css`
        background: transparent;
        color: ${colors.textDefault};
        padding: ${spacing[1]} ${spacing[2]};
        border-radius: ${borderRadius.md};
        font-size: ${typography.sizes.base};
        font-weight: ${typography.weights.regular};
        height: 28px;

        &:hover {
          background: ${colors.bgElevated2};
        }
      `;
  }
};

const StyledButton = styled.button<{ $variant: ButtonVariant; $size: ButtonSize }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing[1.5]};
  border: none;
  cursor: pointer;
  transition: background ${transitions.default}, opacity ${transitions.default};
  white-space: nowrap;

  ${(props) => getVariantStyles(props.$variant)}

  &:active {
    transform: scale(0.98);
  }
`;

export const Button: React.FC<ButtonProps> = ({
  variant = 'ghost',
  size = 'medium',
  children,
  onClick
}) => {
  return (
    <StyledButton $variant={variant} $size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
