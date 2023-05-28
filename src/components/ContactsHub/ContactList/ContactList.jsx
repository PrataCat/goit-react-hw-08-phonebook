import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import {
  ContactsList,
  ContactBtn,
  ContactItem,
  ContactNumber,
} from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactsList>
      {visibleContacts.map(({ name, number, id }) => (
        <ContactItem key={id}>
          <p>
            {name}: <ContactNumber>{number}</ContactNumber>
          </p>
          <ContactBtn type="button" onClick={() => handleDeleteContact(id)}>
            Delete
          </ContactBtn>
        </ContactItem>
      ))}
    </ContactsList>
  );
};

export default ContactList;
