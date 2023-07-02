import classNames from 'classnames';
import React from 'react';

const SubTitle = ({ type, children }) => {
  const applyCommonStyle = () => {
    return 'text-primary-white opacity-75';
  };
  const applyStyle = () => {
    if (type === 'trending') {
      return 'text-xs font-light sm:text-[15px]';
    }
  };
  return (
    <p className={classNames(applyCommonStyle(), applyStyle())}>{children}</p>
  );
};

export default SubTitle;
