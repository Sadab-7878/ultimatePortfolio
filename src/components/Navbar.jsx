import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {

    const [open, setOpen] = useState(false);

    const handle = () => {
        setOpen(!open);
    }

  return (
    <>
      <div className="max-w-[1240px] mx-auto">
        <div className="pt-5 flex justify-around">
          <div>
            <p className="text-2xl font-mono">Sadab Zaman.</p>
          </div>
          <div>
            <ul className="gap-10 hidden md:flex">
              <li className="text-2xl font-mono cursor-pointer">About</li>
              <li className="text-2xl font-mono cursor-pointer">Experience</li>
              <li className="text-2xl font-mono cursor-pointer">Projects</li>
              <li className="text-2xl font-mono cursor-pointer">Contact</li>
            </ul>

            <div onClick={handle} className="md:hidden cursor-pointer">
            {open ? <RxCross2 size={30}/> : <BiMenuAltRight size={30} />}
              
            </div>
            <ul className= {open ? 'fixed md:hidden right-10 top-20 px-10 py-5 z-10 bg-white space-y-5 rounded shadow-lg duration-500' : 'hidden'}
            >
                <li className="md:hidden cursor-pointer">About</li>
                <li className="md:hidden cursor-pointer">Experience</li>
                <li className="md:hidden cursor-pointer">Projects</li>
                <li className="md:hidden cursor-pointer">Contact</li>
            </ul>
           
          </div>
        </div>

       
      </div>
    </>
  );
};

export default Navbar;
