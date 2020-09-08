import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header/header.component";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
