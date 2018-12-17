import api from '../api'
export const FETCH_POPULAR_MOVIES = 'FETCH_POPULAR_MOVIES';

export const fetchPopularMovies = () => dispatch => api
  .getPopular()
  .then(result => dispatch({ type: FETCH_POPULAR_MOVIES, payload: result.data.results }));
