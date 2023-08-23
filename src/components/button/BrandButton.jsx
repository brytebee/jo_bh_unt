import React from 'react';
import PropTypes from 'prop-types';
import style from './brand-button.module.scss';

const BrandButton = ({
  icon,
  click,
  text,
  loading,
  type = 'submit',
  styles,
  loadingText,
}) => (
  <button
    onClick={click}
    type={type === 'button' ? 'button' : 'submit'}
    className={` flex justify-center cursor-pointer rounded-lg  px-4 pt-1.5 my-10 h-16 ${styles}`}
    disabled={loading}
  >
    {loading ? (
      <div className="w-100 flex flex-row justify-between text-white">
        <svg
          width="24"
          height="24"
          fill="currentColor"
          className="animate-spin flex"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
            opacity=".25"
          />
          <path
            d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
            className="spinner_ajPY"
          />
        </svg>
        {loadingText && <span className="ml-3">{loadingText}</span>}
      </div>
    ) : (
      <span className={style.w_full}>
        {icon}
        {text}
      </span>
    )}
  </button>
);

BrandButton.propTypes = {
  icon: PropTypes.element,
  type: PropTypes.string,
  text: PropTypes.string,
  loading: PropTypes.bool,
  loadingText: PropTypes.string,
  styles: PropTypes.string,
  click: PropTypes.func,
};

export default BrandButton;
