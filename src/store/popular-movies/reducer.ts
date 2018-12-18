import { PopularMovieData } from './definition'
import { 
  FETCH_POPULAR_MOVIES 
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
    default :
      return state;
  }
}
