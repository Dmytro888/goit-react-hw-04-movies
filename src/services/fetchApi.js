import Axios from 'axios';

const key = '65999cd4dc4e9b42ad69f2cfa64d7f94';

const popularMoviesFetch = async () => {
  const response = await Axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
  );
  return response.data.results;
};

const searchMoviesFetch = async query => {
  const response = await Axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1`,
  );

  return response.data.results;
};

const moviesDetailsFetch = async movieId => {
  const response = await Axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`,
  );

  return response.data;
};

const moviesCastFetch = async movieId => {
  const response = await Axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=en-US`,
  );

  return response.data.cast;
};
const moviesReviewsFetch = async movieId => {
  const response = await Axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${key}&language=en-US`,
  );

  return response.data.results;
};

export {
  popularMoviesFetch,
  searchMoviesFetch,
  moviesDetailsFetch,
  moviesCastFetch,
  moviesReviewsFetch,
};
