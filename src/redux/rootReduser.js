import { combineReducers } from "redux";
import { contactsReduser } from "./contacts/contacts.reduser";
import { filterReduser } from "./filter/filter.reduser";

export const rootReducer = combineReducers({
    contacts: contactsReduser,
    filter: filterReduser,
  });