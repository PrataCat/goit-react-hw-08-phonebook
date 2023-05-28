import { useState } from 'react';
import { NotificationManager } from 'react-notifications';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { Form, FormBtn, FormInput } from './ContactForm.styled';

const ContactForm = () => {
  const [userName, setUserName] = useState('');
  const [userNumber, setUserNumber] = useState('');

  const dispatch = useDispatch();
  const items = useSelector(selectContacts);

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setUserName(value);
    } else {
      setUserNumber(value);
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    if (items.some(el => el.name === userName)) {
      NotificationManager.info(`${userName} is already in contacts.`);
    } else {
      dispatch(addContact({ name: userName, number: userNumber }));
    }
    reset();
  };

  const reset = () => {
    setUserName('');
    setUserNumber('');
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <label>
        Name
        <FormInput
          id={nanoid()}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={userName}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Number
        <FormInput
          id={nanoid()}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={userNumber}
          onChange={handleInputChange}
          required
        />
      </label>

      <FormBtn type="submit">Add contact</FormBtn>
    </Form>
  );
};

export default ContactForm;
