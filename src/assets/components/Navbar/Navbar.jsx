import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <div className=" text-white py-2 absolute top-0 left-0 w-full z-20">
      <div data-aos="fade-down" className="container">
        <div className=" flex justify-between items-center">
          <h1 className=" text-4xl font-bold uppercase">
            Buah<span className=" font-normal">Jeruk</span>
          </h1>
          <ul className=" lg:flex space-x-14 text-xl hidden">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div onClick={() => setSidebar(!sidebar)}>
            <GiHamburgerMenu className=" text-3xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
