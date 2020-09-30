import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #392F5A;
    width: 100vw;
    height: 100vw;
  }

  body, input, button {
    font-family: robotom sans-serif;
  }
`;

