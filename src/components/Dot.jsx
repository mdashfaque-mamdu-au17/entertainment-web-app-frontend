import React from 'react';
import classNames from 'classnames';
const Dot = ({ styles }) => {
  return (
    <div
      className={classNames(
        'w-[3px] h-[3px] bg-primary-white rounded-full opacity-75',
        styles
      )}
    ></div>
  );
};

export default Dot;
