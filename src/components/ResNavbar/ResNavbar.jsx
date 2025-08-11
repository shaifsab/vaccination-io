/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import style from './ResNavbar.module.css'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { MdCancel } from "react-icons/md";



const ResNavbar = () => {

    // state 
    const [show, setShow] = useState(false)
  return (
    <nav className={`${style.ResNavPage}`}>
    <div className="container">
        <div className={`${style.menuRow}`}>
          <div className={`${style.menuLogo}`}><img src={Logo} alt="logo" /></div>
          {/* menu portion */}
          <div className={`${style.sideMenu}`}>
            <HiMiniBars3BottomRight onClick={()=> setShow(!show)} className={`${style.menuIcon}`} />
          </div>
          <div className={`${style.menuItems} ${show ? style.show : style.hide}`}>
            <MdCancel onClick={()=> setShow(!show)} className={`${style.cancelIcon}`} />
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/schedule">Schedule</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        
        </div>
    </div>
  </nav>
  )
}

export default ResNavbar
