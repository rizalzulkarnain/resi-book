import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { theme } from './root';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    width: 100%;
    font-family: "Inv Maison Neue","Maison Neue",-apple-system,BlinkMacSystemFont,"Open Sans",open-sans,sans-serif;
    background-color: ${theme.colors.white};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
`;
