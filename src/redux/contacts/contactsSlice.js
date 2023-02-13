import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './contactsInitialState';
import { fetchContacts } from 'redux/contacts/contactsThunk';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactsSlice.actions;