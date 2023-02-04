import { Contact } from './Contact/Contact';
import css from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { contactsDeleteContactAction } from 'redux/contacts/contacts.action';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(contactsDeleteContactAction(id));
  };

  const filterNormalize = filter => filter.toLowerCase();

  const contactListToDisplay = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterNormalize(filter))
  );

  return (
    <ul className={css.contactsList}>
      {contactListToDisplay.map(item => (
        <Contact key={item.id} contact={item} onDelete={handleDeleteContact} />
      ))}
    </ul>
  );
};
