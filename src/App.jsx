import React from "react";
import Navbar from "./compenents/Navbar";
import Home from "./compenents/Home";
import About from "./compenents/About";
import Projects from "./compenents/Projects";
import Layanan from "./compenents/Layanan";
import Testimoni from "./compenents/Testimoni";
import Footer from "./compenents/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Layanan />
      <Testimoni />
      <Footer />
    </div>
  );
};

export default App;
