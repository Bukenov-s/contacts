import React, { FC } from 'react';
import * as styles from './styles.scss';

const Footer: FC<{}> = () => {
  return (
    <footer className={styles.footer}>&copy; serik bukenov 2019</footer>
  );
};

export { Footer };