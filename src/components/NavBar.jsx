import React from 'react';
import './Navbar.css'; // Add the CSS styles
import SearchBar from './SearchBar'; // Import the SearchBar component
import airbnb from "../images/airbnb.png"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={airbnb} alt="Airbnb Logo" />
        </div>
        
        <ul className="nav-links">
          <li>Stays</li>
          <li>Experiences</li>
        </ul>

        <div className="user-menu">
          <p>Airbnb your home</p>
          <i className="fa fa-globe"></i>
          <div className="profile-menu">
            <i className="fa fa-bars"></i>
            {/* <i className="fa fa-user"></i> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
