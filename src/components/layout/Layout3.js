import BrandButton from 'components/button/BrandButton';
import Image from 'next/image';
import Navbar from '../navbar/NavbarMain';
import dashboardIcon from '../../../public/svgs/dashboard-icon.svg';
import squareArrow from '../../../public/svgs/square-arrow.svg';
import style from '../payments/paymentMethod/PaymentMethod.module.scss';

// eslint-disable-next-line react/prop-types
function Layout3({ children }) {
  return (
    <>
      <Navbar
        Style={style.payment_navbar_cont}
        homepage="Homepage"
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
                    className={style.paymentBtn}
                  />
                )
              }
              type="button"
              text="Dashboard"
              styles={style.payment_buttonB}
            />
          )
        }
        button2={
          (
            <BrandButton
              icon={
                (
                  <Image
                    src={squareArrow}
                    height={25}
                    width={20}
                    alt="dasboard icon"
                    className={style.paymentBtnImage}
                  />
            )
              }
              type="submit"
              styles={style.payment_buttonC}
            />
  )
        }
      />
      {children}
    </>
  );
}

export default Layout3;
