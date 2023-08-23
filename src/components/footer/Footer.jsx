import React from 'react';
import PropTypes from 'prop-types';
import nameLogo from '../logo/logo';
import styles from './Footer.module.scss';

const Footer = ({ bgColor, textColor }) => {
  const Foter = () => new Date().getFullYear();
  return (
    <div className={styles.footer_overall_main}>
      <div
        className={styles.footer_container}
        style={{ backgroundColor: bgColor }}
      >
        <div className={styles.container}>
          <div className={styles.footer_inner_container}>
            <div className={`col-lg-3 col-sm-6  ${styles.contain}`}>
              <ul className={styles.head} style={{ color: textColor }}>
                About Us
                <li className={styles.text}>Privacy Policy</li>
                <li className={styles.text}> Terms of use</li>
                <li className={styles.text}> Blogs </li>
              </ul>
            </div>
            <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
              <ul className={styles.head} style={{ color: textColor }}>
                Our Services
                <li className={styles.text}>Resume</li>
                <li className={styles.text}> Cover Letter </li>
                <li className={styles.text}> Portfolio </li>
                <li className={styles.text}> Job Posting </li>
              </ul>
            </div>
            <div
              className={`col-lg-3 col-sm-6 ${styles.contain}`}
              style={{ color: textColor }}
            >
              <ul className={styles.head} style={{ color: textColor }}>
                Contact Us
                <li className={styles.text}> Email </li>
                <li className={styles.text}> Twitter </li>
                <li className={styles.text}> Instagram </li>
                <li className={styles.text}> LinkedIn </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.bottom}
        style={{ color: textColor, backGround: '#E9F2F8' }}
      >
        <div className={styles.firstSpan}>
          <span>Privacypolicy</span>
          &nbsp;
          <span id={styles.footer_or}>|</span>
          &nbsp;
          <span>Terms of use</span>
        </div>
        <div className={styles.secondSpan}>
          <div className={styles.logo} style={{ color: textColor }}>
            J
            {nameLogo}
            bhunters
          </div>
        </div>
        <div className={styles.thirdSpan}>
          <span>
            Copyright©
            {Foter()}
            &nbsp;
          </span>
          &nbsp;
          <span id={styles.footer_or}>|</span>
          &nbsp;
          <span>info@jobhuntters.com</span>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default Footer;
