import { TYPES } from './constants';
import { IContact } from '~/types';

export const fetchContacts = () => ({
  type: TYPES.FETCH_CONTACTS,
});

export const setContacts = (contacts: IContact[]) => ({
  type: TYPES.SET_CONTACTS,
  contacts,
});

export const getContact = (id: number) => ({
  type: TYPES.GET_CONTACT,
  id,
});

export const setContact = (contact: IContact) => ({
  type: TYPES.SET_CONTACT,
  contact,
});

export const submitContactEdit = (contact: IContact) => ({
  type: TYPES.SUBMIT_CONTACT_EDIT,
  contact,
});

export const cancelContactEdit = () => ({
  type: TYPES.CANCEL_CONTACT_EDIT,
});

export const saveEditedContact = (contact: IContact) => ({
  type: TYPES.SAVE_EDITED_CONTACT,
  contact,
});

export const clearSelectedContact = () => ({
  type: TYPES.CLEAR_SELECTED_CONTACT,
});

export const deleteContact = (id: number) => ({
  type: TYPES.DELETE_CONTACT,
  id,
});

export const addNewContact = (contact: IContact) => ({
  type: TYPES.ADD_NEW_CONTACT,
  contact,
});
