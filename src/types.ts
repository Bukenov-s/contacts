import { RouterState } from 'connected-react-router';

export interface IContact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface IContactsState {
  contacts_list: IContact[];
  selected_contact: IContact;
}

export interface IModalState {
  is_shown: boolean;
  dialog: string;
}

export interface IState {
  contacts: IContactsState;
  modal: IModalState;
  router: RouterState;
}

export type Handler<P, T> = (
  state: P,
  payload: T extends (...args: any[]) => infer R ? R : any,
) => P
