import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Students from "./pages/Students";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import StudentDetails from "./pages/StudentDetails";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import Calculator from "./pages/Calculator";

const App = ()=> {
  const [darkMode,setDarkMode] = useState(false);
  const toggleMode = ()=>{
    setDarkMode(!darkMode);
  }
  return (
    <Router>
      <div className={darkMode?"app dark":"app"}>
        <MainLayout />
        <Footer />
      </div>
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();

  const hideNavbarRoutes = ["/","/login", "/signup"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:id" element={<StudentDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </>
  );
}

export default App;
