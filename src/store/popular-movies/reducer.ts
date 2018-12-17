import { PopularMoviesStore } from './types'
import { 
  FETCH_POPULAR_MOVIES 
} from './actions'
const initialState: PopularMoviesStore[] = []

export default ( state = initialState, action = null) => {
  const { payload } = action;
  switch(action.type) {
    case FETCH_POPULAR_MOVIES :
      console.log('fetch pop movies')
    default :
      return state;
  }
}