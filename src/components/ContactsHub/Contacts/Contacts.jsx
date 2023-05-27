import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import ContactForm from 'components/ContactsHub/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import ContactList from 'components/ContactsHub/ContactList/ContactList';
import { NotificationContainer } from 'react-notifications';
import { Container } from './Contacts.styled';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Your Contacts</h2>
        <Filter />
        {isLoading && !error && <Loader />}
        <ContactList />
        <NotificationContainer />
      </Container>
    </>
  );
};

export default Contacts;
