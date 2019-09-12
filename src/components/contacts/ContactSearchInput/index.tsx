import React, { FC, useState, useCallback } from 'react';
import * as styles from './styles.scss';

interface IProps {
  contacts: any;
  setContacts: any;
}

const ContactSearchInput: FC<IProps> = ({
  contacts,
  setContacts,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = useCallback((e) => {
    setSearchQuery(e.target.value);
    if (!e.target.value) {
      setContacts(contacts);
      return;
    }

    const sorted_contacts = [...contacts].sort((a, b) => {
      if (a.name.toLowerCase().indexOf(searchQuery) < 0 && b.name.toLowerCase().indexOf(searchQuery) < 0) {
        return 0;
      }

      if (a.name.toLowerCase().indexOf(searchQuery) > b.name.toLowerCase().indexOf(searchQuery)) {
        return -1;
      }

      if (b.name.toLowerCase().indexOf(searchQuery) > a.name.toLowerCase().indexOf(searchQuery)) {
        return 1;
      }
    });

    console.log('initial', contacts);
    console.log('sorted', sorted_contacts);

    setContacts(sorted_contacts);
  }, [setSearchQuery, contacts, searchQuery, setContacts]);

  return (
    <div className={styles.container}>
      <input type="text" value={searchQuery} onChange={handleInputChange} />
    </div>
  );
};

export { ContactSearchInput };
