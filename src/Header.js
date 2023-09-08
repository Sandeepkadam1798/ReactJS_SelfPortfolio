import React, { useState } from "react";
import selflogo from "./images/self.png"
import { Link,useNavigate,Route,NavLink } from "react-router-dom";

import {GiHamburgerMenu} from "react-icons/gi"
import { styled } from "styled-components";
import { motion } from "framer-motion";
import MobileHeader from "./mobileHeader"
import { useSideNav } from './SideBarContaxt';



const Style = {
  navstyle: "text-sm  hover:text-[#ff014f] cursor-pointer text-gray-400 uppercase active:text-[#ff014f] active:no-underline",
  
  
  alink:"text-sm   cursor-pointer uppercase ",
};

// export const ToggleSidebar = () => {
//   const [sideNav,setsideNav] =useState(false)
//   return { sideNav ,setsideNav };
// };

const Header = () => {

  const { isSideNavOpen, toggleSideNav } = useSideNav();

const router = useNavigate();

// const {sideNav , setsideNav} =useState(false)

console.log(router)
console.log(Route)
  

  





  return (
    <>
      <header
        className=" flex justify-between  shadow-md h-24 w-full p-2 items-center 	"
      >
        <div>
          <img className="h-16 w-16 ml-5 bg-gray-400 p-1 rounded-full" src={selflogo} alt="logoerror" />
          <p></p>
        </div>

        <div className="hidden md:block"> 
          <ul className="flex gap-8 p-2 mr-8">
            <Link to="/" className={Style.navstyle}  style={{fontFamily:"poppins"}}>HOME</Link>
            <Link to="/projects" className={Style.navstyle} style={{fontFamily:"poppins"}} >PROJECT</Link>
            <Link to="/resume" className={Style.navstyle} style={{fontFamily:"poppins"}}>RESUME</Link>
            <Link to="/contact" className={Style.navstyle} style={{fontFamily:"poppins"}} >CONTACT</Link>
          </ul>
        </div>
        <div className="md:hidden block">

          <GiHamburgerMenu onClick={toggleSideNav} className="text-[#ff014f] text-lg"/>
        </div>




        {isSideNavOpen && 
        <motion.div
        initial={{ opacity: 0, x: "100%" }} // Initial x value is set to start offscreen to the right
        animate={{
          x: "50%",
          opacity: [0, 0.3, 1],
          transition: { duration: 0.5, times: [0, 0.5, 1] },
        }} // Animate to slide in from the right up to 20% from the left with fast start and slow end
        exit={{ opacity: [1, 0.3, 0], x: "100%" }}
        className="zindex bg-[#ecf0f3] w-4/5 z-20  top-0 h-screen fixed overflow-y-auto overflow-hidden shadow-md"
      >
       <MobileHeader/>
        </motion.div>
        }
      </header>
    </>
  );
};

export default Header;
