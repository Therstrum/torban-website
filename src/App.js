import "./index.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Dayjob } from "./components/Dayjob";
import { Gamedev } from "./components/Gamedev";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route path="gamedev" element={<Gamedev />} />
        <Route path="dayjob" element={<Dayjob />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
