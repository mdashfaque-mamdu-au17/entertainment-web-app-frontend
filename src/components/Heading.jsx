import classNames from 'classnames';
import React from 'react';

const Heading = ({ className, children }) => {
  return (
    <h2
      className={classNames(
        'text-[32px] leading-10 text-primary-white font-light',
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Heading;
