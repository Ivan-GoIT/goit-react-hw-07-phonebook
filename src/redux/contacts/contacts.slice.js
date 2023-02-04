import { createSlice } from '@reduxjs/toolkit';
import { contactsInitState } from './contacts.init-state';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  reducers: {
    addContactAction: (state, { payload }) => {

      state.push(payload);
    },
    deleteContactAction: (state, { payload }) =>
      state.filter(({ id: contactId }) => contactId !== payload),
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addContactAction, deleteContactAction } = contactsSlice.actions;
