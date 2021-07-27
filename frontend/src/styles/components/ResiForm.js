import styled from 'styled-components';

import { theme } from '../root';

export const FormResiContainer = styled.div`
  display: grid;
  justify-content: center;
  background: ${theme.colors.darkWhite};
  border-radius: 5px;
  padding: 30px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  margin-right: 50px;
  margin-bottom: 50px;

  input[type='text'] {
    padding: 10px;
    border: 0;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  }

  input[type='date'] {
    padding: 10px;
    border: 0;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  }

  input[type='number'] {
    padding: 10px;
    border: 0;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  }

  .resiForm__text_addNew {
    color: ${theme.colors.teal};
  }

  .wrapper__inputLabel {
    margin-bottom: 30px;
  }
`;
