import React, { FC, useCallback } from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';

interface IProps {
  id: number;
  name: string;
  email: string;
  phone: string;
  deleteContact: any;
}

const ContactsListItem: FC<IProps> = ({
  id,
  name,
  email,
  phone,
  deleteContact,
}) => {
  const handleDeleteClick = useCallback(() => {
    deleteContact(id);
  }, [deleteContact, id]);

  return (
    <div
      className={styles.container}
    >
      <div className={styles.name_field}>
        {name}
      </div>
      <div className={styles.email_field}>
        {email}
      </div>
      <div className={styles.phone_field}>
        {phone}
      </div>
      <div className={styles.buttons_field}>
        <button
          type="button"
          className={styles.edit}
        >
          <Link to={`/edit/${id}`}>edit</Link>
        </button>
        <button
          type="button"
          className={styles.delete}
          onClick={handleDeleteClick}
        >
          del
        </button>
      </div>
    </div>
  );
};

export { ContactsListItem };
