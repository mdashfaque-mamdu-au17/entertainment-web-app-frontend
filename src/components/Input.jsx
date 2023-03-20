import React from 'react';
import { useField } from 'formik';
import classNames from 'classnames';

const Input = ({ label, ...props }) => {
  return (
    <div className="w-[279px] md:w-[336px] relative">
      <label htmlFor={props.id || props.name} hidden>
        {label}
      </label>
      <input
        {...props}
        className={classNames(
          'w-full focus:outline-none bg-inherit text-[15px] leading-[19px] font-light placeholder:text-primary-white/100/50 text-primary-white pb-[17px] border-b-[1px] border-b-primary-white/50 focus:border-b-primary-white pl-4'
        )}
      />
    </div>
  );
};

export default Input;
