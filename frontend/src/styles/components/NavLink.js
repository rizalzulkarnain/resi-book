import styled from 'styled-components';

import { below } from '../root';

export const SiteHeaderDiv = styled.div`
  display: flex;
  margin: auto;
  margin-right: 0;
  padding-right: 20px;

  div {
    margin: auto;
    margin-left: 24px;
  }

  ${below.tablet`
    display: none;
  `}
`;
