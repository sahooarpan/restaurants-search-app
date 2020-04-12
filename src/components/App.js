import React from "react";
import Header from "../components/Header/Header";
import "./App.css";
import Form from './form/Form'
import { connect } from 'react-redux'
import Spinner from './Spinner/Spinner';
import RestaurantsContainer from './RestaurantsContainer/RestaurantsContainer'


const App = ({loading}) => {
  return (
    <div>
      <Header />
      <Form/>
      {loading?<Spinner/>:<RestaurantsContainer/>}
       
      
    </div>
  );
};

const mapStateToProps = state =>({
  loading:state.restaurants.loading
})

export default connect(mapStateToProps)(App);
