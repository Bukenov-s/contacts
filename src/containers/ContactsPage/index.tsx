import React, { FC, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as styles from './styles.scss';
import { ContactSearchInput } from '~/components/contacts/ContactSearchInput';
import { ContactsSortingPanel } from '~/components/contacts/ContactsSortingPanel';
import { ContactsList } from '~/components/contacts/ContactsList';
import { IState } from '~/types';
import * as contactActions from '~/redux/contacts/actions';

const mapStateToProps = ({ contacts }: IState) => ({
  contacts_list: contacts.contacts_list,
});

const mapDispatchToProps = {
  deleteContact: contactActions.deleteContact,
};

type Props = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps> & {};

const ContactsPage: FC<Props> = ({
  contacts_list,
  deleteContact,
}) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(contacts_list);
  }, [contacts_list]);

  return (
    <div className={styles.container}>
      <div className="table">
        <ContactSearchInput
          contacts={contacts}
          setContacts={setContacts}
        />
        <ContactsSortingPanel
          contacts={contacts}
          setContacts={setContacts}
        />
        <ContactsList
          contacts={contacts}
          deleteContact={deleteContact}
        />
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactsPage);
