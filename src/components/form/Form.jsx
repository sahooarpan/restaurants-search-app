import React, { Component } from 'react';
import './Form.css';

import { serachLocation,fetchRestaurants,setLoading } from '../../actions/index';
import { connect  } from 'react-redux'
 class Form extends Component {

      
       
       onChange=e=>{
             this.props.serachLocation(e.target.value);
             
       }

       handleFormSubmit= e=>{
             e.preventDefault();
             this.props.fetchRestaurants(this.props.text);
             this.props.setLoading();
             
             

             
       }

      
      render() {
            return (
                  <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                              <form className="form-inline" onSubmit={this.handleFormSubmit}>
                                    <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
                                          <input type="text" onChange={this.onChange} className="form-control input-field mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Please enter location :)"/>
                                          <button type="submit" class="btn btn-danger mb-2">Search</button>      
                              </form>      
                        </div>
                        
                  </div>
            )
      }
}

const mapStateToProps=state=>({
      text:state.restaurants.text
});

export default connect(mapStateToProps,{serachLocation,fetchRestaurants,setLoading})(Form);