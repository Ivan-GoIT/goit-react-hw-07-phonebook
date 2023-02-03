import { useEffect } from 'react';
import { Section } from 'components/Section/Section';
import { PhoneBookForm } from 'components/PhoneBookForm/PhoneBookForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { nanoid } from 'nanoid';
import { FilterByName } from 'components/FilterByName/FilterByName';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const isContactInState = ({ name, number }) =>
    !!contacts.filter(({ name: prevName, number: prevNumber }) => {
      return prevName === name && prevNumber === number;
    }).length;

  const handleSubmitForm = ({ name, number }) => {
    if (isContactInState({ name, number })) {
      alert('Contact is in phonebook');
      return;
    }

    dispatch({
      type: 'app/addContact',
      payload: { id: nanoid(), name, number },
    });
  };

  const handleFilterChange = evt => {
    dispatch({ type: 'app/setFilter', payload: evt.currentTarget.value });
  };

  const filterNormalize = filter => filter.toLowerCase();

  const contactListToDisplay = (contacts, filter) =>
    contacts.filter(({ name }) => name.toLowerCase().includes(filter));

  const handleDeleteContact = id => {
    dispatch({ type: 'app/deleteContact', payload: id });
  };

  const contactsToDisplay = contactListToDisplay(
    contacts,
    filterNormalize(filter)
  );

  return (
    <>
      <Section title="Phonebook">
        <PhoneBookForm onSubmitForm={handleSubmitForm} />
      </Section>
      {!!contacts.length && (
        <>
          <Section>
            <FilterByName filter={filter} onChange={handleFilterChange} />
          </Section>

          <Section title="ContactsList">
            <ContactsList
              contactList={contactsToDisplay}
              onDelete={handleDeleteContact}
            />
          </Section>
        </>
      )}
    </>
  );
};
