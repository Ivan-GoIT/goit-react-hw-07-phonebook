import { configureStore } from '@reduxjs/toolkit';
// import { contactsReduser } from './contacts/contacts.reduser';
// import { filterReduser } from './filter/filter.reduser';
import { initialState } from './rootInitialState';
import {contactsReducer} from './contacts/contacts.slice'
import { filterReducer } from './filter/filter.slice';


export const store = configureStore({ 
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
      },
    devTools:true, 
    preloadedState: initialState });
