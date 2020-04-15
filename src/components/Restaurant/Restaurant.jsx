import React, { Component } from 'react'
import './Restaurant.css'
import { connect } from 'react-redux';
import { fetchCurrentRestaurant } from '../../actions/index' 

class Restaurant extends Component {
  
  componentWillMount(){
    
    this.props.fetchCurrentRestaurant(this.props.match.params.id);
    
  }
    render() {
      const { restaurant } =this.props;
      console.log("rsttstst",restaurant.address
      );

        return (
          
          <div class="jumbotron text-center hoverable p-4">

  
  <div class="row">

    
    <div class="col-md-4 offset-md-1 mx-3 my-3">
        <h1>{restaurant.location.address}</h1>
            
      
      
      

    </div> 
    </div>
    </div>      

        )
    }
}

const mapStateToProps = state=>({
  restaurant:state.restaurants.restaurant,
  loading:state.restaurants.loading
})

export default connect(mapStateToProps,{fetchCurrentRestaurant})(Restaurant);
