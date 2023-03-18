import React from 'react';

const Button = ({ type, children }) => {
  return (
    <button
      type={type}
      className="w-[279px] h-12 bg-primary-red  flex items-center justify-center text-primary-white text-[15px] leading-[19px] font-light rounded-md transition-colors duration-300 ease-linear hover:cursor-pointer hover:bg-primary-white hover:text-primary-black md:w-[336px]"
    >
      {children}
    </button>
  );
};

export default Button;
