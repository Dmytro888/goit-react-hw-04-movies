import React from 'react';
import styles from './Cast.module.css';

const Cast = ({ cast }) => {
  return (
    <div>
      <ul className={styles.container}>
        {cast.map(({ cast_id, profile_path, name, character }) => (
          <li className={styles.actors} key={cast_id}>
            <img
              className={styles.img}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  : 'defaultMovie'
              }
              width='50px'
            />
            <p className={styles.text}>{name}</p>
            <p className={styles.text}>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
