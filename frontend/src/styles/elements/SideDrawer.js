import styled from 'styled-components';

import { theme } from '../root';

export const SideDrawerContainer = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  height: 100vh;
  width: 70%;
  background: ${theme.colors.dark};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`;
