import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header } from './SharedLayout.styled';
import Loader from 'components/Loader';
import { Navigation } from 'components/Header/Navigation/Navigation';
import AuthNav from 'components/Header/AuthNav/AuthNav';
import { UserMenu } from 'components/Header/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
