import React from 'react';
import './RestaurantCard.css';
import { withRouter } from 'react-router-dom'
 const RestaurantsCard=({id,name,cuisines,timings,imgUrl,history,locality,city,address}) =>{
     
     
    return (
    <div className="col-xs-12 col-md-4 mb-2">
        
    <div className="card">
        
  <img className="card-img-top img-responsive" src={imgUrl} alt="Card image cap"/>
  <div className="card-body">
    <h4 className="text-primary card-title">{name}</h4>
    <p className="card-text">Cusines:  {cuisines}</p>
   
    <p className="card-text">Address:  {address}</p>

    <p className="card-text">Locality:  {locality}</p>
    <p className="card-text">City:  {city}</p>

    <a className="#" className="btn btn-success btn-block" 
    onClick={()=>{history.push(`/restaurant/${id}`)}} >Order Now</a>
  </div>

            
        </div>
        </div>
    )
}

export default  withRouter(RestaurantsCard);