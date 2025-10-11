import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Students from "./pages/Students";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import StudentDetails from "./pages/StudentDetails";
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
          <Route path="/students/:id" element={<StudentDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
