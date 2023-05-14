import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Loader from '../Loader';
import Filter from '../Filter';
import cssApp from './App.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className={cssApp['container']}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <Loader />}
        <ContactList />
        <NotificationContainer />
      </div>
    </>
  );
};

export default App;
