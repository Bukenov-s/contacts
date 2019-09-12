import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';

const Navbar: FC<{}> = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">Contacts</Link>
        </div>
        <ul className={styles.links}>
          <Link to="/add">Add Contact</Link>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
