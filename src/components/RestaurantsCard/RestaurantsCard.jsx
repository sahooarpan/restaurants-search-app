import React from 'react';
import './RestaurantCard.css';

 const RestaurantsCard=({name,cuisines,timings,imgUrl,city}) =>{
     
     
    return (
    <div className="col-xs-12 col-md-4 mb-2">
        
    <div className="card">
        
  <img className="card-img-top img-responsive" src={imgUrl} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">Cusines:  {cuisines}</p>
    <p className="card-text">Timing:  {timings}</p>
    <a className="#" className="btn btn-success btn-block">Order Now</a>
  </div>

            
        </div>
        </div>
    )
}

export default RestaurantsCard;