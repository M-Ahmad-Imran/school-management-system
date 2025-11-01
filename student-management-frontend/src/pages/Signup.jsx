import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import "../css/Form.css"; // Optional styling

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/admin/signup", form);
      alert(data.message);
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
      console.error(err);
    }
  };

  return (
    <div className="auth-container">
      <h2>Create Admin Account</h2>
      <form className="auth-form" onSubmit={handleSubmit}>

        {/* Name Field Added */}
        <input
          type="text"
          placeholder="Admin Name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Admin Email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button type="submit" className="auth-btn">Sign Up</button>
      </form>

      <p>
        Already have an account?{" "}
        <span onClick={() => navigate("/login")} className="auth-link">
          Login here
        </span>
      </p>
    </div>
  );
};

export default Signup;
