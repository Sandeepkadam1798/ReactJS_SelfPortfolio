import Handshake from "./images/handshake.jpg";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";

import { Input, useInput, Grid, Textarea, Button } from "@nextui-org/react";

const Contact = () => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6ozzosi",
        "template_sm78vw9",
        form.current,
        "OwNH1sJ3_RWqeChFR"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // //For email send success
  // function SendSuccess (){

  //   alert("Email Send")
  // }

  //for email is correct or not

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

      <div className=" block mt-10  ">
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
          className=" text-6xl th	mb-0 text-[#3c3e41]	leading-3 pb-4 block text-center pt-5  xl:text-[60px] lg:text-[60px] text-[35px]"
          style={{
            fontFamily: "Montserrat",
            fontWeight: "700px",

            lineHeight: "1.2px",
          }}
        >
          Contact With Me
        </h1>
      </div>

      <motion.div
        className="mt-16  h-auto border-b-2 p-2 flex flex-col md:flex sm:flex-col md:flex-row justify-center gap-10 z-0 w-auto mx-auto"
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <div
          className="h-[100%] lg:w-[350px] xl:w-[350px] w-auto  "
          style={{
            boxShadow: "5px 5px 15px #d1d9e6,-5px -5px 15px #fff",
            borderRadius: "10px",
            background: "rgb(228,234,237) ",
            background: " linear-gradient(145deg, #e2e8ec , #fff",
          }}
        >
          <div className="flex justify-center mt-8	">
            <div className="relative flex items-center justify-center m-1  overflow-hidden w-[300px] h-[241] rounded-md">
              <img
                className=" h-[241px] w-[350] relative rounded-md	hover:scale-110 transition ease-in-out duration-500	"
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
                className=" text-[#ff014f] block text-center"
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
                  fontSize: "16px",
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
                  fontSize: "16px",
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
        <motion.div
          className="lg:h-[610px] xl:h-[610px] lg:w-[600px] xl:w-[600px] w-auto h-[100%]  "
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          style={{
            boxShadow: "5px 5px 15px #d1d9e6,-5px -5px 15px #fff",
            borderRadius: "10px",
            background: "rgb(228,234,237) ",
            background: " linear-gradient(145deg, #e2e8ec , #fff",
          }}
        >
          <form ref={form} onSubmit={sendEmail}>
            {/* <div className="flex justify-evenly "> */}
            {/* <div className=" mt-7  ml-10 flex" style={{}}>
                <h6
                  className=" text-[#5c5f62] font-medium	text-sm  inline-block "
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

                <Input
                  className=" mt-1 mr-7"
                  bordered
                  color="error"
                  type="text"
                  name="user_name"
                  required
                />
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

                <Input
                  className=" mt-1 mr-7 "
                  bordered
                  color="error"
                  type="number"
                  name="user_mno"
                  required
                />

              </div> */}

            <div className=" rounded-md gradient md:w-[100%] w-full md:m-0 mt-4 h-auto mx-auto ">
              <div className="p-8">
                <div className="flex justify-around gap-4 items-center flex-col sm:flex-col md:flex-row">
                  <div className="w-full p-2">
                    <p className="uppercase  md:font-thin mb-4 l md:text-[#3c3e41] "   style={{
                  fontFamily: "poppins",
                  lineHeight: "22px",
                  fontWeight: "500",
                  letterSpacing: "1px",
                  
                  fontSize: "12px",
                  
                }}>

                   

                      YOUR NAME
                    </p>
                    <Input
                  className="mobile1    w-full "
                  bordered
                  color="error"
                  type="text"
                  name="user_name"
                  required
                />
                  </div>
                  <div className="w-full p-2 mobile1">
              <p className="uppercase tracking-widest text-xs font-medium md:font-thin mb-4 leading-3 md:text-[#3c3e41] text-black">
                PHONE NUMBER
              </p>
              <Input
                  className=""
                  bordered
                  color="error"
                  type="number"
                  name="user_mno"
                />
            </div>

                </div>
                <div className="mt-4 p-2 ">
            <p className="uppercase tracking-widest text-xs font-medium md:font-thin mb-4 leading-3 md:text-[#3c3e41] text-black" style={{
                  fontFamily: "poppins",
                  lineHeight: "22px",
                  fontWeight: "500",
                  letterSpacing: "1px",
                  textAlign: "left",
                  fontSize: "12px",
                  marginBottom: "14px",
                }}>
              EMAIL
            </p>

            <Input
                className="mobile"
                {...bindings}
                clearable
                shadow={false}
                onClearClick={reset}
                status={helper.color}
                helperColor={helper.color}
                helperText={helper.text}
                required
                type="email"
                bordered
                color="error"
                // style={{ width: "450px"}}
                name="user_email"
              />

          </div>
          <div className="mt-4 p-2">
            <p className="uppercase tracking-widest text-xs font-medium md:font-thin mb-4 leading-3 md:text-[#3c3e41] text-black" style={{
                  fontFamily: "poppins",
                  lineHeight: "22px",
                  fontWeight: "500",
                  letterSpacing: "1px",
                  textAlign: "left",
                  fontSize: "12px",
                  marginBottom: "14px",
                }}>
              SUBJECT
            </p>
            <Input
                className="mobile"
                bordered
                color="error"
                
                name="email_subject"
                required
              />
          </div>
          <div className="mt-4 p-2">
            <p className="uppercase tracking-widest text-xs font-medium md:font-thin mb-4 leading-3 md:text-[#3c3e41] text-black">
              YOUR MESSAGE
            </p>
            <Textarea className="mobile "
                bordered
                color="error"
                // style={{  height: "250px" }}
                name="message"
                required
              />

          </div>
          <div className="flex mr-8 mt-5 float-right pb-7">
              <Button shadow color="error" auto>
                <input type="submit" value="Send" />
              </Button>
              
            </div>
            {isEmailSent && (
  <p className="pt-5 " style={{ color: 'green', textAlign: 'center' }}>
    Email sent successfully!
  </p>
)}
  </div>
  </div>
  
          


            {/* <div className="   text-[#5c5f62] mt-5  p-2">
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

                <Input
                  className=" mobile"
                  bordered
                  color="error"
                  type="text"
                  name="user_name"
                  required
                />
          </div>
          <div className=" ml-2  text-[#5c5f62] inline-block p-2">
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

                <Input
                  className=" mobile"
                  bordered
                  color="error"
                  type="number"
                  name="user_mno"
                />
          </div>
        </div>
            </div>

            <div className=" ml-2  text-[#5c5f62] inline-block p-2" style={{}}>
              <h6
                className=" text-[#5c5f62] font-medium	text-sm  block  "
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

              <Input
                className="mobile"
                {...bindings}
                clearable
                shadow={false}
                onClearClick={reset}
                status={helper.color}
                helperColor={helper.color}
                helperText={helper.text}
                required
                type="email"
                bordered
                color="error"
                // style={{ width: "450px"}}
                name="user_email"
              />
            </div>

            

            <div className=" mt-7  ml-2  text-[#5c5f62] inline-block lg:mt-7  lg:ml-14 p-2" style={{}}>
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

              <Input
                className="mobile"
                bordered
                color="error"
                
                name="email_subject"
                required
              />
            </div>
            <div className=" mt-7  ml-2  text-[#5c5f62] inline-block lg:mt-7  lg:ml-14 p-2" style={{}}>
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

              <Textarea className="mobile "
                bordered
                color="error"
                // style={{  height: "250px" }}
                name="message"
                required
              />
            </div>

            <div className="flex mr-8 mt-5 float-right pb-7">
              <Button shadow color="error" auto>
                <input type="submit" value="Send" />
              </Button>
              
            </div>
            {isEmailSent && (
  <p className="pt-5 " style={{ color: 'green', textAlign: 'center' }}>
    Email sent successfully!
  </p>
)} */}
          </form>

          
          {/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
             */}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Contact;
