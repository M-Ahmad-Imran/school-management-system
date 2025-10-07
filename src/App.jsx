import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Students from "./components/Students";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [darkMode,setDarkMode] = useState(false);
  const toggleMode = ()=>{
    setDarkMode(!darkMode);
  }
  return (
    <Router>
      <div className={darkMode?"app dark":"app"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/students" element={<Students />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
