import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import './AnimationAsset.module.scss';

const variants = {
  hidden: { opacity: 0, x: '-100%' },
  visible: { opacity: 1, x: 0 },
};

const CustomDivSlider = ({ divCont, Styles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % divCont.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [divCont.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => setVisible(true), 2000);
    }, 8000);

    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <>
      {visible && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1 }}
          className={currentIndex === 0 ? Styles?.firstImg : Styles.imgSlider}
        >
          {divCont.map((item, idx) => (
            <div key={Number(idx)}>
              <div
                className={`${Styles.animationFrame} ${
                  currentIndex === divCont.indexOf(item)
                    ? Styles.active
                    : Styles.notActive
                }`}
              >
                {item}
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default CustomDivSlider;

CustomDivSlider.propTypes = {
  divCont: PropTypes.arrayOf(
    PropTypes.shape({
      blurDataURL: PropTypes.string,
      blurHeight: PropTypes.number,
      blurWidth: PropTypes.number,
      height: PropTypes.number,
      src: PropTypes.string,
      width: PropTypes.number,
    }),
  ).isRequired,
  Styles: PropTypes.shape({
    firstImg: PropTypes.string,
    imgSlider: PropTypes.string,
    animationFrame: PropTypes.string,
    active: PropTypes.string,
    notActive: PropTypes.string,
  }).isRequired,
};
