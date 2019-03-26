import { getKeywordSearch } from './api';
import { AppStore } from 'store';


export const SEARCH_MOVIES_KEYWORD = 'SEARCH_MOVIES_KEYWORD';
export const searchMoviesKeyword = (query: string) => dispatch => {
  return getKeywordSearch(query).then(result => {
    console.log('get keywords ', result)
    return dispatch({ type: SEARCH_MOVIES_KEYWORD, payload: result.data });
  })
}

