import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ResNavbar from '../components/ResNavbar'

const LayoutOne = () => {
  return (
    <>
      <Navbar/>
      <ResNavbar/>
      <Outlet/>
    </>
  )
}

export default LayoutOne
