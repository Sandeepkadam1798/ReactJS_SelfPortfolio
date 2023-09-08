import React from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import { FiFacebook } from "react-icons/fi";
import { LuLinkedin} from "react-icons/lu";
import { VscGithubInverted } from "react-icons/vsc";
import { Link } from "react-router-dom";


const Typewriter = () => {

    const [text] = useTypewriter({
        words:['Devloper.', 'Designer.', 'Professional Coder.'],
        loop :{},
        typeSpeed:120,
        deleteSpeed:80,
    })

  return (
    <>
    <style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@1,700&display=swap');
</style>
    <div className=' pl-1 mb-5'>
    <h1  style={{fontFamily:"Montserrat Alternates" ,fontWeight:"700",fontSize:"40px"}}> a {' '}
    <span style={{fontWeight:'bold', color:'#ff014f' ,fontFamily:"Montserrat Alternates"}}>{text}</span>
    <span style={{color:'#ff014f'}}>
        <Cursor cursorStyle ='|'/>
    </span>
    </h1>
    <p className="flex items-start pt-5" style={{fontSize:"16px",lineHeight:"30px" ,paddingRight:"20px",opacity:".9",fontFamily:"poppins"}}>
    Dynamic full stack web developer creating captivating web experiences. Expertise in front-end and back-end development, crafting code that delights users. Eager to collaborate and make a difference in the digital world.
    </p>
    </div>
    <div className='mt-16'>
      <h6 className=' text-#3c3e41 font-medium	text-sm pb-4' style={{fontFamily:"sans-serif" ,fontWeight:"700",letterSpacing :"1px"}}>FIND WITH ME</h6>
    </div>
    <div className='flex  ' >
      <div className=' relative h-[70px] w-[70px] shadow-xl mr-2 flex justify-center hover:text-[#ff014f] cursor-pointer  active:text-[#ff014f]' style={{background: "rgb(228,234,237) " , background: " linear-gradient(90deg, rgba(228,234,237,1) 0%, rgba(236,240,242,1) 50%, rgba(239,242,244,1) 100%) "}} > <Link to="https://www.facebook.com/profile.php?id=100004822081463" target="_blank" ><FiFacebook className='text-center h-7 w-7 mt-5 '/></Link></div>
      <div className=' relative h-[70px] w-[70px] shadow-xl mr-2 flex justify-center hover:text-[#ff014f]' style={{background: "rgb(228,234,237) " , background: " linear-gradient(90deg, rgba(228,234,237,1) 0%, rgba(236,240,242,1) 50%, rgba(239,242,244,1) 100%) "}} ><Link to="https://www.linkedin.com/in/sandeepkadam1798/" target="_blank"><LuLinkedin className='text-center h-7 w-7 mt-5'/></Link></div>
      <div className=' relative h-[70px] w-[70px] shadow-xl mr-2 flex justify-center hover:text-[#ff014f]' style={{background: "rgb(228,234,237) " , background: " linear-gradient(90deg, rgba(228,234,237,1) 0%, rgba(236,240,242,1) 50%, rgba(239,242,244,1) 100%) "}}><Link to="https://github.com/Sandeepkadam1798" target="_blank"><VscGithubInverted className='text-center h-7 w-7 mt-5'/></Link></div>
    </div>
    </>
    
  )
}

export default Typewriter