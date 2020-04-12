import React from 'react';

 const RestaurantsCard=({name,cuisines,timings,imgUrl}) =>{
     
     
    return (
    <div className="col-xs-12 col-md-3 mb-2">
    <div class="card">
  <img class="card-img-top img-responsive" src={imgUrl} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">Cusines:  {cuisines}</p>
    <p class="card-text">Timing:  {timings}</p>
    <a href="#" class="btn btn-success btn-block">Order Now</a>
  </div>

            
        </div>
        </div>
    )
}

export default RestaurantsCard;