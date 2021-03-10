import React, { Component } from 'react';
import {
  moviesDetailsFetch,
  moviesCastFetch,
  moviesReviewsFetch,
} from '../../services/fetchApi';
import { Route, Switch, NavLink } from 'react-router-dom';
import MovieDetailsInfo from '../../components/MovieDetailsInfo';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import routes from '../../routes';
import styles from './MoviesDetailPage.module.css';

class MoviesDetailPage extends Component {
  state = {
    movieDetails: {},
    cast: [],
    reviews: [],
  };

  componentDidMount () {
    const movieId = this.props.match.params.movieId;
    moviesDetailsFetch(movieId).then(movie => {
      this.setState({ movieDetails: { ...movie } });
    });
    moviesCastFetch(movieId).then(cast => {
      this.setState({ cast: cast });
    });

    moviesReviewsFetch(movieId).then(reviews => {
      this.setState({ reviews: reviews });
    });
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || routes.home);
  };

  render () {
    const { cast, reviews, movieDetails } = this.state;
    const { url, path } = this.props.match;

    return (
      <div className={styles.container}>
        <MovieDetailsInfo {...movieDetails} />
        <button
          className={styles.buttonBack}
          type='button'
          onClick={this.handleGoBack}
        >
          Go Back
        </button>
        <h3>Additional Information:</h3>
        <NavLink to={`${url}/cast`}>
          <button className={styles.linkButton}>Cast</button>{' '}
        </NavLink>
        <NavLink to={`${url}/reviews`}>
          <button className={styles.linkButton}>Reviews</button>{' '}
        </NavLink>
        <Switch>
          <Route path={`${path}/cast`} render={props => <Cast cast={cast} />} />
          <Route
            path={`${path}/reviews`}
            render={props => <Reviews reviews={reviews} />}
          />
        </Switch>
      </div>
    );
  }
}

export default MoviesDetailPage;
