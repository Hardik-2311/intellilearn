import React from "react";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="text-[#22B286]">
      <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-[#22B286] duration-300">
        <FaFacebook />
      </span>
      <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-[#22B286] duration-300">
        <FaTwitter />
      </span>
      <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-[#22B286] duration-300">
        <FaGithub />
      </span>
      <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-[#22B286] duration-300">
        <FaLinkedin />
      </span>
    </div>
  );
};

export default SocialIcons;
