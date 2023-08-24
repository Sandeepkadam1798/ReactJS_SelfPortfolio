import { Timeline } from "rsuite";
import React, { useState } from "react";
import {BsFillCircleFill} from 'react-icons/bs'


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
          title: 'Bsc. Computer science',
          subtitle: 'College of Studies (2016-2019)',
          description: 'Description for item 1',
        },
        {
          title: 'Title 2',
          subtitle: 'Subtitle 2',
          description: 'Description for item 2',
        },
        {
          title: 'Title 3',
          subtitle: 'Subtitle 3',
          description: 'Description for item 3',
        },
      ];
 
  return (
  <div>
     <div className="mb-8">
        <p className="uppercase tracking-widest text-xs font-thin mb-4 leading-3 text-[#f9004d]">
          2019-2023
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
            className="gradient2 md:w-[500px] w-80 md:h-[320px] h-64 p-2 grad shadow-md  rounded-lg transition-colors duration-700 bg-transparent"
          >
           <div>
               <div className=" border-b flex justify-around items-center">
                   <div className="md:p-8 p-4">
                    <h4 className="md:text-2xl text-sm font-semibold">Bsc. Computer science</h4>
                    <p className="text-xs md:text-base">College of Studies (2016-2019)</p>
                   </div>
                   <div><button className={hoverStates[index]?"bg-[#fe024e] text-white transition-colors duration-700 h-12 w-24 p-2 rounded-md":"bg-slate-100 h-12 p-2 transition-colors duration-700 shadow-lg w-24 rounded-md text-red-500"}>button</button></div>
               </div>
               <div>
                <p className="md:p-8 p-4 font-normal md:text-lg text-base">The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
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