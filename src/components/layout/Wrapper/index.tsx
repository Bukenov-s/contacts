import React, { FC } from 'react';
import * as styles from './styles.scss';

const Wrapper: FC<any> = ({
  children,
}) => {
  return (
    <div className={styles.wrapper}>{children}</div>
  );
};

export { Wrapper };