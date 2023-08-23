import BrandButton from 'components/button/BrandButton';
import Image from 'next/image';
import Footer from '../footer/Footer';
import Navbar from '../navbar/NavbarMain';
import dashboardIcon from '../../../public/svgs/dashboard-icon.svg';
import styles from '../navbar/NavbarMain.module.scss';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <Navbar
        tools="Tools"
        ourServices="Our Services"
        careers="Careers"
        button={
          (
            <BrandButton
              icon={
                (
                  <Image
                    src={dashboardIcon}
                    height={22.5}
                    width={22.5}
                    alt="dasboard icon"
                    className={styles.farc}
                  />
                )
              }
              type="button"
              text="Dashboard"
              styles={styles.buttonB}
            />
          )
        }
        button2={
          (
            <BrandButton
              type="submit"
              text="Get Started"
              styles={styles.buttonC}
            />
          )
        }
      />
      {children}
      <Footer bgColor="#E9F2F8" textColor="#00235b" />
    </>
  );
}

export default Layout;
