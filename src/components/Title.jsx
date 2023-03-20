import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ type, color, children }) => {
  const commonStyle = () => {
    if (type === 'medium') {
      return 'text-[15px] font-light leading-[19px]';
    }
  };
  const applyStyles = () => {
    if (type === 'medium' && color === 'white') {
      return 'text-primary-white';
    }
    if (type === 'medium' && color === 'red') {
      return 'text-primary-red';
    }
  };
  return <p className={classNames(commonStyle(), applyStyles())}>{children}</p>;
};

export default Title;

Title.propTypes = {
  type: PropTypes.oneOf(['medium']),
  color: PropTypes.oneOf(['white', 'red']),
};
