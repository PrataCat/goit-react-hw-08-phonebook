import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  height: 60px;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  font-weight: 600;
  font-size: 24px;

  &.active {
    color: var(--accent-color-dark);
  }
`;
