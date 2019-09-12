/* eslint-disable arrow-parens */
import { createReducer } from '~/utils/createReducer';
import { TYPES } from './constants';
import { IContactsState, Handler } from '~/types';
import * as actions from './actions';

const INITIAL_STATE: IContactsState = {
  contacts_list: [],
  selected_contact: {
    id: 0,
    name: '',
    phone: '',
    email: '',
  },
};

const setContactsHandler: Handler<IContactsState, typeof actions.setContacts> = (state, { contacts }) => ({
  ...state,
  contacts_list: [...contacts],
});

const setContactHandler: Handler<IContactsState, typeof actions.setContact> = (state, { contact }) => ({
  ...state,
  selected_contact: contact,
});

const saveEditedContactHandler: Handler<IContactsState, typeof actions.saveEditedContact> = (
  state,
  { contact },
) => ({
  ...state,
  contacts_list: state.contacts_list.map((contact_item) => {
    if (contact_item.id === contact.id) {
      return contact;
    }
    return contact_item;
  }),
});

const clearSelectedContactHandler: Handler<IContactsState, typeof actions.clearSelectedContact> = (
  state,
) => ({
  ...state,
  selected_contact: {
    id: 0,
    name: '',
    phone: '',
    email: '',
  },
});

const deleteContactHandler: Handler<IContactsState, typeof actions.deleteContact> = (
  state,
  { id },
) => ({
  ...state,
  contacts_list: state.contacts_list.filter(contact => contact.id !== id),
});

const addNewContactHandler: Handler<IContactsState, typeof actions.addNewContact> = (
  state,
  { contact },
) => ({
  ...state,
  contacts_list: [...state.contacts_list, contact],
});

const HANDLERS = {
  [TYPES.ADD_NEW_CONTACT]: addNewContactHandler,
  [TYPES.SET_CONTACTS]: setContactsHandler,
  [TYPES.SET_CONTACT]: setContactHandler,
  [TYPES.SAVE_EDITED_CONTACT]: saveEditedContactHandler,
  [TYPES.CLEAR_SELECTED_CONTACT]: clearSelectedContactHandler,
  [TYPES.DELETE_CONTACT]: deleteContactHandler,
};

export default createReducer(INITIAL_STATE, HANDLERS);
