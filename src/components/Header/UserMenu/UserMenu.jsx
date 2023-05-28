import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { Wrap, Title, OutLink } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <Wrap>
      <Title>
        Wellcome <span>{name}</span>
      </Title>
      <NavLink to="/">
        <OutLink type="button" onClick={() => dispatch(logOut())}>
          Logout
        </OutLink>
      </NavLink>
    </Wrap>
  );
};

export default UserMenu;
