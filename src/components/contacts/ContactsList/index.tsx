import React, { FC, useState, useEffect } from 'react';
import * as styles from './styles.scss';
import { ContactsListItem } from '~/components/contacts/ContactsListItem';

interface IProps {
  contacts: any;
  deleteContact: any;
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
