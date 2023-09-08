import { Timeline } from "rsuite";
import React, { useState } from "react";
import {BsFillCircleFill} from 'react-icons/bs'


const Edutimeline = () => {
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
          title: 'Bsc-Computer science',
          subtitle: 'College of Studies (2016-2019)',
          description: 'I completed my Bachelor of Science(BCS) from 2016 to 2020. I mastered multiple programming languages. I developed web applications and actively collaborated on diverse software projects. I am passionate about technology and committed to ongoing learning.',
          grade:"60%"
        },
        {
          title: 'HSC-Higher Secondary',
          subtitle: 'Higher education (2014-2016)',
          description: 'Between 2014 and 2016, I completed my Higher Secondary Education (HSC), a pivotal phase in my academic journey. I pursued a diverse curriculum, including core subjects like mathematics and science, as well as computer science.',
          grade:"44.60%"
        },
        {
          title: 'SSC-Secondary School ',
          subtitle: 'Secondary School (2012-2014',
          description: 'My Secondary School Certificate (SSC) journey from 2012 to 2014 served as the foundational phase of my formal education. During these transformative years, I established the initial stepping stones towards academic excellence and personal growth',
          grade:"63.60%"
        },
      ];
 
  return (
  <div>
     <div className="mb-8">
        <p className="uppercase tracking-widest text-xs font-thin mb-4 leading-3 text-[#f9004d]">
          2014-2020
        </p>
        <h1 className="text-4xl font-bold text-[#3c3e41] leading-7 tracking-wide">
          Education
        </h1>
      </div>
    <Timeline className="custom-timeline">
      {timelineData.map((data, index) => (
        <Timeline.Item key={index} dot={<BsFillCircleFill className={hoverStates[index] ? 'text-red-500  bg-[#d9d9d9] p-1 rounded-full text-lg ' : 'text-white bg-[#d9d9d9] p-1 rounded-full text-lg'} />}>
          <div
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            // className="gradient2 md:w-[500px] w-70 md:h-[350px] h-70 p-2 grad shadow-md  rounded-lg transition-colors duration-700 bg-transparent"
            className="gradient2  xl:w-[500px] lg:w-[500px] w-70 md:h-[500px] xl:h-[400px] lg:h-[400px] h-70 p-2 grad shadow-md  rounded-lg transition-colors duration-700 bg-transparent"
          >
           <div>
               <div className=" border-b flex justify-around items-center">
                   <div className="md:p-8 p-4">
                    <h4 className="md:text-2xl text-sm font-semibold">{data.title}</h4>
                    <p className="text-xs md:text-base">{data.subtitle}</p>
                   </div>
                   <div><button className={hoverStates[index]?"bg-[#fe024e] text-white transition-colors duration-700 h-12 w-24 p-2 rounded-md":"bg-slate-100 h-12 p-2 transition-colors duration-700 shadow-lg w-24 rounded-md text-red-500"}>{data.grade}</button></div>
               </div>
               <div>
                <p className="md:p-8 p-4 font-normal md:text-lg text-base">{data.description}</p>
               </div>
           </div>
          </div>
        </Timeline.Item>
      ))}
    </Timeline>
</div>  
  );
};


export default Edutimeline;
