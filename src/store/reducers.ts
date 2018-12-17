import { combineReducers, Reducer } from 'redux';
import AppStore from './types';

import popular from './popular-movies/reducer';

export default combineReducers({ 
  popular
}) as Reducer<AppStore>;