import React, { useState } from "react";
import Project1 from "./images/LonavalaStay.png";
import Rajasthan from "./images/Rajasthan.png"
import CRUD from "./images/CRUD.png"
import HackerRank from "./images/HackerRank.jpg"
import CountryGuideApp from "./images/CountryGuideApp.jpg"
import Personal_Portfolio from "./images/Personal_Portfolio.png"
import { Input, useInput, Grid , Textarea ,Button} from "@nextui-org/react";
import { motion } from "framer-motion";

const Projectdata = () => {
  const data = [
    {
      id: 1,
      Pname: "Lonavala Stay- Booking Website",
      image: Project1,
      description:
        "Integrate Firebase for a user authentication system, enabling users to create accounts, securely log in, and efficiently manage their bookings.Build an admin dashboard empowering hotel administrators to manage hotel listings efficiently, respond to customer reviews, and monitor bookings.Enable users to easily search for available hotels based on available dates, room types, and other criteria.Integrate a secure payment gateway for seamless online transactions ",
      Link:"https://regal-travesseiro-1a1ead.netlify.app/"
    },

    {
      id: 2,
      Pname: "Tours & Travel Web-Application",
      image: Rajasthan,
      description:
        "Integrate Firebase for a user authentication system, enabling users to create accounts, securely log in, and efficiently manage their bookings.Build an admin dashboard empowering hotel administrators to manage hotel listings efficiently, respond to customer reviews, and monitor bookings.Enable users to easily search for available hotels based on available dates, room types, and other criteria.Integrate a secure payment gateway for seamless online transactions ",
      Link:"https://cute-toffee-1b750e.netlify.app/"
    },
    {
      id: 3,
      Pname: "Personal Portfolio -ReactApp",
      image: Personal_Portfolio,
      description:
        "Integrate Firebase for a user authentication system, enabling users to create accounts, securely log in, and efficiently manage their bookings.Build an admin dashboard empowering hotel administrators to manage hotel listings efficiently, respond to customer reviews, and monitor bookings.Enable users to easily search for available hotels based on available dates, room types, and other criteria.Integrate a secure payment gateway for seamless online transactions ",
      Link:"https://sandeepkadamportfolio.netlify.app/"
    },
    {
      id: 4,
      Pname: "STUDENT MANAGEMENT - CRUD Application",
      image: CRUD,
      description:
        "Integrate Firebase for a user authentication system, enabling users to create accounts, securely log in, and efficiently manage their bookings.Build an admin dashboard empowering hotel administrators to manage hotel listings efficiently, respond to customer reviews, and monitor bookings.Enable users to easily search for available hotels based on available dates, room types, and other criteria.Integrate a secure payment gateway for seamless online transactions ",
        Link:"https://github.com/Sandeepkadam1798/CRUDAPP-Studentmanagementsystem"
    },
    {
      id: 5,
      Pname: "HackerRank-Clone",
      image: HackerRank,
      description:
        "Integrate Firebase for a user authentication system, enabling users to create accounts, securely log in, and efficiently manage their bookings.Build an admin dashboard empowering hotel administrators to manage hotel listings efficiently, respond to customer reviews, and monitor bookings.Enable users to easily search for available hotels based on available dates, room types, and other criteria.Integrate a secure payment gateway for seamless online transactions ",
        Link:"https://github.com/Sandeepkadam1798/HackerRankClone/tree/master"
    },
    {
      id: 6,
      Pname: "Country Guide App",
      image: CountryGuideApp,
      description:
        "Integrate Firebase for a user authentication system, enabling users to create accounts, securely log in, and efficiently manage their bookings.Build an admin dashboard empowering hotel administrators to manage hotel listings efficiently, respond to customer reviews, and monitor bookings.Enable users to easily search for available hotels based on available dates, room types, and other criteria.Integrate a secure payment gateway for seamless online transactions ",
        Link:"https://github.com/Sandeepkadam1798/Country-guide-App-Timespro-JS-Project-"
    },
  ];

  console.log(data);

  return (
    <>
    <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&family=Montserrat:wght@700&family=Poppins:wght@500&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&family=Montserrat:wght@700&display=swap');
      </style>

      <div className="flex justify-center gap-10 flex-wrap mt-5 items-start mx-auto">
        <div className=" relative flex gap-10  mt-10  xl:flex xl:justify-center lg:flex lg:justify-center flex-wrap justify-center sm:flex sm:flex-wrap ">

        {/* xl:ml-5 lg:ml-14 ml-4 */}
          {data.map((item, key) => {
            return (
              <motion.div
                className=" block h-[440px] w-[330px] "
                style={{
                  boxShadow: "5px 5px 15px #d1d9e6,-5px -5px 15px #fff",
                  borderRadius: "10px",
                  background: "rgb(228,234,237) ",
                  background: " linear-gradient(145deg, #e2e8ec , #fff",
                }}
                key={key}
                initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              >
                <div className=" block mt-8	">
                  <div className="relative flex items-center justify-center m-1  overflow-hidden w-[385] h-[241] rounded-md">
                    <img
                      className=" h-[210px] w-[280px] relative rounded-md	hover:scale-110 transition ease-in-out duration-500	"
                      src={item.image}
                      alt="Error"
                    />
                  </div>

                  <div className=" mt-8 flex justify-center ">
              <span
                className=" text-[#1e2125] block text-center cursor-pointer hover:text-[#ff014f] active:text-[#ff014f]"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "23px",
                  opacity: ".9",
                  fontWeight: "600px",
                  lineHeight: "34px",
                  marginBottom: "20px",
                }}
              >
                { item.Pname}
              </span>
              

              </div>
              <div className="flex  justify-center bottom-0">
             <Button   shadow color="error" auto >
              <a style={{textDecoration:"none"}} className="hover:text-white cursor-pointer  no-underline" href={item.Link} target="_blank">VIEW PROJECT</a>
        </Button>

             </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projectdata;
