import React from 'react';
import styles from './MovieDetailsInfo.module.css';

const MovieDetailsInfo = ({
  poster_path,
  title,
  vote_average,
  release_date,
  genres,
  overview,
}) => {
  return (
    <div className={styles.container}>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : 'defaultMovie'
          }
        />
      </div>
      <div className={styles.about}>
        <h2 className={styles.title}>{title}:</h2>
        <h3>About film:</h3>
        <ul>
          <li>
            {' '}
            <span className={styles.subtitle}>Rating:</span> {vote_average}
          </li>
          <li>
            {' '}
            <span className={styles.subtitle}>Realise Date:</span>{' '}
            {release_date}
          </li>
          <ul>
            <span className={styles.subtitle}>Genres:</span>{' '}
            {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </ul>
        </ul>
      </div>
      <div>
        <h3>Overview:</h3>
        <p className={styles.about}>{overview}</p>
      </div>
    </div>
  );
};

export default MovieDetailsInfo;
