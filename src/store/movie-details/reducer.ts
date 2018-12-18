import { MovieDetails } from './definition';
import { FETCH_MOVIE_DETAILS } from './actions';

const initialState: MovieDetails = null;

export default ( state = initialState, action = null) => {
  const { payload } = action;
  switch(action.type) {
    case FETCH_MOVIE_DETAILS :
      return payload;
    default :
      return state;
  }
}