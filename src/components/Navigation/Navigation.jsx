import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <div>
      <ul className={styles.listContainer}>
        <li>
          <NavLink
            exact
            className={styles.base}
            activeClassName={styles.active}
            to='/'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={styles.base}
            activeClassName={styles.active}
            to='/movies'
          >
            Search movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
