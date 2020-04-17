import React from "react";
import { withRouter } from 'react-router-dom'
const header = ({history}) => {
  return (
    
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger justify-content-between">
        <a className="navbar-brand" href="#" onClick={()=>{history.push('/')}} >
          <i className="fas fa-hamburger mr-1"></i>
          Restaurants Review App
        </a>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
               <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </nav>
    
  );
};
export default withRouter(header);
