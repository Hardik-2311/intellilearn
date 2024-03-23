import React from "react";
import { IoIosArrowRoundForward, IoMdSearch } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";

const Navbar = ({ className }) => {
  return (
    <nav className={`bg-gray-100 shadow py-4 sticky top-0 z-50 ${className}`}>
      <div className="container mx-auto flex justify-between items-center lg:px-10 px-14">
        <div className="logo text-xl font-bold">Your Logo</div>
        <ul className=" items-baseline justify-between space-x-4 cursor-pointer md:flex hidden ">
          <li>
            <NavLink to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="nav-link"
              activeClassName="active"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <div className="flex gap-4 justify-between items-center">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                />
                <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
              {/* Buttons */}
             <NavLink to="/login"> <Button className="" title="Login"/></NavLink>
              <NavLink to="/signup">
              <Button
                className="bg-[#20B486] text-white"
                title="Get Started"
                icon={<IoIosArrowRoundForward className="w-6 h-6" />}
              />
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
