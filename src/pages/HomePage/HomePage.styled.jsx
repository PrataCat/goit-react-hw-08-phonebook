import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1`
  display: block;
  margin-top: 100px;
  text-align: center;
`;

export const StyledLink = styled(NavLink)`
  color: var(--accent-color-dark);
`;
