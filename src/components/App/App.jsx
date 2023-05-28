import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from '../Header/SharedLayout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshCurrentUser } from 'redux/auth/operations';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PubliсRoute/PubliсRoute';
import { selectIsRefreshing } from 'redux/auth/selectors';
import Loader from 'components/Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const SignUpPage = lazy(() => import('pages/SignUpPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="register"
              element={
                <PublicRoute>
                  <SignUpPage />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute navigateTo="/contacts">
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      )}
      <NotificationContainer />
    </>
  );
};

export default App;
