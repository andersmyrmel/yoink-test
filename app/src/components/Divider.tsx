import styled from 'styled-components';
import { colors, spacing } from '../theme/tokens';

export const Divider = styled.div`
  height: 1px;
  background: ${colors.borderDefault};
  margin: ${spacing[0.75]} 0;
  border: none;
`;
