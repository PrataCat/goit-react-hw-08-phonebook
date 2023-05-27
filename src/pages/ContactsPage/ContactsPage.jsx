import { useDispatch } from 'react-redux';
import Contacts from 'components/ContactsHub/Contacts';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Contacts />
    </>
  );
};

export default ContactsPage;
