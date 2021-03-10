import React from 'react';
import Navigation from '../Navigation';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <header className={styles.pageHeader}>
      <Navigation />
    </header>
  );
};

export default NavBar;
