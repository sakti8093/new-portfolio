import React from "react";
import { IoIosContact } from "react-icons/io";
import {AiOutlineMail,AiOutlineMessage } from 'react-icons/ai'
import { Button } from "antd";
const ContactBox = () => {
  const handleClick = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e);
  };

  const handleMouseEnter =(e:React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    if (e.currentTarget.labels) {
        e.currentTarget.labels[0].style.backgroundColor = "#FFC107";
        e.currentTarget.labels[0].style.color = "black";
      }
  }

  const handleMouseLeave =(e:React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    if (e.currentTarget.labels) {
        e.currentTarget.labels[0].style.backgroundColor = "black";
        e.currentTarget.labels[0].style.color = "#8c8c8e";
      }
  }

  return (
    <div>
      <p className="mt-10 text-lg font-semibold text-white">Get In Touch</p>
      <div className="custom-backdrop p-5 md:p-10 mt-4">
        <form action="" >
          <div className="w-full relative">
            <label
              htmlFor="name"
              className="absolute h-[50px] w-[50px] top-0 left-0 bg-black p-2 text-3xl"
            >
              <IoIosContact />
            </label>
            <input
              onChange={(e) => handleClick(e)}
              id="name"
              placeholder="Name"
              className="w-full bg-background-1 text-white input-form rounded-none h-[50px] outline-none border-none pl-[65px]"
              onMouseEnter={(e)=>handleMouseEnter(e)}
              onMouseLeave={(e)=>handleMouseLeave(e)}
            />
          </div>
          <div className="w-full relative mt-8">
            <label
              htmlFor="mail"
              className="absolute h-[50px] w-[50px] top-0 left-0 bg-black p-2 text-3xl"
            >
              <AiOutlineMail />
            </label>
            <input
              onChange={(e) => handleClick(e)}
              placeholder="Email"
              id="mail"
              className="w-full bg-background-1 text-white input-form rounded-none h-[50px] outline-none border-none pl-[65px]"
              onMouseEnter={(e)=>handleMouseEnter(e)}
              onMouseLeave={(e)=>handleMouseLeave(e)}
            />
          </div>
          <div className="w-full relative mt-8">
            <label
              htmlFor="message"
              className="absolute w-[50px] top-0 left-0 bg-black p-2 text-3xl h-full"
            >
              <AiOutlineMessage />
            </label>
            <textarea
              onChange={(e) => handleClick(e)}
              placeholder="Message"
              rows={10}
              id="message"
              className="w-full bg-background-1 text-white input-form rounded-none outline-none border-none pl-[65px] h-full"
              onMouseEnter={(e)=>handleMouseEnter(e)}
              onMouseOut={(e)=>handleMouseLeave(e)}
            />
          </div>
          <Button type="ghost" className="mt-6  bg-yellow-500" >SEND MESSAGE</Button>
        </form>
      </div>
    </div>
  );
};

export default ContactBox;
