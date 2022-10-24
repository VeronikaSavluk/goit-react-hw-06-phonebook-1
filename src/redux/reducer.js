import { combineReducers } from "redux";

const contactsInitialState = [];

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case "contacts/addContact":
      return [...state, action.payload];
    case "contacts/deleteContact":
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

const filterInitialState = "";

const filterReducer = (state = filterInitialState, action) => {
  console.log(state.contacts);
  switch (action.type) {
    case "filter/setFilter":
      return state.filter(contact => contact.name.toLowerCase().includes(action.payload));
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
  });