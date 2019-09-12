import React, { FC, useState, useCallback, FormEventHandler } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';
import { IState } from '~/types';
import * as actions from '~/redux/contacts/actions';

const mapStateToProps = ({ contacts }: IState) => ({
  // for later usage maybe
});

const mapDispatchToProps = {
  addNewContact: actions.addNewContact,
};

type Props = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps> & {};

const AddContactPage: FC<Props> = ({
  addNewContact,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit: FormEventHandler = useCallback((e) => {
    e.preventDefault();

    const new_contact = {
      id: Math.random() * Math.random(),
      name,
      email,
      phone,
    };

    addNewContact(new_contact);

    setName('');
    setEmail('');
    setPhone('');
  }, [name, email, phone, addNewContact]);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name" id="name">name</label>
          <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="phone" id="phone">phone</label>
          <input type="text" name="phone" value={phone} onChange={e => setPhone(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="email" id="email">email</label>
          <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="field">
          <button type="submit">add</button>
        </div>
        <div className="field">
          <button type="button">
            <Link to="/">Cancel</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddContactPage);
