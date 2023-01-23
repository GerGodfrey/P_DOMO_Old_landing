import React from "react";

const Button = ({ styles, name, bgColor}) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary ${bgColor} rounded-[10px] outline-none ${styles}`}>
    {name}
  </button>
);

export default Button;