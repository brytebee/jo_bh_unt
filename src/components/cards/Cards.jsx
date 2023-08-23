import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Style from './Cards.module.scss';

export default function Cards({
  image, header, desc, bgColor,
}) {
  return (
    <>
      <div
        className={Style.card__container}
        style={{ backgroundColor: bgColor }}
      >
        <div className={Style.header_cont}>
          <h6 className={Style.card__header}>{header}</h6>
          <div className={Style.check__svg}>
            <svg width="28" height="27" viewBox="0 0 38 37" fill="none">
              <path
                d="M38 18.4996L33.7855 13.6806L34.3727 7.30692L28.1373 5.89055L24.8727 0.363281L19 2.8851L13.1273 0.363281L9.86273 5.87328L3.62727 7.27237L4.21455 13.6633L0 18.4996L4.21455 23.3187L3.62727 29.7096L9.86273 31.126L13.1273 36.636L19 34.0969L24.8727 36.6187L28.1373 31.1087L34.3727 29.6924L33.7855 23.3187L38 18.4996ZM14.4745 25.426L10.3636 21.2806C10.2035 21.1208 10.0765 20.931 9.9898 20.722C9.90312 20.513 9.85851 20.289 9.85851 20.0628C9.85851 19.8366 9.90312 19.6126 9.9898 19.4037C10.0765 19.1947 10.2035 19.0049 10.3636 18.8451L10.4845 18.7242C11.1582 18.0506 12.2636 18.0506 12.9373 18.7242L15.7182 21.5224L24.6136 12.6096C25.2873 11.936 26.3927 11.936 27.0664 12.6096L27.1873 12.7306C27.8609 13.4042 27.8609 14.4924 27.1873 15.166L16.9618 25.426C16.2536 26.0996 15.1655 26.0996 14.4745 25.426Z"
                fill="#0CB144"
              />
            </svg>
          </div>
        </div>
        <ul className={Style.card__text}>
          {desc.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className={Style.card__image}>
          <Image src={image} alt={image} />
        </div>
      </div>
    </>
  );
}

Cards.propTypes = {
  image: PropTypes.shape({
    blurDataURL: PropTypes.string,
    blurHeight: PropTypes.number,
    blurWidth: PropTypes.number,
    height: PropTypes.number,
    src: PropTypes.string,
    width: PropTypes.number,
  }).isRequired,
  header: PropTypes.string.isRequired,
  desc: PropTypes.arrayOf(PropTypes.string).isRequired,
  bgColor: PropTypes.string.isRequired,
};
