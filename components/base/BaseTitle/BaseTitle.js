import React from 'react';
import styles from './BaseTitle.module.scss';

const BaseTitle = ({ children, style, type = 'center' }) => {
  return (
    <h1
      className={`${styles.BaseTitle} ${styles['BaseTitle_' + type]}`}
      style={{ ...style }}
    >
      {children}
    </h1>
  );
};

export default BaseTitle;
