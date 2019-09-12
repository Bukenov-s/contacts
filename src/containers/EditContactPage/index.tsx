import React, { FC, useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import * as contactActions from '~/redux/contacts/actions';
import { IState } from '~/types';
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';

const mapStateToProps = ({ contacts }: IState) => ({
  name: contacts.selected_contact.name,
  phone: contacts.selected_contact.phone,
  email: contacts.selected_contact.email,
});

const mapDispatchToProps = {
  getContact: contactActions.getContact,
  submitContactEdit: contactActions.submitContactEdit,
  cancelContactEdit: contactActions.cancelContactEdit,
};

type Props = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps> & { match: any };

const EditContactPage: FC<Props> = ({
  match,
  name,
  phone,
  email,
  getContact,
  submitContactEdit,
  cancelContactEdit,
}) => {
  const [edited_name, setEditedName] = useState('');
  const [edited_email, setEditedEmail] = useState('');
  const [edited_phone, setEditedPhone] = useState('');

  const { id } = match.params;

  useEffect(() => {
    getContact(id);
  }, [getContact, id]);

  useEffect(() => {
    setEditedName(name);
    setEditedEmail(email);
    setEditedPhone(phone);
  }, [name, email, phone]);

  const handleChange = useCallback((e) => {
    if (e.target.name === 'name') {
      setEditedName(e.target.value);
    }

    if (e.target.name === 'email') {
      setEditedEmail(e.target.value);
    }

    if (e.target.name === 'phone') {
      setEditedPhone(e.target.value);
    }
  }, [setEditedEmail, setEditedName, setEditedPhone]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const edited_contact = {
      id: +id,
      name: edited_name,
      email: edited_email,
      phone: edited_phone,
    };

    submitContactEdit(edited_contact);
  }, [edited_name, edited_email, edited_phone, id, submitContactEdit]);

  const handleCancelClick = useCallback(() => {
    cancelContactEdit();
  }, [cancelContactEdit]);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={edited_name} onChange={handleChange} />
        <input type="text" name="phone" value={edited_phone} onChange={handleChange} />
        <input type="text" name="email" value={edited_email} onChange={handleChange} />

        <button
          type="submit"
          className={styles.submit}
        >
          submit
        </button>
        <button
          type="button"
          className={styles.cancel}
          onClick={handleCancelClick}
        >
          cancel
        </button>
      </form>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditContactPage);
