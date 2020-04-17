import { FETCH_RESTAURANTS,LOADING,SEARCH_LOCATION,FETCH_RESTAURANT,FETCH_REVIEWS } from '../actions/types';

const INITIAL_STATE={
    text:'',
    restaurants:[],
    restaurant:[],
    reviews:[],
    loading:false,
    
    

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

      case FETCH_RESTAURANT:
        return{
          ...state,
          restaurant:action.payload,
          loading:false
          
        } 
      case FETCH_REVIEWS:
        return{
          ...state,
          reviews:action.payload,
          loading:false
        }   


     
      case LOADING:
        return {
          ...state,
          loading: true
        };

    
       
      default:
        return state;
    }
  }
  