import { getDetails } from './api';

export const CLEAR_MOVIE_DETAILS = 'CLEAR_MOVIE_DETAILS';

export const FETCH_MOVIE_DETAILS = 'FETCH_MOVIE_DETAILS';
export const fetchMovieDetails = (id:string) => 
  dispatch => {
    dispatch({ type: CLEAR_MOVIE_DETAILS });
    getDetails(id).then(result => {
      dispatch({ type: FETCH_MOVIE_DETAILS, payload: result.data })
    });
  };
