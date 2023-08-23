import React from 'react';
import Link from 'next/link';
import { useNavigation } from 'hooks/index';
import nameLogo from '../logo/logo';
import Styles from './ComingSoon.module.scss';

const MiniNav = () => {
  const { router } = useNavigation();
  return (
    <div className={Styles.comingSoonNav}>
      <h1>
        J
        {nameLogo}
        bhunters
      </h1>
      <Link href="/">
        {router.pathname === '/coming-soon' && 'Back to Home Page' }
        {router.pathname === '/404' && ''}
      </Link>
    </div>
  );
};

export default MiniNav;
