import React, { Component } from "react";
import Header from "../components/Header/Header";
import "./App.css";
import Form from './form/Form'
import { connect } from 'react-redux'
import Spinner from './Spinner/Spinner';
import RestaurantsContainer from './RestaurantsContainer/RestaurantsContainer'
import { fetchRestaurantsFromCurrentLocation,setLoading } from '../actions/index';

class App  extends Component
{
  state = {
    longitude:null,
    latitude:null,
    errorMessage:''
  }

 componentDidMount(){
  window.navigator.geolocation.getCurrentPosition(
    position =>{ this.setState({  latitude: position.coords.latitude,longitude:position.coords.longitude })
    console.log(this.state.latitude,this.state.longitude);
    this.props.fetchRestaurantsFromCurrentLocation(this.state.latitude,this.state.longitude);
    this.props.setLoading();
    })
  
 }



  render(){

    const {loading}=this.props;
    this.props.fetchRestaurantsFromCurrentLocation();
    return (
      <div>
        <Header />
        <Form/>
        {loading?<Spinner/>:<RestaurantsContainer/>}
         
        
      </div>
    );
  }
  
};

const mapStateToProps = state =>({
  loading:state.restaurants.loading
})

export default connect(mapStateToProps,{fetchRestaurantsFromCurrentLocation,setLoading})(App);
