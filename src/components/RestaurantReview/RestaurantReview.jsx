import React from 'react'
import './RestaurantReview.css'
export default function RestaurantReview({reviews}) {
    console.log("reviews",reviews);
    if(reviews){
        return reviews.map(review=>{

        return <div className=" mt-7 row">
            <div className="col-xs-4 col-md-4 mb-3 offset-md-1 mb-0">
                <img className="rounded review-img" src={review.review.user.profile_image}/>
        <h6 className="text-dark mt-1">{review.review.user.name}</h6>
        <h6 className="text-muted">{review.review.review_time_friendly}</h6>

            </div>
            <div className="col-xs-7 col-md-7  mb-4  review">
        <p>{review.review.review_text}</p>   
        <span className="review-box"> 
              {review.review.rating}<i class="fas fa-star"></i>
              </span> 
        <p className="mt-3 text-danger ml-1" >{review.review.rating_text}</p>     

            </div>

        </div>
        
        })
    }else{
        return "";
    }
    
}
