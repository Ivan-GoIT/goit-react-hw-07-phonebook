import { Contact } from './Contact/Contact';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact,  } from 'redux/contacts/contactsThunk';
import css from './ContactsList.module.css';

export const ContactsList = () => {
  const dispatch=useDispatch()
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
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
    <>
      {!contactListToDisplay.length ? (
        <p>No contacts to display</p>
      ) : (
        <ul className={css.contactsList}>
          {contactListToDisplay.map(item => (
            <Contact
              key={item.id}
              contact={item}
              onDelete={handleDeleteContact}
            />
          ))}
        </ul>
      )}
    </>
  );
};
