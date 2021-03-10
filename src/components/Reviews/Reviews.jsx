import React from 'react';
import styles from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <div>
      {
        <ul className={styles.container}>
          {reviews.length ? (
            reviews.map(({ id, author, content }) => (
              <li className={styles.item} key={id}>
                <p className={styles.author}>{author}</p>
                <p className={styles.review}>Character: {content}</p>
              </li>
            ))
          ) : (
            <span>Reviews not found</span>
          )}
        </ul>
      }
    </div>
  );
};

export default Reviews;
