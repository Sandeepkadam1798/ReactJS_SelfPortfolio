import React from 'react'
import Heroself from './images/heroself.png'
import Typewriter from './Typewriter'


const Hero = () => {
  return (
    <>
    <style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&display=swap');
</style>

    <div className="flex justify-between #ecf0f3  p-2 items-center ">
    <div className=' pl-20 top-1'>

      <h6 className=' text-#3c3e41 font-medium	text-sm pb-4' style={{fontFamily:"sans-serif" ,letterSpacing:"3px",fontWeight:"500"}}>WELCOME TO MY WORLD</h6>   
      
      <h1 className=' text-#3c3e41' style={{fontFamily:"Montserrat Alternates",fontWeight:"700",fontSize:"55px"}}>Hi, I’m <span className='text-[#ff014f]' style={{fontFamily:"Montserrat Alternates",fontWeight:"700",fontSize:"55px"}}>Sandeep Kadam</span></h1> 
      <Typewriter/>  
    </div>
    


    <div className=' my-auto mt-32 mr-12'>
      <div className=' relative h-[400px] w-[400px] shadow-xl mr-24' style={{background: "rgb(228,234,237) " , background: " linear-gradient(90deg, rgba(228,234,237,1) 0%, rgba(236,240,242,1) 50%, rgba(239,242,244,1) 100%) "}}>
      
      <img className="absolute bg-transparent bottom-0 right-2 h-[500px] w-[500px]"src={Heroself} alt="" />

      </div>
      
      
    </div>
    </div>
    </>
  )
}

export default Hero