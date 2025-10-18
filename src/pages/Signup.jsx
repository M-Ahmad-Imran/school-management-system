import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Auth.css";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields!");
      return;
    }

    localStorage.setItem("adminEmail", email);
    localStorage.setItem("adminPassword", password);

    alert("Signup successful! Please login now.");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <h2>Admin Signup</h2>
      <form onSubmit={handleSignup} className="auth-form">
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

        <button type="submit">Signup</button>
        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="auth-link">
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
