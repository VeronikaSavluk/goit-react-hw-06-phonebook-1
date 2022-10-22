import { combineReducers } from "redux";
import { statusFilters } from "./constans";

const contactsInitialState = [];

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case "addContact":
      return [...state.contacts, action.payload];
    case "deleteContact":
      return state.contacts.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

const filtersInitialState = "";

const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case "setFilter":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
    tasks: contactsReducer,
    filters: filtersReducer,
  });