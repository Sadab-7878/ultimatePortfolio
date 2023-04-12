import React from "react";
import Ab from "../assets/about.jpg";
import { SlBadge } from "react-icons/sl";
import {BsFillPeopleFill} from "react-icons/bs"

const About = () => {
  return (
    <>
      <div className="max-w-[1240px] mx-auto my-20">
        {/* 1 */}
        <div>
          <p className="text-center">
            <span className="text-gray-600">Get To Know More</span> <br />
            <span className="text-black font-bold text-4xl md:text-5xl">
              About Me
            </span>
          </p>
        </div>

        {/* 2 */}

        <div className="my-10  lg:my-20 lg:flex lg:justify-around lg:space-x-24 ">
          <div>
            <img
              src={Ab}
              alt=""
              className=" w-[200px] h-[200px] mx-auto lg:mx-5 lg:w-[1100px] lg:h-[370px] rounded-[30px]"
            />
          </div>

          <div className="flex flex-col justify-center  items-center lg:items-start   gap-10   my-10 lg:my-0">
            <div className="space-y-8   md:space-y-0  md:flex md:gap-8">

              <div className="border-2 border-gray-400 w-80 h-40 rounded-[30px] flex flex-col justify-center items-center text-center ">
                <SlBadge size={20} />

                <p className="font-bold text-lg">Experience</p>
                <p className="text-gray-700">2+ years</p>
                <p className="text-gray-700">Frontend Development</p>
              </div>
              <div className="border-2 border-gray-400 w-80 h-40 rounded-[30px] flex flex-col justify-center items-center text-center ">
                <BsFillPeopleFill size={20} />

                <p className="font-bold text-lg">Education</p>
                <p className="text-gray-700">B.Sc. Bachelors Degree</p>
                <p className="text-gray-700">M.Sc. Masters Degree</p>
              </div>
              
            </div>
            <div className="text-justify px-10 lg:px-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore omnis sapiente hic odio quod voluptates alias nobis 
            excepturi perspiciatis natus voluptatem exercitationem voluptas quibusdam deserunt impedit libero rerum adipisci  quos nisi velit sunt! Quibusdam magni  laborum perspiciatis, eaque quos nobis?
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default About;