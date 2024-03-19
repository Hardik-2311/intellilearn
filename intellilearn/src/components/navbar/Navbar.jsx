import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 shadow py-4 sticky top-0 z-50 grainy">
      <div className="container mx-auto flex justify-between items-center lg:px-24 px-14">
        <div className="logo text-xl font-bold">Your Logo</div>
        <ul className=" justify-between space-x-4 cursor-pointer md:flex hidden ">
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
              to="/services"
              className="nav-link"
              activeClassName="active"
            >
              Services
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
        </ul>
        <div className="flex gap-4 justify-between items-center">
          <Button
          className=""
            title="Login"
            onClick={() => {
              
            }}
          />
          <Button
          className="bg-[#20B486] text-white"
            title="Get Started"
            icon={<IoIosArrowRoundForward className="w-6 h-6" />}
            onClick={() => {
              
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
