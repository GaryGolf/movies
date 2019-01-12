import { PopularMovieData } from './definition'
import { 
  FETCH_POPULAR_MOVIES,
  SEARCH_POPULAR_MOVIES,
} from './actions'
const initialState: PopularMovieData = null

export default ( state = initialState, action = null) => {
  const { payload } = action;
  switch(action.type) {
    case FETCH_POPULAR_MOVIES : {

      if (!state) return payload;
      const results = [...state.results, ...payload.results]
      return { ...payload, results };
    }

    case SEARCH_POPULAR_MOVIES : {
      return { ...payload };
    }
    default :
      return state;
  }
}
