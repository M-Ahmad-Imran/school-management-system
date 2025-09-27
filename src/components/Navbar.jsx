import React from "react";
import "../App.css";
import logo from "../assets/logo.png"; // Make sure you have logo.png inside src/assets

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="School Logo" className="logo-img" />
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
