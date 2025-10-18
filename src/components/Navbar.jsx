import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleTheme = () => setDarkMode(!darkMode);
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <div className="logo">
        <img src={logo} alt="School Logo" className="logo-img" />
      </div>

      <ul className="nav-links">
        <li>
          <NavLink
            to="/home"
            end
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/students"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Students
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <button className={darkMode?"theme-light":"theme-toggle"} onClick={toggleTheme}>
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
