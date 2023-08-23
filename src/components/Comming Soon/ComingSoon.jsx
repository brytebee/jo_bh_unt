import React from 'react';
import Image from 'next/image';
import propTypes from 'prop-types';
import GroupPhone from '../../../public/svgs/group-iphones.svg';
import Styles from './ComingSoon.module.scss';
import ComingSoonImg from '../../../public/svgs/coming-soon-new.svg';
import ResumeLadyInSuitImg from '../../../public/svgs/resume-templates.svg';
import ArrowSvg from '../../../public/svgs/curly-design.svg';
import StudentImg from '../../../public/svgs/schoolboy.svg';
import WorkingManImg from '../../../public/svgs/working-man.svg';
import ComingSoonForm from './ComingSoonForm';
import MobilePhones from '../../../public/svgs/grouped-phones.svg';
import { useMediaQuery } from '../../hooks';
import CustomImageSlider from '../imageSlider/CustomImageSlider';

const ComingSoon = ({ handleSubmit, handleChange, value }) => {
  const images = [ComingSoonImg, StudentImg, WorkingManImg, ResumeLadyInSuitImg];
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="md:container md:mx-auto py-4 px-8">
      <h1 className={`${Styles.header} text-center p-4 font-bold my-10 md:my-2`}>
        <span className={Styles.blue}>Our</span>
        {' '}
        Website is Launching
        {' '}
        <span className={Styles.blue}>Soon.</span>
      </h1>
      <div className={`${Styles.imgContainer} flex justify-between px-8 w-full mx-auto`}>
        {isMobile ? (
          <>
            <Image
              src={MobilePhones}
              alt="Group of phones"
              width={330.99}
              height={338}
              className="relative"
            />
            <div>
              <p className={`${Styles.launch} my-10`}>
                Get notified when we launch
                <Image
                  src={ArrowSvg}
                  alt="Arrow"
                  width={20}
                  height={20}
                  className="w-auto h-auto"
                />
              </p>
              <ComingSoonForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                value={value}
                Styles={Styles}
              />
            </div>
          </>
        ) : (
          <>
            <Image
              src={GroupPhone}
              alt="Group of phones"
              width={500}
              height={392}
            />
          </>
        )}
        <CustomImageSlider images={images} Styles={Styles} />
      </div>
      {!isMobile && (
        <div>
          <p className={`${Styles.launch} my-10`}>
            Get notified when we launch
            <Image
              src={ArrowSvg}
              alt="Arrow"
              width={20}
              height={20}
              className="w-auto h-auto"
            />
          </p>
          <ComingSoonForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            value={value}
            Styles={Styles}
          />
        </div>
      )}
    </div>
  );
};

export default ComingSoon;

ComingSoon.propTypes = {
  handleSubmit: propTypes.func.isRequired,
  handleChange: propTypes.func.isRequired,
  value: propTypes.shape({
    name: propTypes.string.isRequired,
    email: propTypes.string.isRequired,
  }).isRequired,
};
