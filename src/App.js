import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { StarterTemplate } from "./Components/StarterTemplate";
import About from "./Components/About";
import Departments from "./Components/Departments";
import Join from "./Components/Join";
import Contact from "./Components/Contact";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { WebDevelopment } from "./Components/Departments/WebDevelopment";
import { AppDevelopment } from "./Components/Departments/AppDevelopment";
import { DesignBranding } from "./Components/Departments/DesignBranding";
import { UIUX } from "./Components/Departments/UIUX";
import { Cybersecurity } from "./Components/Departments/Cybersecurity";
import { AIML } from "./Components/Departments/AIML";
import { CloudCoumputing } from "./Components/Departments/CloudCoumputing";
import { Devops } from "./Components/Departments/Devops";
import { DigitalMarketing } from "./Components/Departments/DigitalMarketing";
import { ContentWriting } from "./Components/Departments/ContentWriting";
import { Blockchain } from "./Components/Departments/Blockchain";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<StarterTemplate />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/departments" element={<Departments />} />
        <Route exact path="/web" element={<WebDevelopment/>} />
        <Route exact path="/app" element={<AppDevelopment/>} />
        <Route exact path="/designandbranding" element={<DesignBranding/>} />
        <Route exact path="/uiux" element={<UIUX/>} />
        <Route exact path="/cybersecurity" element={<Cybersecurity/>} />
        <Route exact path="/aiml" element={<AIML/>} />
        <Route exact path="/cloud" element={<CloudCoumputing/>} />
        <Route exact path="/devops" element={<Devops/>} />
        <Route exact path="/digitalmarketing" element={<DigitalMarketing/>} />
        <Route exact path="/content" element={<ContentWriting/>} />
        <Route exact path="/blockchain" element={<Blockchain/>} />
        <Route exact path="/joinus" element={<Join />} />
        <Route exact path="/contactus" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
