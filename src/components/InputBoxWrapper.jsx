import React from 'react';

const InputBoxWrapper = ({ children }) => {
  return (
    <section className="bg-semi-dark-blue rounded-[10px] md:rounded-[20px] max-w-[327px] md:max-w-[400px] mx-auto">
      {children}
    </section>
  );
};

export default InputBoxWrapper;
