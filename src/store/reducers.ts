import { combineReducers, Reducer } from 'redux';
import { AppStore } from 'store';

import popular from './popular-movies/reducer';
import details from './movie-details/reducer';

export default combineReducers({ 
  popular, 
  details,
}) as Reducer<AppStore>;