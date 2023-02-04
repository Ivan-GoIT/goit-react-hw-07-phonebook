import { contactsInitState } from 'redux/contacts/contacts.init-state';

export const contactsReduser = (state = contactsInitState, {type,payload}) => {
  switch (type) {
    case 'app/addContact':
      return [...state, payload];

    case 'app/deleteContact':
      return state.filter(({ id: contactId }) => contactId !== payload);

    default:
      return state;
  }
};
