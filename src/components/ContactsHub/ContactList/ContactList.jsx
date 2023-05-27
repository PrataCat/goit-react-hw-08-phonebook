import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css['contact-list']}>
      {visibleContacts.map(({ name, number, id }) => (
        <li key={id} className={css['contact-item']}>
          <p>
            {name}: <span className={css['contact-number']}>{number}</span>
          </p>
          <button
            type="button"
            className={css['contact-btn']}
            onClick={() => handleDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
