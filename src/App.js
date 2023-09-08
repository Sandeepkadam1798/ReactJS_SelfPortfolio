
import React from "react";
import { useState, createContext, useContext } from "react";

import "./index.css"
import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import Projectdata from "./Projectdata";
import Projects from "./Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./Resume";
import Contact from "./Contact";
import Footer from "./Footer"
import GoToTop from "./GoToTop";
import Education from "./ResumeData/Education";




// const UserContext = createContext();

function App() {

  // const { sidenav, setsidenav } = useMyContext();


  
  return (
    <>

    
    
    <BrowserRouter>
    <Routes >

      <Route path="/" element={[<Header /> ,<Hero/> , <Projects/>,<Resume/>,<Contact/>,<GoToTop/>,<Footer/>]}/>
      <Route path="/projects" element={[<Header />,<Projects/>,<Footer/>]}/>
      <Route path="/resume" element={[<Header />,<Resume/>,<Footer/>]}/>
      <Route path="/contact" element={[<Header />,<Contact/>,<Footer/>]}/>
        {/* <Route path="/Education" element={[<Education/>]}/> */}
      </Routes>
    </BrowserRouter> 
    
    
    </>
  );
}

export default App;
