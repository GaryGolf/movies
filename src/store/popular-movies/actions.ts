import { getPopular, getSearch } from './api';
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

