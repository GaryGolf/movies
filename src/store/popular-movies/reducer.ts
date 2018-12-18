import { PopularMovie } from './definition'
import { 
  FETCH_POPULAR_MOVIES 
} from './actions'
const initialState: PopularMovie[] = []

export default ( state = initialState, action = null) => {
  const { payload } = action;
  switch(action.type) {
    case FETCH_POPULAR_MOVIES :
      return payload;
    default :
      return state;
  }
}
