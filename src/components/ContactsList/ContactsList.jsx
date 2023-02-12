import { Contact } from './Contact/Contact';
import css from './ContactsList.module.css';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(state => state.filter);

  const handleDeleteContact = id => {
    //dispatch(deleteContactAction(id));
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
