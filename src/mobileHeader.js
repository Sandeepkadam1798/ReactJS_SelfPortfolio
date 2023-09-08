import React from 'react'
import {AiFillCloseCircle} from "react-icons/ai"
import { useSideNav } from './SideBarContaxt';
import { Link,useNavigate,Route,NavLink } from "react-router-dom";


const Style = {
  // navstyle: "text-sm  hover:text-[#ff014f] cursor-pointer text-gray-400 uppercase active:text-[#ff014f] active:no-underline",

  navstyle:"hover:no-underline   text-center uppercase text-gray-500  cursor-pointer hover:bg-[#ff014f] hover:w-full  p-2 rounded-md hover:text-white transition-colors duration-500 font-semibold text-[0.7rem",
  
  
  alink:"text-sm   cursor-pointer uppercase ",
};

const MobileHeader = () => {

  const { isSideNavOpen, toggleSideNav } = useSideNav();

  return (
 
 <><div>

<div className='flex items-start p-4 '>
<AiFillCloseCircle onClick={toggleSideNav} className='text-4xl'/>

</div>


<div className="absolute z-10  ">
      <ul className=" absolute flex flex-col gap-6 pl-0 mt-12 mx-2 w-40 ">
      <Link to="/" onClick={toggleSideNav} className={Style.navstyle}  style={{fontFamily:"poppins"}}>HOME</Link>
            <Link to="/projects" onClick={toggleSideNav} className={Style.navstyle} style={{fontFamily:"poppins"}} >PROJECT</Link>
            <Link to="/resume" onClick={toggleSideNav} className={Style.navstyle} style={{fontFamily:"poppins"}}>RESUME</Link>
            <Link to="/contact" onClick={toggleSideNav} className={Style.navstyle} style={{fontFamily:"poppins"}} >CONTACT</Link> 
      </ul>
    </div>


    </div>
    </>
  )
}

export default MobileHeader