import React from "react";
import Pic1 from "../assets/herop.jpg";
import {BsLinkedin, BsGithub} from "react-icons/bs";
const Hero = () => {
  return (
    <>
      <div className="max-w-[1240px] mx-auto mt-20 md:mt-44  md:flex md:justify-around md:items-center lg:-space-x-96 text-center">
        <div className="avatar">
          <div className="w-80 rounded-full">
            <img src={Pic1} className="z-0"/>
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <p className="leading-4">
            <span className="font-mono text-sm text-gray-600">Hello,I'm</span> <br /> <br />
            <span className="text-black font-bold text-4xl">Sadab Zaman</span> <br /> <br />
            <span className="text-3xl font-mono text-gray-600">Frontend Developer</span>
          </p>

          <div className="space-x-5 mt-5">
            <button className="border-2 border-black px-3 py-3 rounded-full">Download CV</button>
            <button className="bg-black text-white px-3 py-3 rounded-full hover:bg-white hover:text-black border-2 border-black ">Contact Info</button>
          </div>

            <div className="mt-5 flex justify-center gap-5">
                <BsLinkedin size={25} className="rounded-full"/>
                <BsGithub size={25} className="rounded-full"/>
            </div>
        
        </div>
      </div>
    </>
  );
};

export default Hero;
