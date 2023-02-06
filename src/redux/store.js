import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { initialState } from './rootInitialState';
import { contactsReducer } from './contacts/contacts.slice';
import { filterReducer } from './filter/filter.slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist:['contacts']
};

const rootReduser = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

 const persistedReducer = persistReducer(persistConfig, rootReduser);

export const store = configureStore({
  reducer:persistedReducer,
  
  devTools: true,
  preloadedState: initialState,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
