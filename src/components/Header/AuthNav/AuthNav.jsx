import { NavLink } from 'react-router-dom';
import { Wrap, AuthLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Wrap>
      <NavLink to="/login">
        <AuthLink>Login</AuthLink>
      </NavLink>
      <NavLink to="/register">
        <AuthLink>Register</AuthLink>
      </NavLink>
    </Wrap>
  );
};

export default AuthNav;
