import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import css from './Contacts.module.css';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import ContactList from 'components/ContactList/ContactList';
import { NotificationContainer } from 'react-notifications';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      <div className={css['container']}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Your Contacts</h2>
        <Filter />
        {isLoading && !error && <Loader />}
        <ContactList />
        <NotificationContainer />
      </div>
    </>
  );
};

export default Contacts;
