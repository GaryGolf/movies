import { MovieDetails } from './definition';
import { 
  CLEAR_MOVIE_DETAILS,
  FETCH_MOVIE_DETAILS,
} from './actions';

const initialState: MovieDetails = null;

export default ( state = initialState, action = null) => {
  const { payload } = action;
  switch(action.type) {
    case CLEAR_MOVIE_DETAILS :
    return null;
    case FETCH_MOVIE_DETAILS :
      return payload;
    default :
      return state;
  }
}