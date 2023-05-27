import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <div>
      <h4>Wellcome {name}</h4>
      <NavLink to="/">
        <button type="button" onClick={() => dispatch(logOut())}>
          Logout
        </button>
      </NavLink>
    </div>
  );
};
