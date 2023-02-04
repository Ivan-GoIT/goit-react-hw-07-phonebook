// import { createReducer } from '@reduxjs/toolkit';
// import { contactsInitState } from 'redux/contacts/contacts.init-state';
// import {
//   contactsAddContactAction,
//   contactsDeleteContactAction,
// } from './contacts.action';


// export const contactsReduser = createReducer(contactsInitState, builder => {
//   builder
//   .addCase(contactsAddContactAction, (state, { payload }) => {
//     state.push(payload);
//   })
//   .addCase(contactsDeleteContactAction, (state, { payload }) =>
//   state.filter(({ id: contactId }) => contactId !== payload)
//   );
// });
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// export const contactsReduser = (
//   state = contactsInitState,
//   { type, payload }
// ) => {
//   switch (type) {
//     case 'app/addContact':
//       return [...state, payload];

//     case 'app/deleteContact':
//       return state.filter(({ id: contactId }) => contactId !== payload);

//     default:
//       return state;
//   }
// };