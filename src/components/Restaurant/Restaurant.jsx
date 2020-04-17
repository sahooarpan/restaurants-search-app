import React, { Component } from 'react'
import './Restaurant.css'
import { connect } from 'react-redux';
import { fetchCurrentRestaurant,setLoading } from '../../actions/index' ;
import Spinner from '../Spinner/Spinner'

class Restaurant extends Component {
  
  componentDidMount(){
    
    this.props.fetchCurrentRestaurant(this.props.match.params.id);
    this.props.setLoading();
    
  }

  
     render() {
      const { restaurant,loading } =this.props;
    console.log('ldng',loading)
    
      
      
      
        let restaurantContent= (
          
          
          <div className="container-fluid">
          
            
            <div className="row">
          
              
              <div className="col-xs-12 my-4 col-md-4">
                
                  <img className="img-fluid img-thumbnail" src={restaurant && restaurant.photos && restaurant.photos[7].photo.url}/>
                    
              </div>
              <div className="col-xs-12  my-4 col-md-8">
              <h4>{restaurant.name}</h4>
              <p>{restaurant.cuisines}</p>
              <p>{ restaurant.location && restaurant.location.locality}</p>
              <div className="box">
               <div className="child-1"> 
              {restaurant.user_rating  && restaurant.user_rating.aggregate_rating}<i class="fas fa-star"></i>
              </div> 
              
              <div className="votes">
              {restaurant.user_rating  && restaurant.user_rating.votes} reviews
              </div>
              </div>
              </div>
              <div>
                </div> 
              </div>
              </div>      
          
                  );
        
                  let content = loading ? <Spinner /> : restaurantContent;
                  return <div>{content}</div>;
                
            }

      } 
      


const mapStateToProps = state=>({
  restaurant:state.restaurants.restaurant,
  loading:state.restaurants.loading
})

export default connect(mapStateToProps,{fetchCurrentRestaurant,setLoading})(Restaurant);
