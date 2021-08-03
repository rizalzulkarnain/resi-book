import styled from 'styled-components';

import { theme } from '../root';

export const EntryPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.teal};

  .box__login {
    background: ${theme.colors.darkWhite};
    border-radius: 5px;
    padding: 30px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
`;
