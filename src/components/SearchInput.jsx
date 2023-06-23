import React from 'react';
import searchIcon from '../assets/icon-search.svg';
import classNames from 'classnames';

const SearchInput = ({
  id,
  name,
  type,
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="flex gap-4 items-center sm:gap-6 lg:w-full">
      <div className="lg:pb-[15px]">
        <img
          src={searchIcon}
          alt="search-icon"
          className="w-6 h-6 sm:w-8 sm:h-8"
        />
      </div>
      <div className="relative w-full">
        <label htmlFor={id || name} hidden>
          {label}
        </label>
        <input
          type={type}
          id={id}
          autoComplete="off"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={classNames(
            'w-full focus:outline-none bg-inherit text-base placeholder:text-primary-white/100/50 text-primary-white sm:text-2xl lg:pb-[15px] lg:focus:border-b-[1px] lg:focus:border-b-greyish-blue'
          )}
        />
      </div>
    </div>
  );
};

export default SearchInput;
