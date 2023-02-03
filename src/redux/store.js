import { devToolsEnhancer } from '@redux-devtools/extension';
import { combineReducers, createStore } from 'redux';
import { contactsInitState } from './contacts/contacts.init-state';
import { contactsReduser } from './contacts/contacts.reduser';
import { filterReduser } from './filter/filter.reduser';
import { filterInitState } from './filter/filters.init-state';

const initialState = {
  contacts: contactsInitState,
  filter: filterInitState,
};

const rootReducer = combineReducers({
  contacts: contactsReduser,
  filter: filterReduser,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, initialState, enhancer);



