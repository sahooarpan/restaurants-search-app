import React, { Component } from 'react';
import Landing from './Landing/Landing';
import { Route,Switch } from 'react-router-dom';
import Restaurant from './Restaurant/Restaurant';
import Header from './Header/Header'

class App extends Component {
  render() {
    return (
      
      <div>
        <Header/>
        <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/restaurant/:id" component={Restaurant}   />
        </Switch>
      </div>
    )
  }
}
export default App;