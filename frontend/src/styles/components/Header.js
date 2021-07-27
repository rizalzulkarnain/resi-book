import styled from 'styled-components';

import { theme, below, above } from '../root';

export const HeaderMain = styled.div`
  position: sticky;

  .main-navigation__menu-btn {
    width: 3rem;
    height: 3rem;
    background: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 2rem;
    cursor: pointer;

    ${above.tablet`
      display: none;
    `}
  }

  .main-navigation__menu-btn__span {
    display: block;
    width: 3rem;
    height: 2.5px;
    background: ${theme.colors.dark};
  }
`;

export const SiteHeader = styled.div`
  display: flex;
  justify-content: space-around;
  color: ${theme.colors.mainHeader};
  position: relative;
  background-color: #fff;
  height: 80px;
  padding: 50px 0px 70px 0px;
  box-shadow: 4px 6px 12px 0 rgb(0 0 0 / 6%);
  z-index: 99;

  .resi__image__div {
    margin-left: 5rem;

    ${below.tablet`
      margin-left: auto;
      margin-right: auto;
      `}

    .resi__image {
      width: 100px;

      ${below.tablet`
        width: 64px;
        `}
    }
  }
`;
