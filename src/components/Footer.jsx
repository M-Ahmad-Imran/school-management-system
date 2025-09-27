import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Student Management System | Designed for Desktop View</p>
    </footer>
  );
};

export default Footer;
