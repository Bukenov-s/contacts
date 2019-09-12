import React, { FC } from 'react';
import * as styles from './styles.scss';
import { SortingCategory } from '~/components/contacts/SortingCategory';
import { IContact } from '~/types';

interface IProps {
  contacts: IContact[];
  setContacts: (contacts: IContact[]) => void;
}

const ContactsSortingPanel: FC<IProps> = ({
  contacts,
  setContacts,
}) => {
  return (
    <div className={styles.container}>
      <SortingCategory
        name="name"
        contacts={contacts}
        setContacts={setContacts}
        className={styles.name}
      />
      <SortingCategory
        name="email"
        contacts={contacts}
        setContacts={setContacts}
        className={styles.email}
      />
      <SortingCategory
        name="phone"
        contacts={contacts}
        setContacts={setContacts}
        className={styles.phone}
      />
    </div>
  );
};

export { ContactsSortingPanel };
