import { getDetails } from './api';

export const FETCH_MOVIE_DETAILS = 'FETCH_MOVIE_DETAILS';

export const fetchMovieDetails = (id:string) => dispatch => getDetails(id)
  .then(result => dispatch({ type: FETCH_MOVIE_DETAILS, payload: result.data }));
