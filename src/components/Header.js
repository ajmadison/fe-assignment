import React from 'react';
import styles from './Header.module.css';

const Header = ({ title, subcopy }) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.header}>{title}</h1>
        <p className={styles.subcopy}>{subcopy}</p>
    </div>
  );
}

export default Header;
