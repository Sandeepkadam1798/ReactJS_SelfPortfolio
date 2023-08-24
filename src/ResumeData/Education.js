import React from "react";
import Edutimeline from "./Edutimeline";
import Expertimeline from "./Expertimeline";

const Education = () => {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&family=Montserrat:wght@700&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&family=Montserrat:wght@700&family=Poppins:wght@500&display=swap');
      </style>

      <div className="mt-10">
        
      </div>
      
    <div className='mt-4 p-8 flex md:flex-row flex-col mx-auto justify-around item center h-auto'>
      <div><Edutimeline/></div>
      <div className='md:mt-0 mt-8'><Expertimeline/></div>
    </div>

    </>
  );
};

export default Education;
