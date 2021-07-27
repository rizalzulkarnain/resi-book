import styled from 'styled-components';

import { theme } from '../root';

export const LoginContainer = styled.div`
  .text__login {
    color: ${theme.colors.teal};
  }

  .wrapper__inputLabel {
    margin-bottom: 10px;
  }

  .forgot__password_text {
    margin-top: 15px;
    color: ${theme.colors.teal};
  }

  input[type='email'] {
    padding: 10px;
    border: 0;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  }

  input[type='password'] {
    padding: 10px;
    border: 0;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  }

  input[type='text'] {
    padding: 10px;
    border: 0;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  }
`;
