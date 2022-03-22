import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";
import Qualifications from "./components/Qualifications";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from  "./components/Skills";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Home" element={<Home/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Contacts" element={<Contacts/>}></Route>
            <Route path="/Experience" element={<Experience/>}></Route>
            <Route path="/Projects" element={<Projects/>}></Route>
            <Route path="/Skills" element={<Skills/>}></Route>
            <Route path="/Qualifications" element={<Qualifications/>}></Route>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
