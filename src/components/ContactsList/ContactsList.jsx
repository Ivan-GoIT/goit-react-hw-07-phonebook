import { Contact } from './Contact/Contact';
import css from './ContactsList.module.css';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/contacts/contactsThunk';

export const ContactsList = () => {
  const dispatch=useDispatch()
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

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      {!contacts.length ? (
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
