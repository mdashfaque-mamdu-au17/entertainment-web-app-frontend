import React from 'react';

const TitleHeading = ({ children }) => {
  return (
    <h3 className="text-xl text-primary-white leading-normal tracking-[-0.312px] font-light sm:text-[32px] sm:tracking-[-0.5px]">
      {children}
    </h3>
  );
};

export default TitleHeading;
