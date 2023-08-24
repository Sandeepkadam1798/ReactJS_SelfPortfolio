import React, { useState } from "react";
import selflogo from "./images/self.png"
import { Link,useNavigate,Route,NavLink } from "react-router-dom";

import {GiHamburgerMenu} from "react-icons/gi"
import { styled } from "styled-components";


const Style = {
  navstyle: "text-sm  hover:text-[#ff014f] cursor-pointer text-gray-400 uppercase active:text-[#ff014f] ",
  
  
  alink:"text-sm   cursor-pointer uppercase ",
};

const Header = () => {

const router = useNavigate();


console.log(router)
console.log(Route)
  const [sideNav,setsideNav] =useState(false)




  return (
    <>
      <header
        className="flex justify-between  shadow-md h-24 w-full p-2 items-center 	"
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

          <GiHamburgerMenu onClick={()=>setsideNav(!sideNav)} className="text-[#ff014f] text-lg"/>
        </div>


        {sideNav && <div className=" absolute overflow-clip scrollnon h-screen w-4/5 top-0 right-0 z-10 bg-red-600">

        </div>}
      </header>
    </>
  );
};

export default Header;
