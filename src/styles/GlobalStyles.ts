import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  *, input, button {
    font-family: 'Roboto', sans-serif
  }
`;