import { SEARCH_LOCATION,FETCH_RESTAURANTS,LOADING,FETCH_RESTAURANT } from './types';
import axios from '../api/axiosconfig';

export const serachLocation=text=>dispatch=>{
    dispatch({
        type:SEARCH_LOCATION,
        payload:text
    })
};





export const fetchRestaurants=text=> async dispatch=>{
    let { data } = await axios.get(`/locations?query=${text}`);
    
    let { entity_type,entity_id  } = data.location_suggestions[0];
    console.log(entity_id,entity_type,"eeeee");
    axios.get(`/location_details?entity_id=${entity_id}&entity_type=${entity_type}`).then(res=>{
    dispatch({
            type:FETCH_RESTAURANTS,
            payload:res.data.best_rated_restaurant
        })
    })
    
    
};

export const fetchCurrentRestaurant=id=> async dispatch=>{
     
    let { data } = await axios.get(`/restaurant?res_id=${id}`);
   
    dispatch({
        type:FETCH_RESTAURANT,
        payload:data
    })

}

export const fetchRestaurantsFromCurrentLocation=(latitude,longitude)=> async dispatch=>{
    let { data } = await axios.get(`/geocode?lat=${latitude}&lon=${longitude}`);
    let { entity_type,entity_id  } = data.location;
    console.log(entity_type,entity_id);
    axios.get(`/location_details?entity_id=${entity_id}&entity_type=${entity_type}`).then(res=>{
    dispatch({
            type:FETCH_RESTAURANTS,
            payload:res.data.best_rated_restaurant
        })
    })
    
    
};




export const setLoading =()=>{
    return{
        type:LOADING
    }
}