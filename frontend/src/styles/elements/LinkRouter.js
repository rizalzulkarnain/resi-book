import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { mixins } from '../root';

export const LinkRouterDom = styled(Link)`
  ${mixins.link}
`;
