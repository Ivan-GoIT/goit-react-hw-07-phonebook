import { contactsInitState } from 'redux/contacts/contacts.init-state';

export const contactsReduser = (state = contactsInitState, action) => {
  switch (action.type) {
    case 'app/addContact':
      return [...state, action.payload];

    case 'app/deleteContact':
      return state.filter(({ id: contactId }) => contactId !== action.payload);

    default:
      return state;
  }
};
