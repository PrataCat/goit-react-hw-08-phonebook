import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">
        <button>Register</button>
      </NavLink>
      <NavLink to="/login">
        <button>Login</button>
      </NavLink>
    </div>
  );
};

export default AuthNav;
