import React from 'react';

const InputBoxWrapper = ({ children }) => {
  return (
    <section className="bg-semi-dark-blue rounded-[10px] md:rounded-[20px]">
      {children}
    </section>
  );
};

export default InputBoxWrapper;
