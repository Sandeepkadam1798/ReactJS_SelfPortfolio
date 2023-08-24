import React from 'react'

import Skillsside from "./Skillsside";
import Skillsright from "./Skillsright";


const Skills = () => {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&family=Montserrat:wght@700&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&family=Montserrat:wght@700&family=Poppins:wght@500&display=swap');
      </style>

      <div className="mt-16">
        <div className="flex justify-center">
          <h1
            className=" 	mb-0 text-[#3c3e41]	leading-3  block text-center "
            style={{
              fontFamily: "Montserrat",
              fontSize: "40px",
              lineHeight: "1.2px",
            }}
          >
            Skills
          </h1>
        </div>
        <div className="mt-2 gap-8 p-8 flex md:flex-row flex-col mx-auto justify-around item center h-auto">
      <div className="md:w-full md:p-8 p-2">
        <div className="mb-8">
          <p className="uppercase tracking-widest text-xs font-thin mb-4 leading-3 text-[#f9004d]">
            2014-2019
          </p>
          <h1 className="text-4xl font-bold text-[#3c3e41] leading-7 tracking-wide">
            Education
          </h1>
        </div>
        <div className=""><Skillsside/></div>
      </div>
      <div className="md:w-full md:p-8 p-2">
        <div className="mb-8">
          <p className="uppercase tracking-widest text-xs font-thin mb-4 leading-3 text-[#f9004d]">
            2014-2019
          </p>
          <h1 className="text-4xl font-bold text-[#3c3e41] leading-7 tracking-wide">
            Education
          </h1>
        </div>
        <div className=""><Skillsright/></div>
      </div>
    </div>
      </div>
    </>
  )
}

export default Skills