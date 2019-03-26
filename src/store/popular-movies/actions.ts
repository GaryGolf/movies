import { getPopular, getSearch, getKeywordSearch } from './api';
import { AppStore } from 'store';

export const FETCH_POPULAR_MOVIES = 'FETCH_POPULAR_MOVIES';
export const fetchPopularMovies = () => (dispatch, getState) => {
  const state = getState() as AppStore;
  const page = (!state.popular) ? 1 : state.popular.page + 1;
  if (!!state.popular && page > state.popular.total_pages) return;
  return getPopular(page).then(result => dispatch({ type: FETCH_POPULAR_MOVIES, payload: result.data }));
}

export const SEARCH_POPULAR_MOVIES = 'SEARCH_POPULAR_MOVIES';
export const searchPopularMovies = (query: string) => (dispatch, getState) => {
  const state = getState() as AppStore;
  const page = (!state.popular) ? 1 : state.popular.page + 1;
  if (!!state.popular && page > state.popular.total_pages) return;
  return getSearch(query, page).then(result => {
    console.log(result)
    return dispatch({ type: SEARCH_POPULAR_MOVIES, payload: result.data });
  });
}

export const SEARCH_MOVIES_KEYWORD = 'SEARCH_MOVIES_KEYWORD';
export const searchMoviesKeyword = (query: string) => dispatch => {
  return getKeywordSearch(query).then(result => {
    console.log('get keywords ', result)
    return dispatch({ type: SEARCH_MOVIES_KEYWORD, payload: result.data });
  })
}

