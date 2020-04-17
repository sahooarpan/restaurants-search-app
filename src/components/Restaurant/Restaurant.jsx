import React, { Component } from 'react'
import './Restaurant.css'
import { connect } from 'react-redux';
import { fetchCurrentRestaurant,setLoading } from '../../actions/index' ;
import Spinner from '../Spinner/Spinner'
import RestaurantReiews from '../RestaurantReiews/RestaurantReiews'

class Restaurant extends Component {
  
  componentDidMount(){
    
    this.props.fetchCurrentRestaurant(this.props.match.params.id);
    
    
  }

  
     render() {
      const { restaurant } =this.props;
      if(restaurant.length===0){
        return <Spinner/>;
      }
    
      
      
      
        let restaurantContent= (
          
          
          <div className="container-fluid">
          
            
            <div className="row">
          
              
              <div className="image-container col-xs-6 my-2 col-md-6">
                
                  <img className="img-fluid img-thumbnail" src={restaurant.photos[0].photo.url}/>
                    
              </div>
              <div className="col-xs-6  my-2 my-auto mr-auto content col-md-4">
              <h4 className="text-secondary mb-3">{restaurant.name}</h4>
              <p>{restaurant.cuisines}</p>
        <p>{restaurant.location.address}</p>
              <p>{  restaurant.location.locality}</p>
              <p>{  restaurant.location.city}</p>
              <div className="box">
               <div className="child-1"> 
              { restaurant.user_rating.aggregate_rating}<i class="fas fa-star"></i>
              </div> 
              
              <div className="votes">
              {restaurant.user_rating.votes} reviews
              </div>
              </div>
              </div>
              <div>
                </div> 
              </div>
              </div>      
          
                  );
        
                  
                  return <div>{restaurantContent}
                  <RestaurantReiews id={this.props.match.params.id} />
                  </div>;
                
            }

      } 
      


const mapStateToProps = state=>({
  restaurant:state.restaurants.restaurant,
  loading:state.restaurants.loading
})

export default connect(mapStateToProps,{fetchCurrentRestaurant,setLoading})(Restaurant);
