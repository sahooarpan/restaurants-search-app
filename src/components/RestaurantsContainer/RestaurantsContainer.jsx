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

    let content=restaurants.length>0?restaurants.map((restaurant,index)=>(

        <RestaurantsCard key={index} name={restaurant.restaurant.name} cuisines={restaurant.restaurant.cuisines} 
        timings={restaurant.restaurant.timings} imgUrl={restaurant.restaurant.photos?restaurant.restaurant.photos[0].photo.url:'https://b.zmtcdn.com/data/reviews_photos/530/687ee451877586f48c3bf8513b618530_1553174980.jpg'}
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

