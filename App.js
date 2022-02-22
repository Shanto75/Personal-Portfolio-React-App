import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import About from "./components/About";
import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar title="Moniruzzaman Shanto" />
        <div className="container m-5 p-5 ">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/About" element={<About />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
