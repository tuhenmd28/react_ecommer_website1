import React from 'react'
import Footer from './Footer'
import Navber from './Navber'
import {Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
        <Navber/>
        <Outlet />
        <Footer/>
    </>
  )
}

export default Layout