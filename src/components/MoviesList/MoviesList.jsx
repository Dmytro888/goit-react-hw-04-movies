import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './MoviesList.module.css';

const MoviesList = ({ renderMovie, location }) => {
  return (
    <div>
      <ul className={styles.moviesList}>
        {renderMovie.map(({ title, id, poster_path, original_name }) => (
          <li key={id}>
            <div className={styles.link}>
              <NavLink
                className={styles.link}
                to={{
                  pathname: `/movies/${id}`,
                  state: { from: location },
                }}
              >
                <img
                  className={styles.img}
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w300${poster_path}`
                      : 'defaultMovie'
                  }
                />
                <p className={styles.title}>{title || original_name}</p>
              </NavLink>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withRouter(MoviesList);
