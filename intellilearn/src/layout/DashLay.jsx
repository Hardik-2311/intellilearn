import React from "react";
import DashNav from "../components/navbar/DashNav";
import Footer from "../components/footer/Footer";

const DashLay = ({ children, className }) => {
  return (
    <div className={className}>
      <DashNav className={className} />
      <main>{children}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DashLay;
