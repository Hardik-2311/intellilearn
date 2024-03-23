import React from "react";
import DashNav from "../components/navbar/DashNav";

const DashLay = ({ children, className }) => {
  return (
    <div className={className}>
      <DashNav className={className} />
      <main>{children}</main>
    </div>
  );
};

export default DashLay;
