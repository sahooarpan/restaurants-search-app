import { SEARCH_LOCATION,FETCH_RESTAURANTS,LOADING } from './types';
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