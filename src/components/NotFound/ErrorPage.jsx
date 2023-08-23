import React from 'react';
import Image from 'next/image';
import { useNavigation } from 'hooks/index';
import { BrandButton } from 'components/index';
import ErrorImage from '../../../public/svgs/Error-404.svg';
import Styles from '../../styles/404.module.scss';

const ErrorPage = () => {
  const { navigate } = useNavigation();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <div className={Styles.error_main}>
      <div>
        <Image src={ErrorImage} alt="404" />
        <h2>Oops! 404-PAGE NOT FOUND</h2>
        <p>
          The page you are looking for might
          have been removed or name changed or it is temporarily unavailable.
        </p>
        <BrandButton type="submit" text="Go to Homepage" click={handleNavigate} />
      </div>
    </div>
  );
};

export default ErrorPage;
