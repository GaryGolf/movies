import { getKeywordSearch } from './api';
import { AppStore } from 'store';


export const SEARCH_MOVIES_KEYWORD = 'SEARCH_MOVIES_KEYWORD';
export const searchMoviesKeyword = (query: string) => dispatch => {
  return getKeywordSearch(query).then(result => {
    return dispatch({ type: SEARCH_MOVIES_KEYWORD, payload: result.data });
  })
}

export const SEARCH_MOVIES_KEYWORD_CLEAR = 'SEARCH_MOVIES_KEYWORD_CLEAR';
export const searchMoviesKeywordClear = () => dispatch => dispatch({
  type: SEARCH_MOVIES_KEYWORD_CLEAR
});
