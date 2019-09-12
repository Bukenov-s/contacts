import React, { FC, useState, useCallback } from 'react';
import * as styles from './styles.scss';
import { IContact } from '~/types';

const up_icon = require('~/assets/up.svg');
const down_icon = require('~/assets/down.svg');

interface IProps {
  name: string;
  className: any;
  contacts: IContact[];
  setContacts: (contacts: IContact[]) => void;
}

const SortingCategory: FC<IProps> = ({
  name,
  className,
  contacts,
  setContacts,
}) => {
  const [sorting_order, setSortingOrder] = useState('');

  const handleClick = useCallback(() => {
    if (sorting_order === 'desc' || sorting_order === '') {
      setSortingOrder('asc');
      const sorted_contacts = [...contacts].sort((a, b) => {
        if (a[name] > b[name]) {
          return 1;
        }

        if (b[name] > a[name]) {
          return -1;
        }

        return 0;
      });
      setContacts(sorted_contacts);
    }

    if (sorting_order === 'asc') {
      setSortingOrder('desc');
      const sorted_contacts = [...contacts].sort((a, b) => {
        if (a[name] > b[name]) {
          return -1;
        }

        if (b[name] > a[name]) {
          return 1;
        }

        return 0;
      });
      setContacts(sorted_contacts);
    }
  }, [sorting_order, setSortingOrder, contacts, name, setContacts]);

  const setIcon = () => {
    if (sorting_order === 'asc') {
      return up_icon;
    }

    if (sorting_order === 'desc') {
      return down_icon;
    }

    return '';
  };

  return (
    <button
      className={className}
      onClick={handleClick}
      type="button"
    >
      <span>{name}</span>
      <span>
        <img className={styles.icon} src={setIcon()} alt="" />
      </span>
    </button>
  );
};

export { SortingCategory };
