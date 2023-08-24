import React, { useState } from 'react';


import { Link,useNavigate,Route,NavLink } from "react-router-dom";
import Education from './ResumeData/Education';
import Skills from './ResumeData/Skills';
import Experience from './ResumeData/Experience';
import Certificate from './ResumeData/Certificate';

const Resume = () => {


const [tab, setTab] = useState(1);
      

      
       const button1=()=>{
        setTab(1)
      }
       const button2=()=>{
        setTab(2)
      }
       const button3=()=>{
        setTab(3)
      }

       const button4=()=>{
        setTab(4)
      }

  return (
    <>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&family=Montserrat:wght@700&display=swap');
  @import
        url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&family=Montserrat:wght@700&family=Poppins:wght@500&display=swap');
</style>

    <div className='block mt-10 mb-10 gap-0'>

    <h6 className=' text-[#ff014f] font-medium	text-sm pb-4 block text-center ' style={{fontFamily:"sans-serif" ,letterSpacing:"2px",lineHeight:"14px",fontWeight:"700"}}>MY
  </h6>

<h1 className=' text-6xl th	mb-0 text-[#3c3e41]	leading-3  block text-center pt-2' style={{
    fontFamily: "Montserrat",fontSize:"60px" , lineHeight :"1.2px"}} >
Resume
</h1>
    </div>

    <div className='flex  justify-center   pt-10' >
      <div className='pt-3 relative h-[60px] w-[200px] shadow-xl mr-2 flex justify-center hover:text-[#ff014f] cursor-pointer text-[#878e99] '  style={{borderRadius:"10px",background:"linear-gradient(145deg,#e2e8ec,#fff)" ,boxShadow:"5px 5px 15px #d1d9e6,-5px -5px 15px #fff"}}  >
        <div onClick={button1} className={tab===1} style={{fontFamily:"poppins" ,fontSize:"18px"}}>Education</div>
        </div>
      <div className=' cursor-pointer pt-3 relative h-[60px] w-[200px] shadow-xl mr-2 flex justify-center  text-[#878e99] hover:text-[#ff014f]' style={{borderRadius:"10px",background:"linear-gradient(145deg,#e2e8ec,#fff)" ,boxShadow:"5px 5px 15px #d1d9e6,-5px -5px 15px #fff"}}  ><div onClick={button2} className={tab===2} style={{fontFamily:"poppins",fontSize:"18px"}}>Skills</div></div>
      <div className=' cursor-pointer text-[#878e99] pt-3 relative h-[60px] w-[200px] shadow-xl mr-2 flex justify-center hover:text-[#ff014f]' style={{borderRadius:"10px", background:"linear-gradient(145deg,#e2e8ec,#fff)" ,boxShadow:"5px 5px 15px #d1d9e6,-5px -5px 15px #fff"}} ><div onClick={button3} className={tab===3} style={{fontFamily:"poppins" ,fontSize:"18px"}} >Experience</div></div>
      <div className=' cursor-pointer text-[#878e99] pt-3 relative h-[60px] w-[200px] shadow-xl mr-2 flex justify-center hover:text-[#ff014f]' style={{borderRadius:"10px", background:"linear-gradient(145deg,#e2e8ec,#fff)" ,boxShadow:"5px 5px 15px #d1d9e6,-5px -5px 15px #fff"}} ><div onClick={button4} className={tab===4} style={{fontFamily:"poppins" ,fontSize:"18px"}} >Certificate</div></div>
    </div>

    <div>
   {tab===1?<Education/>:""}   
   {tab===2?<Skills/>:""}   
   {tab===3?<Experience/>:""}   
   {tab===4?<Certificate/>:""}   
  </div>


    </>
   
  )
}

export default Resume