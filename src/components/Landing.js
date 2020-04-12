import React, { Component } from "react";
import SearchForm from '../components/form/Form';
import RestaurantsContainer from '../components/RestaurantsContainer/RestaurantsContainer'

class Landing extends Component {
  render() {
    return (
        <div>
        <SearchForm />
        <RestaurantsContainer/>
        </div>
        

      
    );
  }
}
export default Landing;
