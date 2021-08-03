import { css } from 'styled-components';

const size = {
  desktopXL: 1440,
  desktop: 1000,
  tablet: 800,
  phablet: 600,
  phoneXL: 480,
  phone: 400,
  tinyPhone: 330,
};

export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
