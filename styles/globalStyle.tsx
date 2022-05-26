import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const GlobalStyles = css`
  ${emotionReset}

  body {
    background: #000;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  input,
  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
`;
