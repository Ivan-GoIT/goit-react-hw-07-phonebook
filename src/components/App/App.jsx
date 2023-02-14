import { Section } from 'components/Section/Section';
import { PhoneBookForm } from 'components/PhoneBookForm/PhoneBookForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { FilterByName } from 'components/FilterByName/FilterByName';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getError, getIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/contacts/contactsThunk';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  if (error) {
    toast.error(error);
  }

  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <Section title="Phonebook">{!isLoading && <PhoneBookForm />}</Section>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {!!contacts.length && (
            <Section>
              <FilterByName />
            </Section>
          )}

          <Section title="ContactsList">
            <ContactsList />
          </Section>
        </>
      )}
    </>
  );
};
