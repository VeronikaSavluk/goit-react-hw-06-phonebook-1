import { nanoid } from "nanoid";

export const addContact = text => {
  return {
    type: "contacts",
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: "contacts",
    payload: contactId,
  };
};

export const setStatusFilter = value => {
  return {
    type: "filters",
    payload: value,
  };
};