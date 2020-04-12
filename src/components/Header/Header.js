import React from "react";
const header = () => {
  return (
    
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger justify-content-between">
        <a className="navbar-brand" href="#">
          <i className="fas fa-hamburger mr-1"></i>
          Restaurants Finder
        </a>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </nav>
    
  );
};
export default header;
