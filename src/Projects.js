import React from 'react'
import Projectdata from './Projectdata'
import Header from './Header'

const Projects = () => {

  return (

    <>  

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&family=Montserrat:wght@700&display=swap');
</style>


    <div block mt-10>
        <h6 className=' text-[#ff014f] font-medium	text-sm pb-4 block text-center pt-16 ' style={{fontFamily:"sans-serif" ,letterSpacing:"2px",lineHeight:"14px",fontWeight:"700"}}>VISIT MY PROJECTS AND KEEP YOUR FEEDBACK
</h6>
<h1 className=' text-6xl th	mb-0 text-[#3c3e41]	leading-3 pb-4 block text-center pt-5 xl:text-[60px] text-[40px] lg:text-[60px]' style={{
    fontFamily: "Montserrat",fontWeight:"700px" , lineHeight :"1.2px"}} >
My Projects
</h1>
    </div>
    <Projectdata/>
    </>

  )
}

export default Projects