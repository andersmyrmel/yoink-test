import { createGlobalStyle } from 'styled-components';
import { typography, colors } from './tokens';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  body {
    font-family: ${typography.fonts.primary};
    font-size: ${typography.sizes.base};
    font-weight: ${typography.weights.regular};
    line-height: ${typography.lineHeights.relaxed};
    color: ${colors.textDefault};
    background-color: ${colors.white};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  svg {
    display: block;
  }
`;
