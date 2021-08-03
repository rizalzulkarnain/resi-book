import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import { theme } from '../root';

const BUTTON_ELEMENTS = {
  mediumRegister: () => `
    background-color: #2f5dc3;
    border-color: #2f5dc3;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    color: ${theme.colors.white};
  `,
  mediumLogin: () => `
    color: ${theme.colors.darkWhite};
    background-color: ${theme.colors.info};
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  `,
  mediumLogout: () => `
    color: ${theme.colors.darkWhite};
    background-color: ${theme.colors.vividOrange};
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  `,
  disabled: () => `
    padding: 6px 12px;
    background: ${theme.colors.darkWhite};
    border-radius: 3px;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  `,
  newTransaction: () => `
    color: ${theme.colors.darkWhite};
    background: ${theme.colors.teal};
    border-radius: 3px;
    padding: 1rem 1rem;
    font-size: 1.5rem;
    line-height: 1.5rem;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  `,
  submit: () => `
    color: ${theme.colors.darkWhite};
    background: ${theme.colors.purple};
    width: 80vw;
    border-radius: 3px;
    padding: 1rem 1rem;
    font-size: 1.5rem;
    line-height: 1.5rem;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  `,
};

export const Button = styled.button`
  cursor: pointer;
  border: none;
  outline: none;

  ${applyStyleModifiers(BUTTON_ELEMENTS)};
`;
