import { combineReducers, Reducer } from 'redux';
import { AppStore } from 'store';

import popular from './popular-movies/reducer';
import details from './movie-details/reducer';
import keyword from './keywords/reducer';

export default combineReducers({ 
  popular, 
  details,
  keyword,
}) as Reducer<AppStore>;