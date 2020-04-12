import { FETCH_RESTAURANTS,LOADING,SEARCH_LOCATION,FETCH_GEOLOCATION } from '../actions/types';

const INITIAL_STATE={
    text:'',
    restaurants:[],
    loading:false,
    coords:{
        long:0,
        lat:0
    }

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

       case FETCH_GEOLOCATION:
           return{
               ...state,
               coords:action.payload,
               loading:false

           }

       
      default:
        return state;
    }
  }
  