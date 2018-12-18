import { getPopular } from './api';
import { AppStore } from 'store';

export const FETCH_POPULAR_MOVIES = 'FETCH_POPULAR_MOVIES';

export const fetchPopularMovies = () => (dispatch, getState) => {
  const state = getState() as AppStore;
  const page = (!state.popular) ? 1 : state.popular.page + 1;
  if (!!state.popular && page > state.popular.total_pages) return;
  return getPopular(page).then(result => dispatch({ type: FETCH_POPULAR_MOVIES, payload: result.data }));
}

