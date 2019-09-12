import React, { FC } from 'react';
import * as styles from './styles.scss';
import { ContactsListItem } from '~/components/contacts/ContactsListItem';
import { IContact } from '~/types';
import * as actions from '~/redux/contacts/actions';

interface IProps {
  contacts: IContact[];
  deleteContact: typeof actions.deleteContact;
}

const ContactsList: FC<IProps> = ({
  contacts,
  deleteContact,
}) => {
  return (
    <div>
      {
        [contacts.map(({
          id,
          name,
          email,
          phone,
        }) => (
          <ContactsListItem
            key={id}
            id={id}
            name={name}
            email={email}
            phone={phone}
            deleteContact={deleteContact}
          />
        ))]
      }
      {console.log('render')}
    </div>
  );
};

export { ContactsList };
