import React, { useState } from "react";
import Project1 from "./images/LonavalaStay.png";
import ToursTraval from "./images/Tours & Traval.jpg"
import CRUD from "./images/CRUD.png"
import HackerRank from "./images/HackerRank.jpg"
import CountryGuideApp from "./images/CountryGuideApp.jpg"
import { Input, useInput, Grid , Textarea ,Button} from "@nextui-org/react";

const Projectdata = () => {
  const data = [
    {
      id: 1,
      Pname: "Lonavala Stay- Booking Website",
      image: Project1,
      description:
        "Integrate Firebase for a user authentication system, enabling users to create accounts, securely log in, and efficiently manage their bookings.Build an admin dashboard empowering hotel administrators to manage hotel listings efficiently, respond to customer reviews, and monitor bookings.Enable users to easily search for available hotels based on available dates, room types, and other criteria.Integrate a secure payment gateway for seamless online transactions ",
    },

    {
      id: 2,
      Pname: "Tours & Travel Web-Application",
      image: ToursTraval,
      description:
        "Integrate Firebase for a user authentication system, enabling users to create accounts, securely log in, and efficiently manage their bookings.Build an admin dashboard empowering hotel administrators to manage hotel listings efficiently, respond to customer reviews, and monitor bookings.Enable users to easily search for available hotels based on available dates, room types, and other criteria.Integrate a secure payment gateway for seamless online transactions ",
    },
    {
      id: 3,
      Pname: "STUDENT MANAGEMENT - CRUD Application",
      image: CRUD,
      description:
        "Integrate Firebase for a user authentication system, enabling users to create accounts, securely log in, and efficiently manage their bookings.Build an admin dashboard empowering hotel administrators to manage hotel listings efficiently, respond to customer reviews, and monitor bookings.Enable users to easily search for available hotels based on available dates, room types, and other criteria.Integrate a secure payment gateway for seamless online transactions ",
    },
    {
      id: 4,
      Pname: "HackerRank-Clone",
      image: HackerRank,
      description:
        "Integrate Firebase for a user authentication system, enabling users to create accounts, securely log in, and efficiently manage their bookings.Build an admin dashboard empowering hotel administrators to manage hotel listings efficiently, respond to customer reviews, and monitor bookings.Enable users to easily search for available hotels based on available dates, room types, and other criteria.Integrate a secure payment gateway for seamless online transactions ",
    },
    {
      id: 5,
      Pname: "Country Guide App",
      image: CountryGuideApp,
      description:
        "Integrate Firebase for a user authentication system, enabling users to create accounts, securely log in, and efficiently manage their bookings.Build an admin dashboard empowering hotel administrators to manage hotel listings efficiently, respond to customer reviews, and monitor bookings.Enable users to easily search for available hotels based on available dates, room types, and other criteria.Integrate a secure payment gateway for seamless online transactions ",
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

      <div className="flex justify-center gap-10 flex-wrap mt-5 items-start">
        <div className=" relative flex gap-10 flex-wrap items-start mt-10  ml-24">
          {data.map((item, key) => {
            return (
              <div
                className=" block h-[440px] w-[350px] "
                style={{
                  boxShadow: "5px 5px 15px #d1d9e6,-5px -5px 15px #fff",
                  borderRadius: "10px",
                  background: "rgb(228,234,237) ",
                  background: " linear-gradient(145deg, #e2e8ec , #fff",
                }}
                key={key}
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
          VIEW PROJECT
        </Button>

             </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projectdata;
