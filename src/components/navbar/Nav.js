import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <div className="bg-black px-5 md:px-10 py-2 flex flex-row items-center justify-between sticky top-0 z-9">
        {/* Logo Part */}
        <div>
          <Link to="/">
            <img src={require("../Image/Logo.png")} alt="logo" className="w-40" />
          </Link>
        </div>

        {/* Menu Part */}
        <div className="hidden md:flex">
          <ul className="flex flex-row space-x-4">
            <li>
              <NavLink to="/" className="text-white">Home</NavLink>
            </li>

            <li>
              <NavLink to="/casestudy" className="text-white">Case Study</NavLink>
            </li>

            <li>
              <NavLink to="/quencil" className="text-white">Why QUENCIL</NavLink>
            </li>

            <li>
              <NavLink to="/detailed" className="text-white">Detailed Analysis</NavLink>
            </li>

            <li>
              <NavLink to="/alumni" className="text-white">Our Alumni</NavLink>
            </li>

            <li>
              <NavLink to="/about" className="text-white">About</NavLink>
            </li>
          </ul>
        </div>

        {/* Social media links */}
        <div className="hidden md:flex flex-row">
          <ul className="flex flex-row space-x-3">
            <li>
              <a href="https://www.facebook.com/quencil.tech.training/">
                <FaFacebook className="text-blue-500 text-2xl" />{" "}
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/">
                <FaInstagramSquare className="text-pink-500 text-2xl" />{" "}
              </a>
            </li>

            <li>
              <a href="https://www.youtube.com/">
                <FaYoutubeSquare color="red" className="text-2xl" />
              </a>
            </li>
          </ul>
        </div>

        {/* Hamburger menu start */}
        <div className="flex md:hidden">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu color="white" />
            </a>
          </div>
      </div>

      {
        showMediaIcons ? (
          <>
            <ul className="transition ease-in-out delay-500 p-5 space-y-3">
              <li>
                <NavLink to="/" className="text-gray-800 font-semibold">Home</NavLink>
              </li>

              <li>
                <NavLink to="/casestudy" className="text-gray-800 font-semibold">Case Study</NavLink>
              </li>

              <li>
                <NavLink to="/quencil" className="text-gray-800 font-semibold">Why QUENCIL</NavLink>
              </li>

              <li>
                <NavLink to="/detailed" className="text-gray-800 font-semibold">Detailed Analysis</NavLink>
              </li>

              <li>
                <NavLink to="/alumni" className="text-gray-800 font-semibold">Our Alumni</NavLink>
              </li>

              <li>
                <NavLink to="/about" className="text-gray-800 font-semibold">About</NavLink>
              </li>
            </ul>         
          </>
        ):null
      }
    </>
  );
};

export default Nav;
