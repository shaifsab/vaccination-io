/* eslint-disable no-unused-vars */
import React from 'react'
import style from './Navbar.module.css'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={`${style.navPage}`}>
      <div className="container">
          <div className={`${style.menuRow}`}>

            <div className={`${style.menuLogo}`}><img src={Logo} alt="logo" /></div>
            {/* menu portion */}
            <div className={`${style.menuItems}`}>
              <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/'}>Services</Link></li>
                <li><Link to={'/'}>Schedule</Link></li>
                <li><Link to={'/'}>Contact us</Link></li>
              </ul>
            </div>
            <div className={`${style.menuButton }`}><Link to={'/'}>Check Status</Link></div>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
