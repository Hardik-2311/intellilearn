import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="flex p-4 justify-between items-center">
        <div className="w-1/3"><img src="/banner2.jpg" alt="" className="rounded-full" /></div>
      <ItemsContainer />
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 items-baseline text-gray-400 text-sm pb-8"
      >
        <span>© 2024 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;