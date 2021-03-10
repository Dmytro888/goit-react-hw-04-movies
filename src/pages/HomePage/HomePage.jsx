import React, { Component } from 'react';
import { popularMoviesFetch } from '../../services/fetchApi';
import MoviesList from '../../components/MoviesList';
import styles from './HomePage.module.css';

class HomePage extends Component {
  state = {
    popularMovies: [],
  };

  componentDidMount () {
    popularMoviesFetch().then(movies => {
      this.setState({ popularMovies: movies });
    });
  }

  render () {
    const { popularMovies } = this.state;
    console.log(popularMovies);
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Popular Movies For Today...</h1>
        <MoviesList renderMovie={popularMovies} />
      </div>
    );
  }
}

export default HomePage;
