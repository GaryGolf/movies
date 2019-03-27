import { SearchKeywordData, SearchKeyword } from './definitions'
import { 
  SEARCH_MOVIES_KEYWORD,
  SEARCH_MOVIES_KEYWORD_CLEAR,
} from './actions'
interface KeywordAction {
  type: string;
  payload: SearchKeywordData;
}
const initialState: SearchKeyword[] = []

export default ( state = initialState, action: KeywordAction = null) => {
  switch(action.type) {
    case SEARCH_MOVIES_KEYWORD : {
      const results: SearchKeyword[] = action.payload.results;
      if (results.length > 10) results.length = 10;
      return [...results];
    }
    case SEARCH_MOVIES_KEYWORD_CLEAR : 
      return [];
    default :
      return state;
  }
}
