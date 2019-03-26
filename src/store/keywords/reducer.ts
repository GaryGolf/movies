import { SearchKeywordData, SearchKeyword } from './definitions'
import { 
  SEARCH_MOVIES_KEYWORD
} from './actions'
const initialState: SearchKeyword[] = []

export default ( state = initialState, action = null) => {
  const { payload } = action;
  switch(action.type) {
    case SEARCH_MOVIES_KEYWORD : 
      return [...payload.results];
    default :
      return state;
  }
}
