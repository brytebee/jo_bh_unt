/* eslint-disable react/no-array-index-key */
import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const CustomImageSlider = ({
  images, Styles, width, height,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={currentIndex === 0 ? Styles?.firstImg : Styles.imgSlider}>
      {images.map((image, idx) => (
        <Image
          key={idx}
          src={image}
          alt={image}
          width={height === 338 ? 600 : width}
          height={height === 338 ? 338 : height}
          className={`${Styles.animationFrame} ${currentIndex === images.indexOf(image) ? Styles.active : Styles.notActive}`}
        />
      ))}
    </div>
  );
};

export default CustomImageSlider;

CustomImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    blurDataURL: PropTypes.string,
    blurHeight: PropTypes.number,
    blurWidth: PropTypes.number,
    height: PropTypes.number,
    src: PropTypes.string,
    width: PropTypes.number,
  })).isRequired,
  Styles: PropTypes.shape({
    firstImg: PropTypes.string,
    imgSlider: PropTypes.string,
    animationFrame: PropTypes.string,
    active: PropTypes.string,
    notActive: PropTypes.string,
  }).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};
