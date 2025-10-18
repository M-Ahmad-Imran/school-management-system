import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Auth.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem("adminEmail");
    const storedPassword = localStorage.getItem("adminPassword");

    if (email === storedEmail && password === storedPassword) {
      alert("Login successful!");
      localStorage.setItem("loggedInUser", true);
      navigate("/home");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin} className="auth-form">
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
        <p>
          Don’t have an account?{" "}
          <span onClick={() => navigate("/signup")} className="auth-link">
            Signup
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
