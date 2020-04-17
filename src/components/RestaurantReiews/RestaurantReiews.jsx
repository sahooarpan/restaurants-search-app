import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRestaurantReviews,setLoading } from '../../actions/index'
import Spinner from '../Spinner/Spinner';
import RestaurantReview from '../RestaurantReview/RestaurantReview';

 class RestaurantReiews extends Component {

    componentDidMount(){
        this.props.fetchRestaurantReviews(this.props.id);
    
    }

    render() {

        const { reviews } = this.props;
        
        if(reviews==null){
            return <Spinner/>
        }
    
        const {user_reviews} = reviews;
       
        
      
            
        

        return (
            <div className="container">
             <h1 className="text-center text-danger"> Reviews</h1>
             <RestaurantReview  reviews={user_reviews} />
            </div>
        )
    }
}

const mapStateToProps = state=>({
    reviews:state.restaurants.reviews
})

export default connect(mapStateToProps,{fetchRestaurantReviews,setLoading})(RestaurantReiews);