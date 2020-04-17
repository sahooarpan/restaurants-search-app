import React from 'react';
import './RestaurantCard.css';

import {withRouter } from 'react-router-dom'
 const RestaurantsCard=(props) =>{
     
  const { restaurant,history,match } = props;
     
     console.log(props,"rr1");
    
     
    return (
    
    <div className="col-xs-12 col-md-4 mb-2">
    
      
        
    <div className="card">
        
  <img className="card-img-top img-responsive" src={restaurant.photos?restaurant.photos[0].photo.url:"https://b.zmtcdn.com/data/reviews_photos/7fb/0b4322b4bed02dac14d8078cb3e657fb_1581062070.jpg"} alt="Card image cap"/>
  <div className="card-body">
    <h4 className="text-primary card-title">{restaurant.name}</h4>
    <p className="card-text">Cusines:  {restaurant.cuisines}</p>
   
    <p className="card-text">Address:  {restaurant.location.address}</p>

    <p className="card-text">Locality:  {restaurant.location.locality}</p>
    <p className="card-text">City:  {restaurant.location.city}</p>

    <a className="#" className="btn btn-success btn-block" onClick={()=>{history.push(`/restaurant/${restaurant.id}`)}}
     >See Reviews</a>
  </div>

            
        </div>
        </div>
    )
}

export default  withRouter(RestaurantsCard);