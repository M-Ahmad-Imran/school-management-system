import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Main.css";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="main-page">
      <section className="hero-section">
        <h1 className="title">Ustad Ghar</h1>
        <h2 className="hook">Empowering Schools, Simplifying Management</h2>
        <p className="description">
          Ustad Ghar is a smart, secure, and scalable School Management System
          designed to make academic administration effortless. From managing
          students and teachers to tracking attendance and performance, Ustad Ghar
          bridges technology and education seamlessly.
        </p>
        <div className="button-group">
          <button className="btn primary" onClick={() => navigate("/signup")}>
            Register
          </button>
          <button className="btn secondary" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="btn calculator" onClick={() => navigate("/calculator")}>
            CGPA Calculator
          </button>
        </div>
      </section>
        <hr />
      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose Ustad Ghar?</h2>
        <div className="features-container">
          <div className="feature-card">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png" alt="student" />
            <h3>Smart Student Management</h3>
            <p>
              Effortlessly manage student profiles, attendance, and academic records
              from one intuitive dashboard.
            </p>
          </div>

          <div className="feature-card">
            <img src="https://cdn-icons-png.flaticon.com/512/3571/3571045.png" alt="communication" />
            <h3>Parent-Teacher Communication</h3>
            <p>
              Bridge the gap between home and school through instant updates and
              progress tracking for parents.
            </p>
          </div>

          <div className="feature-card">
            <img src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png" alt="analytics" />
            <h3>Performance Analytics</h3>
            <p>
              Visualize student performance and attendance trends with interactive
              charts and analytics tools.
            </p>
          </div>

          <div className="feature-card">
            <img src="https://cdn-icons-png.flaticon.com/512/1046/1046849.png" alt="security" />
            <h3>Secure & Reliable</h3>
            <p>
              Data privacy is our top priority — built with robust authentication and
              modern security protocols.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
