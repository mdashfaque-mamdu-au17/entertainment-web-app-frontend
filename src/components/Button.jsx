import React from 'react';
import classNames from 'classnames';

const Button = ({ type, children, disabled, style, onClick }) => {
  return (
    <button
      type={type}
      className={classNames(
        'w-[279px] h-12 bg-primary-red  flex items-center justify-center text-primary-white text-[15px] leading-[19px] font-light rounded-md transition-colors duration-300 ease-linear hover:cursor-pointer hover:bg-primary-white hover:text-primary-black md:w-[336px]',
        style
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
