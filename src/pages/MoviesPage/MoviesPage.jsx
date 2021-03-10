import React, { Component } from 'react';
import { searchMoviesFetch } from '../../services/fetchApi';
import MoviesList from '../../components/MoviesList';
import styles from './MoviesPage.module.css';

class MoviesPage extends Component {
  state = {
    searchMovies: [],
    query: '',
  };

  componentDidMount () {
    if (this.props.location.search) {
      const query = this.props.location.search.slice(1);
      searchMoviesFetch(query).then(searchMovies =>
        this.setState({ searchMovies }),
      );
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      searchMoviesFetch(this.state.query).then(searchMovies =>
        this.setState({ searchMovies }),
      );
    }
  }

  handleChange = evt => {
    this.setState({ query: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { query } = this.state;

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: query,
    });
  };

  render () {
    const { query, searchMovies } = this.state;
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Search Movies...</h1>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <input
            className={styles.input}
            name='query'
            type='text'
            placeholder='Search films'
            value={query}
            onChange={this.handleChange}
          ></input>
          <button className={styles.button} type='submit'>
            Search
          </button>
        </form>
        {searchMovies.length > 0 && <MoviesList renderMovie={searchMovies} />}
      </div>
    );
  }
}

export default MoviesPage;
