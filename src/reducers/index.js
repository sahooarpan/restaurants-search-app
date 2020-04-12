import SearchReducer from './SearchReducer';

import { combineReducers } from 'redux';


export default combineReducers({
  restaurants: SearchReducer
});
