import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { StarterTemplate } from "./Components/StarterTemplate";
import About from "./Components/About";
import Departments from "./Components/Departments";
import Join from "./Components/Join";
import Contact from "./Components/Contact";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<StarterTemplate />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/departments" element={<Departments />} />
        <Route exact path="/joinus" element={<Join />} />
        <Route exact path="/contactus" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
