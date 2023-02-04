import { Contact } from './Contact/Contact';
import css from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
// import { contactsDeleteContactAction } from 'redux/contacts/contacts.action';
import { useMemo } from 'react';
import { deleteContactAction } from 'redux/contacts/contacts.slice';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContactAction(id));
  };

  const filterNormalize = filter => filter.toLowerCase();

  const contactListToDisplay = useMemo(
    () =>
      contacts.filter(({ name }) =>
        name.toLowerCase().includes(filterNormalize(filter))
      ),
    [contacts, filter]
  );

  return (
    <ul className={css.contactsList}>
      {contactListToDisplay.map(item => (
        <Contact key={item.id} contact={item} onDelete={handleDeleteContact} />
      ))}
    </ul>
  );
};
