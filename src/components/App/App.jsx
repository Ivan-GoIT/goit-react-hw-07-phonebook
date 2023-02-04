import { useEffect, useMemo } from 'react';
import { Section } from 'components/Section/Section';
import { PhoneBookForm } from 'components/PhoneBookForm/PhoneBookForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { FilterByName } from 'components/FilterByName/FilterByName';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);



  return (
    <>
      <Section title="Phonebook">
        <PhoneBookForm />
      </Section>
      {!!contacts.length && (
        <>
          <Section>
            <FilterByName />
          </Section>

          <Section title="ContactsList">
            <ContactsList  />
          </Section>
        </>
      )}
    </>
  );
};
