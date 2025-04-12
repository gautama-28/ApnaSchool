import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">📚 Online School</div>
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
