import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import Contacts from 'components/Contacts';
import { selectError } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

const ContactsPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section>
      {!isLoggedIn && !error && <h2>Please login or register</h2>}
      {isLoggedIn && !error && <Contacts />}
    </section>
  );
};

export default ContactsPage;
