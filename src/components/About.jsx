import React from "react";
import Ab from "../assets/about.jpg";
import { SlBadge } from "react-icons/sl";
import { BsFillPeopleFill } from "react-icons/bs";

const About = () => {
  return (
    <>
      <div className="max-w-[1240px] mx-auto my-40">

      <div className="my-10 lg:my-20">
          <p className="text-center">
            <span className="text-gray-600">Get To Know More</span> <br />
            <span className="text-black font-bold text-4xl md:text-5xl">
              About Me
            </span>
          </p>
        </div>

        {/* 2 */}
        <div className="lg:flex lg:justify-center lg:items-center md:gap-20">
          <div className="">
            <img
              src={Ab}
              alt=""
              className="w-[280px] h-[200px] mx-auto lg:mx-0 lg:w-[390px] lg:h-[390px] rounded-[30px]"
            />
          </div>
          <div className="">
              {/* card divs */}
            <div className="flex flex-col items-center md:justify-center lg:items-start md:flex-row  gap-10 py-10 lg:pb-5">
                {/* 1 */}
              <div className="border-2 border-gray-400 w-80 h-40 rounded-[30px] flex flex-col justify-center items-center text-center ">
                <SlBadge size={20} />

                <p className="font-bold text-lg">Experience</p>
                <p className="text-gray-700">2+ years</p>
                <p className="text-gray-700">Frontend Development</p>
              </div>

              {/* 2 */}

              <div className="border-2 border-gray-400 w-80 h-40 rounded-[30px] flex flex-col justify-center items-center text-center ">
                <BsFillPeopleFill size={20} />

                <p className="font-bold text-lg">Education</p>
                <p className="text-gray-700">B.Sc. Bachelors Degree</p>
                <p className="text-gray-700">M.Sc. Masters Degree</p>
              </div>
            </div>

            {/* Text */}
            <div className="text-justify px-10 lg:px-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore omnis sapiente hic <br className="hidden lg:block"/> odio quod voluptates alias nobis 
            excepturi perspiciatis natus voluptatem<br className="hidden lg:block"/> exercitationem voluptas quibusdam deserunt impedit libero rerum adipisci <br className="hidden lg:block"/> 
            quos nisi velit sunt! Quibusdam magni  laborum perspiciatis, eaque quos nobis?
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
