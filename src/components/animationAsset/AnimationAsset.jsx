import React from 'react';
import Image from 'next/image';
import animationImage from '../../../public/images/animation2.png';
import girlmerged from '../../../public/images/girlmerged.png';
import styles from './AnimationAsset.module.scss';

const firstLeftDiv = (
  <div
    className={styles.get_ready_left}
  >
    <h1>
      Let&apos;s get your Job
      <span>Ready</span>
    </h1>
    <p>
      Getting you Equip for the journey, allow us take out the stress of resume
      and cover letter writing.
    </p>
  </div>
);

const secondLeftDiv = (
  <div className={styles.get_ready_left} id={styles.get_ready_left}>
    <h1>
      Do you stress over having a coherent
      <br />
      <span>CV, cover letter, and Portfolio?</span>
    </h1>
    <p>
      Allow our AI generator to ease your concerns by generating a unique
      resume, cover letter, and portfolio for you in a matter of seconds while
      also removing redundancy from your text.
    </p>
  </div>
);

const firstRightDiv = (
  <div className={styles.first_right_image}>
    <Image
      priority
      src={girlmerged}
      height={382}
      width={382}
      alt="girl picture"
    />
  </div>
);

const secondRightDiv = (
  <div className={styles.second_right_image}>
    <Image
      priority
      src={animationImage}
      height={582}
      width={882}
      alt={animationImage}
    />
  </div>
);

export {
  firstLeftDiv, secondLeftDiv, firstRightDiv, secondRightDiv,
};
