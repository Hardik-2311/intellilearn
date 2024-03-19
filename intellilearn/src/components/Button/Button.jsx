import React from "react";

const Button = ({ title, icon, className }) => {
  const buttonClasses = `px-6 py-2 gap-2 flex justify-between items-center rounded-md ${className}`;

  return (
    <button className={buttonClasses}>
      {title} {icon}
    </button>
  );
};

export default Button;
