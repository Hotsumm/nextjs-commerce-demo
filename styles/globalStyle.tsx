import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const GlobalStyles = css`
  ${emotionReset}

  body {
    background: #000;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
`;
