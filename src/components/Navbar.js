import React from 'react';
import './Navbar.css';
import SLogo from '../SAKOOL/logo school 1.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo" >
      <img src={SLogo} alt="logo" />
      </div>
      <ul className="nav-links">
        <li className="active">Home</li>
        <li>Academic</li>
        <li>Admission</li>
        <li>Gallery</li>
        <li>Contact Us</li>
      </ul>
      <button className="login-btn">Login</button>
    </nav>
  );
};

export default Navbar;
