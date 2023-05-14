import { useState } from 'react';
import { NotificationManager } from 'react-notifications';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import css from './ContactForm.module.css';

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
    <form className={css['form']} onSubmit={handleSubmitForm}>
      <label>
        Name
        <input
          id={nanoid()}
          type="text"
          name="name"
          className={css['form-input']}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={userName}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Number
        <input
          id={nanoid()}
          type="tel"
          name="number"
          className={css['form-input']}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={userNumber}
          onChange={handleInputChange}
          required
        />
      </label>

      <button className={css['form-btn']} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
