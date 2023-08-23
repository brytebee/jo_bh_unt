import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import PropsTypes from 'prop-types';
import Link from 'next/link';
import styles from './NavbarMain.module.scss';
import nameLogo from '../logo/logo';

const NavbarMain = (props) => {
  const {
    homepage, tools, ourServices, careers, Style, button, button2,
  } = props;

  const [isHoveredResume, setIsHoveredResume] = useState(false);
  const [isHoveredCover, setIsHoveredCover] = useState(false);
  const [isHoveredPort, setIsHoveredPort] = useState(false);

  const handleMouseEnterResume = () => {
    setIsHoveredResume(true);
    setIsHoveredCover(false);
    setIsHoveredPort(false);
  };

  const handleMouseLeaveResume = () => {
    setIsHoveredResume(false);
  };
  const handleMouseEnterCover = () => {
    setIsHoveredCover(true);
    setIsHoveredResume(false);
    setIsHoveredPort(false);
  };

  const handleMouseLeaveCover = () => {
    setIsHoveredCover(false);
  };
  const handleMouseEnterPort = () => {
    setIsHoveredCover(false);
    setIsHoveredResume(false);
    setIsHoveredPort(true);
  };

  const handleMouseLeavePort = () => {
    setIsHoveredPort(false);
  };

  return (
    <>
      {['lg'].map((expand) => (
        <Navbar
          key={expand}
          className={styles.nav_main}
          expand={expand}
          collapseOnSelect
          bg="light"
          variant="light"
        >
          <Container className={styles.navbar_cont}>
            <Navbar.Brand className={styles.logo} href="/">
              J
              {nameLogo}
              bhunters
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ fontSize: '20px', fontWeight: 'bold' }}
            >
              <Navbar.Collapse id="responsive-navbar-nav">
                <Offcanvas.Header
                  closeButton
                  style={{ fontSize: '20px', fontWeight: 'bold' }}
                >
                  <Offcanvas.Title
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                    style={{ fontSize: '20px', fontWeight: 'bold' }}
                    className={styles.mobile_logo}
                  >
                    J
                    {nameLogo}
                    bhunters
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav
                    className={`${styles.menu_nav_cont} ${Style}`}
                  >
                    <Navbar.Brand className={styles.homepage} href="/">
                      {homepage}
                    </Navbar.Brand>
                    <NavDropdown
                      title={tools}
                      className={styles.dropdown_container}
                      id="navbarScrollingDropdown"
                    >
                      <NavDropdown.Item
                        href="#action3"
                        className={styles.dropdown_item_container1}
                      >
                        Resume
                        <div onMouseEnter={handleMouseEnterResume}>
                          {isHoveredResume ? (
                            ''
                          ) : (
                            <FontAwesomeIcon
                              icon={faCaretRight}
                              size="sm"
                              className={styles.dropdown_icon}
                            />
                          )}
                        </div>
                        <ul
                          className={
                            !isHoveredResume
                              ? styles.dropdown_off
                              : styles.dropdown_on
                          }
                          id={styles.drop_menu}
                          onMouseLeave={handleMouseLeaveResume}
                        >
                          <li>
                            <Link
                              href="/addproduct"
                              style={{ textDecoration: 'none' }}
                            >
                              Use Template
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/products"
                              style={{ textDecoration: 'none' }}
                            >
                              Create Resume
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/products"
                              style={{ textDecoration: 'none' }}
                            >
                              Create Resume with AI generator
                            </Link>
                          </li>
                        </ul>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        href="#action3"
                        className={styles.dropdown_item_container1}
                      >
                        Cover letter
                        <div onMouseEnter={handleMouseEnterCover}>
                          {isHoveredCover ? (
                            ''
                          ) : (
                            <FontAwesomeIcon
                              icon={faCaretRight}
                              size="sm"
                              className={styles.dropdown_icon}
                            />
                          )}
                        </div>
                        <ul
                          className={
                            !isHoveredCover
                              ? styles.dropdown_off
                              : styles.dropdown_on
                          }
                          id={styles.drop_menu}
                          style={{ marginLeft: '165px' }}
                          onMouseLeave={handleMouseLeaveCover}
                        >
                          <li>
                            <Link
                              href="/addproduct"
                              style={{ textDecoration: 'none' }}
                            >
                              Use Template
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/products"
                              style={{ textDecoration: 'none' }}
                            >
                              Create Cover letter
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/products"
                              style={{ textDecoration: 'none' }}
                            >
                              Create Cover Letter with AI generator
                            </Link>
                          </li>
                        </ul>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        href="#action4"
                        className={styles.dropdown_item_container1}
                      >
                        Portfolio
                        <div onMouseEnter={handleMouseEnterPort}>
                          {isHoveredPort ? (
                            ''
                          ) : (
                            <FontAwesomeIcon
                              icon={faCaretRight}
                              size="sm"
                              className={styles.dropdown_icon}
                            />
                          )}
                        </div>
                        <ul
                          className={
                            !isHoveredPort
                              ? styles.dropdown_off
                              : styles.dropdown_on
                          }
                          id={styles.drop_menu}
                          style={{ marginLeft: '185px' }}
                          onMouseLeave={handleMouseLeavePort}
                        >
                          <li>
                            <Link
                              href="/addproduct"
                              style={{ textDecoration: 'none' }}
                            >
                              Use Template
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/products"
                              style={{ textDecoration: 'none' }}
                            >
                              Create Portfolio
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/products"
                              style={{ textDecoration: 'none' }}
                            >
                              Create Portfolio with AI generator
                            </Link>
                          </li>
                        </ul>
                      </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                      title={ourServices}
                      className={styles.dropdown_container}
                      id="navbarScrollingDropdown"
                    >
                      <NavDropdown.Item
                        href="#action3"
                        className={styles.dropdown_item_container}
                      >
                        About Us
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        href="#action3"
                        className={styles.dropdown_item_container}
                      >
                        Scan Resume
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        href="#action4"
                        className={styles.dropdown_item_container}
                      >
                        Match Score Resume
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        href="#action5"
                        className={styles.dropdown_item_container}
                      >
                        Scan Cover letter
                      </NavDropdown.Item>
                    </NavDropdown>

                    <Navbar.Brand className={styles.homepage} href="/">
                      {careers}
                    </Navbar.Brand>
                    <Nav.Link
                      href="/"
                      id="navbarScrollingDropdown"
                      className={styles.dropdown_container}
                    />
                    <div className={`${styles.button_cont} ${Style}`}>
                      <Link href="/dashboard">
                        {button}
                      </Link>
                      <Link href="/coming-soon">
                        {button2}
                      </Link>
                    </div>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Collapse>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

NavbarMain.propTypes = {
  homepage: PropsTypes.string.isRequired,
  tools: PropsTypes.string.isRequired,
  ourServices: PropsTypes.string.isRequired,
  careers: PropsTypes.string.isRequired,
  Style: PropsTypes.string.isRequired,
  button: PropsTypes.element.isRequired,
  button2: PropsTypes.element.isRequired,
};

export default NavbarMain;
