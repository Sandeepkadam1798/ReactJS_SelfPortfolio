import React from "react";
import Handshake from "./images/handshake.jpg";

import { Input, useInput, Grid , Textarea ,Button} from "@nextui-org/react";

const Contact = () => {
  const { value, reset, bindings } = useInput("");

  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const helper = React.useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&family=Montserrat:wght@700&family=Poppins:wght@500&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&family=Montserrat:wght@700&display=swap');
      </style>

      <div className=" block mt-10 ">
        <h6
          className=" text-[#ff014f] font-medium	text-sm pb-4 block text-center "
          style={{
            fontFamily: "sans-serif",
            letterSpacing: "2px",
            lineHeight: "14px",
            fontWeight: "700",
          }}
        >
          CONTACT
        </h6>
        <h1
          className=" text-6xl th	mb-0 text-[#3c3e41]	leading-3 pb-4 block text-center pt-5"
          style={{
            fontFamily: "Montserrat",
            fontWeight: "700px",
            fontSize: "60px",
            lineHeight: "1.2px",
          }}
        >
          Contact With Me
        </h1>
      </div>

      <div className="flex mt-16 gap-16 justify-center">
        <div
          className="h-[100%] w-[420px] "
          style={{
            boxShadow: "5px 5px 15px #d1d9e6,-5px -5px 15px #fff",
            borderRadius: "10px",
            background: "rgb(228,234,237) ",
            background: " linear-gradient(145deg, #e2e8ec , #fff",
          }}
        >
          <div className="flex justify-center mt-8	">
            <div className="relative flex items-center justify-center m-1  overflow-hidden w-[385] h-[241] rounded-md">
              <img
                className=" h-[241px] w-[385] relative rounded-md	hover:scale-110 transition ease-in-out duration-500	"
                src={Handshake}
                alt="HandshakeError"
              />
            </div>
          </div>

          <div className="mt-5 bottom-9  ">
            <h6
              className=" text-[#1e2125] block text-center"
              style={{
                fontFamily: "Montserrat",
                lineHeight: "44px",
                fontWeight: "600",
                fontSize: "29px",
              }}
            >
              Sandeep Kadam
            </h6>

            <div className="ml-5 mr-5">
              <span
                className=" text-[#3c3e41] block text-center"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  opacity: ".9",
                  fontWeight: "400px",
                  lineHeight: "30px",
                  marginBottom: "20px",
                }}
              >
                FullStack Web Developer
              </span>
              <span
                className=" text-[#3c3e41] block text-center"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  opacity: ".9",
                  fontWeight: "400px",
                  lineHeight: "30px",
                  marginBottom: "20px",
                }}
              >
                I am available for freelance work. Connect with me via and call
                in to my account.
              </span>
              <span
                className=" text-[#3c3e41] block text-center"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  opacity: ".9",
                  fontWeight: "400px",
                  lineHeight: "30px",
                  marginBottom: "20px",
                }}
              >
                Phone: +91 7038758993 <br />
                Email: Sandeepkadam1798.sk@gmail.com
              </span>
            </div>
          </div>
        </div>

        {/* part 2 */}
        <div
          className="h-[615px] w-[650px] "
          style={{
            boxShadow: "5px 5px 15px #d1d9e6,-5px -5px 15px #fff",
            borderRadius: "10px",
            background: "rgb(228,234,237) ",
            background: " linear-gradient(145deg, #e2e8ec , #fff",
          }}
        >
          <div className="flex justify-evenly ">
            <div className=" mt-7  ml-10" style={{}}>
              <h6
                className=" text-[#5c5f62] font-medium	text-sm  block "
                style={{
                  fontFamily: "poppins",
                  lineHeight: "22px",
                  fontWeight: "500",
                  letterSpacing: "1px",
                  textAlign: "left",
                  fontSize: "12px",
                  marginBottom: "14px",
                }}
              >
                YOUR NAME
              </h6>

              <Input className=" mt-1 mr-7" bordered color="error" />
            </div>

            <div className=" mt-7 mr-10 ">
              <h6
                className=" text-[#5c5f62] font-medium	text-sm  block "
                style={{
                  fontFamily: "poppins",
                  lineHeight: "22px",
                  fontWeight: "500",
                  letterSpacing: "1px",
                  textAlign: "left",
                  fontSize: "12px",
                  marginBottom: "14px",
                }}
              >
                PHONE NUMBER
              </h6>

              <Input className=" mt-1 mr-7 " bordered color="error" />
            </div>
          </div>

          {/*  for mail */}
          {/* <div className=" flex  flex-wrap items-start mt-7  ">

            
            <h6 
              className=" text-[#5c5f62] font-medium	text-sm  inline-block ml-20 "
              style={{
                fontFamily: "poppins",
                lineHeight: "22px",
                fontWeight: "500",
                letterSpacing: "1px",
                textAlign: "left",
                fontSize: "12px",
                marginBottom: "14px",
              }}
            >
              EMAIL
            </h6>

                <div>

            <Input
              className=" mx-auto mt-10  " 
              {...bindings}
              clearable
              shadow={false}
              onClearClick={reset}
              status={helper.color}
              helperColor={helper.color}
              helperText={helper.text}
              type="email"
              bordered
              color="error"

              style={{width:"470px"}}
            />
            </div>
          </div> */}
          
          <div className=" mt-7  ml-20 " style={{}}>
              <h6
                className=" text-[#5c5f62] font-medium	text-sm  block "
                style={{
                  fontFamily: "poppins",
                  lineHeight: "22px",
                  fontWeight: "500",
                  letterSpacing: "1px",
                  textAlign: "left",
                  fontSize: "12px",
                  marginBottom: "14px",
                }}
              >
                Email
              </h6>

              <Input className=" mt- mr-7 " {...bindings}
              clearable
              shadow={false}
              onClearClick={reset}
              status={helper.color}
              helperColor={helper.color}
              helperText={helper.text}
              type="email" bordered color="error" style={{width:"450px"}} />

              </div>
          <div className=" mt-7  ml-20 " style={{}}>
              <h6
                className=" text-[#5c5f62] font-medium	text-sm  block "
                style={{
                  fontFamily: "poppins",
                  lineHeight: "22px",
                  fontWeight: "500",
                  letterSpacing: "1px",
                  textAlign: "left",
                  fontSize: "12px",
                  marginBottom: "14px",
                }}
              >
                SUBJECT
              </h6>

              <Input className=" mt- mr-7 " bordered color="error" style={{width:"450px"}} />

              
              
            </div>
          <div className=" mt-7  ml-20 " style={{}}>
              <h6
                className=" text-[#5c5f62] font-medium	text-sm  block "
                style={{
                  fontFamily: "poppins",
                  lineHeight: "22px",
                  fontWeight: "500",
                  letterSpacing: "1px",
                  textAlign: "left",
                  fontSize: "12px",
                  marginBottom: "14px",
                }}
              >
                YOUR MESSAGE
              </h6>

             <Textarea
          bordered
          color="error"
          style={{width:"470px",height:"250px"}}
        />

            </div>

             <div className="flex mr-8 mt-5 float-right">
             <Button   shadow color="error" auto >
          SEND 
        </Button>

             </div>

            



        </div>
      </div>

      
    </>
  );
};

export default Contact;
