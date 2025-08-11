import React from 'react';
import style from './Footer.module.css';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import social from '../../assets/images/social.png';

const Footer = () => {
  return (
    <>
      <section className={`${style.footerPage}`}>
        <div className="container">
          <div className={`${style.menuRow}`}>
            {/* Left side: Logo */}
            <div className={`${style.menuLogo}`}>
              <img src={Logo} alt="logo" />
            </div>

            {/* Menu Items */}
            <div className={`${style.menuItems}`}>
              <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/'}>Services</Link></li>
                <li><Link to={'/'}>Schedule</Link></li>
                <li><Link to={'/'}>Contact us</Link></li>
              </ul>
            </div>

            {/* Social Icon */}
            <div className={`${style.images}`}>
              <Link to={'/'}> <img src={social} alt="social" /> </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
