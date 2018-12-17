export const FETCH_POPULAR_MOVIES = 'FETCH_POPULAR_MOVIES';

export const fetchPopularMovies = () => dispatch => {
  return dispatch({ type: FETCH_POPULAR_MOVIES });
}
