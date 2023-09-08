import React from "react";
import Heroself from "./images/White_Passport.png";
import Typewriter from "./Typewriter";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FiFacebook } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { VscGithubInverted } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Devloper.", "Designer.", "Professional Coder."],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&display=swap');
      </style>

      <div className=" h-auto border-b-2 p-2 flex flex-col-reverse md:flex sm:flex-col-reverse md:flex-row justify-between z-0 mt-5">
        <div className="lg:pl-20 lg:top-1 pl-4 mt-10">

        <h6
            className=" text-#3c3e41 font-medium	text-sm  "
            style={{
              fontFamily: "sans-serif",
              letterSpacing: "3px",
              fontWeight: "500",
            }}
          >
            WELCOME TO MY WORLD
          </h6>

          <h1
            className=" text-#3c3e41  lg:text-[40px] xl:text-[40px] text-[28px] "
            style={{
              fontFamily: "Montserrat Alternates",
              fontWeight: "700",
              
              
            }}
          >
            Hi, I’m{" "}
            <div
              className="text-[#ff014f] lg:text-[45px] xl:text-[45px] text-[35px] xl:mt-0 lg:mt-0 mt-0     xl:leading-none lg:leading-none sm:leading-none leading-none"

              // xl:leading-loose

              style={{
                fontFamily: "Montserrat Alternates",
                fontWeight: "700",
                
                // fontSize: "45px",
              }}
            >
              Sandeep Kadam
            </div>
          </h1>
          <h1 className="xl:text-[40px] lg:text-[40px] text-[25px] sm:text-[45px]"
              style={{
                fontFamily: "Montserrat Alternates",
                fontWeight: "700",
              }}
            >
              {" "}
              a{" "}
              <span className=" xl:text-[45px] lg:text-[45px] text-[25px] mt-2 "
                style={{
                  fontWeight: "bold",
                  color: "#ff014f",
                  fontFamily: "Montserrat Alternates",
                }}
              >
                {text}
              </span>
              <span style={{ color: "#ff014f" }}>
                <Cursor cursorStyle="|" />
              </span>
            </h1>
            <p
              className="flex items-start pt-5"
              style={{
                fontSize: "16px",
                lineHeight: "30px",
                paddingRight: "20px",
                opacity: ".9",
                fontFamily: "poppins",
              }}
            >
              Im excited about the potential to collaborate on exciting projects. Whether its a dynamic web application, an e-commerce platform, or a custom solution, Im ready to bring ideas to life. Lets discuss how I can contribute to your next venture!
            </p>
            <div className="mt-16">
            <h6
              className=" text-#3c3e41 font-medium	text-sm pb-4"
              style={{
                fontFamily: "sans-serif",
                fontWeight: "700",
                letterSpacing: "1px",
              }}
            >
              FIND WITH ME
            </h6>
          </div>
          <div className="flex  ">
            <div
              className=" relative h-[70px] w-[70px] shadow-xl mr-2 flex justify-center hover:text-[#ff014f] cursor-pointer  active:text-[#ff014f]"
              style={{
                background: "rgb(228,234,237) ",
                background:
                  " linear-gradient(90deg, rgba(228,234,237,1) 0%, rgba(236,240,242,1) 50%, rgba(239,242,244,1) 100%) ",
              }}
            >
              {" "}
              <Link
                to="https://www.facebook.com/profile.php?id=100004822081463"
                target="_blank"
              >
                <FiFacebook className="text-center h-7 w-7 mt-5 " />
              </Link>
            </div>
            <div
              className=" relative h-[70px] w-[70px] shadow-xl mr-2 flex justify-center hover:text-[#ff014f]"
              style={{
                background: "rgb(228,234,237) ",
                background:
                  " linear-gradient(90deg, rgba(228,234,237,1) 0%, rgba(236,240,242,1) 50%, rgba(239,242,244,1) 100%) ",
              }}
            >
              <Link
                to="https://www.linkedin.com/in/sandeepkadam1798/"
                target="_blank"
              >
                <LuLinkedin className="text-center h-7 w-7 mt-5" />
              </Link>
            </div>
            <div
              className=" relative h-[70px] w-[70px] shadow-xl mr-2 flex justify-center hover:text-[#ff014f]"
              style={{
                background: "rgb(228,234,237) ",
                background:
                  " linear-gradient(90deg, rgba(228,234,237,1) 0%, rgba(236,240,242,1) 50%, rgba(239,242,244,1) 100%) ",
              }}
            >
              <Link to="https://github.com/Sandeepkadam1798" target="_blank">
                <VscGithubInverted className="text-center h-7 w-7 mt-5" />
              </Link>
            </div>
          </div>
            
        </div>

{/* //for image */}
        
        <div className=" my-auto mx-auto mt-20 mr-6 ">
          <div
            className=" relative lg:h-[400px] lg:w-[360px]  lg:mr-28 xl:h-[400px] xl:w-[400px] h-[400px] w-[340px] md:mt-5 "
            style={{
              // background: "rgb(228,234,237) ",
               background:
                " linear-gradient(90deg, rgba(228,234,237,1) 0%, rgba(236,240,242,1) 50%, rgba(239,242,244,1) 100%) ",
              boxShadow: "5px 5px 15px #d1d9e6,-5px -5px 15px #fff",
                  borderRadius: "0px",
            }}
          >
            <img
              className="absolute bg-transparent bottom-0  h-[500px] w-[450px] mt-10"
              src={Heroself}
              alt=""
            />
          </div>
        </div>

        </div>
      
{/* {/* 
      <div className=" flex-col-reverse justify-between  #ecf0f3  p-2 items-center ">
        <div className=" pl-20 top-1 ">
          <h6
            className=" text-#3c3e41 font-medium	text-sm pb-4"
            style={{
              fontFamily: "sans-serif",
              letterSpacing: "3px",
              fontWeight: "500",
            }}
          >
            WELCOME TO MY WORLD
          </h6>

          <h1
            className=" text-#3c3e41"
            style={{
              fontFamily: "Montserrat Alternates",
              fontWeight: "700",
              fontSize: "55px",
            }}
          >
            Hi, I’m{" "}
            <span
              className="text-[#ff014f]"
              style={{
                fontFamily: "Montserrat Alternates",
                fontWeight: "700",
                fontSize: "55px",
              }}
            >
              Sandeep Kadam
            </span>
          </h1>
          <h1
              style={{
                fontFamily: "Montserrat Alternates",
                fontWeight: "700",
                fontSize: "40px",
              }}
            >
              {" "}
              a{" "}
              <span
                style={{
                  fontWeight: "bold",
                  color: "#ff014f",
                  fontFamily: "Montserrat Alternates",
                }}
              >
                {text}
              </span>
              <span style={{ color: "#ff014f" }}>
                <Cursor cursorStyle="|" />
              </span>
            </h1>
            <p
              className="flex items-start pt-5"
              style={{
                fontSize: "16px",
                lineHeight: "30px",
                paddingRight: "20px",
                opacity: ".9",
                fontFamily: "poppins",
              }}
            >
              Dynamic full stack web developer creating captivating web
              experiences. Expertise in front-end and back-end development,
              crafting code that delights users. Eager to collaborate and make a
              difference in the digital world.
            </p>
{/*             
          <div className=" pl-1 mb-5">
            
          </div> */}
          {/* <div className="mt-16">
            <h6
              className=" text-#3c3e41 font-medium	text-sm pb-4"
              style={{
                fontFamily: "sans-serif",
                fontWeight: "700",
                letterSpacing: "1px",
              }}
            >
              FIND WITH ME
            </h6>
          </div> */}
          {/* <div className="flex  ">
            <div
              className=" relative h-[70px] w-[70px] shadow-xl mr-2 flex justify-center hover:text-[#ff014f] cursor-pointer  active:text-[#ff014f]"
              style={{
                background: "rgb(228,234,237) ",
                background:
                  " linear-gradient(90deg, rgba(228,234,237,1) 0%, rgba(236,240,242,1) 50%, rgba(239,242,244,1) 100%) ",
              }}
            >
              {" "}
              <Link
                to="https://www.facebook.com/profile.php?id=100004822081463"
                target="_blank"
              >
                <FiFacebook className="text-center h-7 w-7 mt-5 " />
              </Link>
            </div>
            <div
              className=" relative h-[70px] w-[70px] shadow-xl mr-2 flex justify-center hover:text-[#ff014f]"
              style={{
                background: "rgb(228,234,237) ",
                background:
                  " linear-gradient(90deg, rgba(228,234,237,1) 0%, rgba(236,240,242,1) 50%, rgba(239,242,244,1) 100%) ",
              }}
            >
              <Link
                to="https://www.linkedin.com/in/sandeepkadam1798/"
                target="_blank"
              >
                <LuLinkedin className="text-center h-7 w-7 mt-5" />
              </Link>
            </div>
            <div
              className=" relative h-[70px] w-[70px] shadow-xl mr-2 flex justify-center hover:text-[#ff014f]"
              style={{
                background: "rgb(228,234,237) ",
                background:
                  " linear-gradient(90deg, rgba(228,234,237,1) 0%, rgba(236,240,242,1) 50%, rgba(239,242,244,1) 100%) ",
              }}
            >
              <Link to="https://github.com/Sandeepkadam1798" target="_blank">
                <VscGithubInverted className="text-center h-7 w-7 mt-5" />
              </Link>
            </div>
          </div>
        </div> */} 



{/* //second div */}
      {/* //   <div className=" my-auto mt-32 mr-8">
      //     <div */}
      {/* //       className=" relative h-[400px] w-[400px] shadow-xl mr-24" */}
      {/* //       style={{ */}
      {/* //         background: "rgb(228,234,237) ", */}
      {/* //         background:
      //           " linear-gradient(90deg, rgba(228,234,237,1) 0%, rgba(236,240,242,1) 50%, rgba(239,242,244,1) 100%) ", */}
      {/* //       }}
      //     >
      //       <img
      //         className="absolute bg-transparent bottom-0 right-2 h-[500px] w-[500px]" */}
      {/* //         src={Heroself}
      //         alt=""
      //       />
      //     </div> */}
      {/* //   </div> */}
      {/* // </div> */} 
    </>
  );
};

export default Hero;
