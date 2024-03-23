import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const Layout = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }} 
      className={className}
    >
      <Navbar className={className} />
      <main>{children}</main>
      <Footer />
    </motion.div>
  );
};

export default Layout;
