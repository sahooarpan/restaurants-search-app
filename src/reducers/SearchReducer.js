import { FETCH_RESTAURANTS,LOADING,SEARCH_LOCATION } from '../actions/types';

const INITIAL_STATE={
    text:'',
    restaurants:[],
    loading:false
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
      case SEARCH_LOCATION:
        return {
          ...state,
          text: action.payload,
          loading: false
        };
      case FETCH_RESTAURANTS:
        return {
          ...state,
          restaurants: action.payload,
          loading: false
        };
     
      case LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }
  