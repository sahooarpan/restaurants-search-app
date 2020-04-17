import React from 'react';
import { connect } from 'react-redux'
import RestaurantsCard from '../RestaurantsCard/RestaurantsCard'

class RestaurantsContainer extends React.Component{
    state={
        city:''
    }
    render(){

     const {restaurants}=this.props;
     
     
     console.log(restaurants,"rrs");

    let content=restaurants.length>0?restaurants.map((restaurant)=>(
    

        <RestaurantsCard key={restaurant.restaurant.id} {...restaurant}
        />
    )):null;

    
    
    return(
        
        <div className="container">
        
        <div className="row">
        
        {content}    
        </div>    



            
        </div>
);
}
}

const mapStateToProps =state=>({
    restaurants:state.restaurants.restaurants
})

export default connect(mapStateToProps)(RestaurantsContainer);
