import { Timeline } from "rsuite";
import React, { useState } from "react";
import {BsFillCircleFill} from 'react-icons/bs'
import { motion } from "framer-motion";


const Expertimeline = () => {
    const [hoverStates, setHoverStates] = useState([false, false, false]);


    const handleMouseEnter = (index) => {
      const updatedHoverStates = hoverStates.map((state, i) => (i === index ? true : state));
      setHoverStates(updatedHoverStates);
    };
 
    const handleMouseLeave = (index) => {
      const updatedHoverStates = hoverStates.map((state, i) => (i === index ? false : state));
      setHoverStates(updatedHoverStates);
    };


    const timelineData = [
      {
        title: 'FullStack Web Devlopment ',
        subtitle: 'Timespro Bootcamp(Dec 2022-Jun 2023)',
        description: 'Engaging in the Full Stack Web Development program at Timespro Bootcamp from 2022 to 2023 was a transformative experience that propelled my journey into the dynamic world of technology and programming.',
      },
        // {
        //   title: 'Atos Syntel Pvt Ltd.',
        //   subtitle: 'Backoffice Executive (Jan 2022-Nov 2022)',
        //   description: "Updated customer addresses in the CRM application and validated existing customer addresses for accuracy.\nSuggested suitable medical insurance plans to customers based on their specific requirements and verified their eligibility.\nMaintained accurate customer records in the CRM application."
        // },
        // {
        //   title: 'Concentrix Services Pvt Ltd.',
        //   subtitle: 'Customer Executive (Aug 2020-Jan 2022)',
        //   description: `Resolved customer issues with orders, payments, refunds, delivery, and pickup.\n
        //   Managed coordination with internal teams for timely product delivery, pickup, and issue resolution for customers.\n
        //   Handled high call volumes and ensured adherence to company policies and procedures for tat.
        //   `,
        // },
      ];
 
  return (
  <div>
     <div className="mb-8">
        <p className="uppercase tracking-widest text-xs font-thin mb-4 leading-3 text-[#f9004d]">
          2020-2023
        </p>
        <h1 className="text-4xl font-bold text-[#3c3e41] leading-7 tracking-wide">
          Experience
        </h1>
      </div>
    <Timeline className="custom-timeline">
      {timelineData.map((data, index) => (
        <Timeline.Item key={index} dot={<BsFillCircleFill className={hoverStates[index] ? 'text-red-500  bg-[#d9d9d9] p-1 rounded-full text-lg ' : 'text-white bg-[#d9d9d9] p-1 rounded-full text-lg'} />}>
        <div
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className="gradient2  xl:w-[500px] lg:w-[500px] w-70 md:h-[500px] xl:h-[400px] lg:h-[400px] h-70 p-2 grad shadow-md  rounded-lg transition-colors duration-700 bg-transparent"
          >
           <div>
               <div className=" border-b flex justify-around items-center ">
                   <div className="md:p-8 p-4">
                    <h4 className="md:text-2xl text-sm font-semibold">{data.title}</h4>
                    <p className="text-xs md:text-base">{data.subtitle}</p>
                   </div>
                   {/* <div><button className={hoverStates[index]?"bg-[#fe024e] text-white transition-colors duration-700 h-12 w-24 p-2 rounded-md":"bg-slate-100 h-12 p-2 transition-colors duration-700 shadow-lg w-24 rounded-md text-red-500"}>button</button></div> */}
               </div>
               <div>
                <p className="md:p-8 p-4 font-normal md:text-lg text-based">{data.description}</p>
               </div>
           </div>
          </div>
        </Timeline.Item>
      ))}
    </Timeline>
</div>  
  );
};


export default Expertimeline;