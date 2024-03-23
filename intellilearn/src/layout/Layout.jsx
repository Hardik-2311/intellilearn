import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Layout = ({ children, className }) => {
  return (
    <div className={className}>
      <Navbar className={className} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
