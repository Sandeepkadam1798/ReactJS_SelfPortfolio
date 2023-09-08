import React from 'react'
import Project1 from "../images/Times_Pro_Certificate.png";
import Ethans_Tech from "../images/Ethans_Tech.png"
import CSS from "../images/3CSS.jpg"
import Microsoft from "../images/Microsoft.png"
import HackerRank from "../images/HackerRank.png"
import Sololearn_React from "../images/Sololearn_React.png"
import { Input, useInput, Grid , Textarea ,Button} from "@nextui-org/react";
import { motion } from "framer-motion";


const Certificate = () => {
  const data = [
    {
      id: 1,
      Pname: "Full-Stack Web Development",
      image: Project1,
      organization:"Organization-TimesPro",
      Link:"https://drive.google.com/file/d/1RYUJ54DmEtIaGWv_m-0oGJuARv6EOpSY/view?usp=drive_link"
    },

    {
      id: 2,
      Pname: "Python Programming",
      image: Ethans_Tech,
      organization:"Organization-Ethans Tech",
      Link:"https://drive.google.com/file/d/13_CHW7RN5nZnoyiOa0FPtI8oUS3hgYSA/view?usp=drive_link"
    },
    {
      id: 3,
      Pname: "Front End Development- CSS",
      image: CSS,
      organization:"Organization-Great Learning",
      Link:"https://drive.google.com/file/d/1P4xRH7d5uZHuaIxG_FuOUeSKd7arFCvu/view?usp=drive_link"
    },
    {
      id: 4,
      Pname: "Javascript- Programming",
      image: HackerRank,
      organization:"Organization-HackerRank",
      Link:"https://drive.google.com/file/d/1aHP8kiNhDIwLZhXB-nvNlYXdHGsJkgr7/view?usp=drive_link"
    },
    {
      id: 5,
      Pname: "Python- Programming",
      image: Microsoft,
      organization:"Organization-Microsoft",
      Link:"https://drive.google.com/file/d/1-TX4bFUTZGG5GKcYpv3vDsOs7uFj7BSo/view?usp=drive_link",
    },
    {
      id: 6,
      Pname: "React + Redux",
      image: Sololearn_React,
      organization:"Organization-Sololearn",
      Link:"https://www.sololearn.com/certificates/CT-MIGKGGYR",
    },
  ];




  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&family=Montserrat:wght@700&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&family=Montserrat:wght@700&family=Poppins:wght@500&display=swap');
      </style>

     

      <div className="flex justify-center gap-10 flex-wrap mt-10 items-start mx-auto">
        <div className=" relative flex gap-10 xl:flex xl:justify-center lg:flex lg:justify-center flex-wrap justify-center sm:flex sm:flex-wrap">
          {data.map((item, key) => {
            return (
              <motion.div
                className=" block h-auto w-[310px] "
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

                  <div className=" mt-8 flex-wrap items-start ">
              <span
                className=" text-[#1e2125] block text-center cursor-pointer hover:text-[#ff014f] active:text-[#ff014f]"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "23px",
                  opacity: ".9",
                  fontWeight: "600px",
                  lineHeight: "34px",
                  marginBottom: "2px",
                }}
              >
                { item.Pname}
              </span>
              <span className=" text-[#1e2125] block text-center cursor-pointer hover:text-[#ff014f] active:text-[#ff014f] mt-1"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  opacity: ".9",
                  fontWeight: "300px",
                  lineHeight: "34px",
                  marginBottom: "20px",
                }}>{item.organization}</span>
              

              </div>
              <div className="flex  justify-center p-3 ">
             <Button   shadow color="error" auto >
              <a style={{textDecoration:"none"}} className="hover:text-white cursor-pointer  no-underline" href={item.Link} target="_blank">VIEW CERTIFICATE</a>
        </Button>

             </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </>
  )
}

export default Certificate