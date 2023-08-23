import Image from 'next/image';
import styles from './logo.module.scss';
import logo from '../../../public/images/logo.png';

export const name = (
  <div className={styles.logo_cont}>
    <div className={styles.logo_child}>
      <Image priority src={logo} height={15} width={15} alt="logo" />
    </div>
  </div>
);

export default name;
