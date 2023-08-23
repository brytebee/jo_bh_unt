/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import propTypes from 'prop-types';
import Styles from './ComingSoon.module.scss';

const CustomPopup = ({ children, ...props }) => (
  <div
    {...props}
    className={`${Styles.popcard} ${props.className}`}
  >
    {children}
  </div>
);

export default CustomPopup;

CustomPopup.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string.isRequired,
};
