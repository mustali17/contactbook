import { CREATE_CONTACT, GET_CONTACT, UPDATE_CONTACT } from "../constant/type";

export const addContact = (contact) => {
  return {
    type: CREATE_CONTACT,
    payload: contact
  };
};

export const getContact = (id) => {
  return {
    type: GET_CONTACT,
    payload: id
  };
};

export const updateContact = (contact) => {
  return {
    type: UPDATE_CONTACT,
    payload: contact
  };
};
