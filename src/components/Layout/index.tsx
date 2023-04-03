import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import MobileNav from './MobileNav'

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <MobileNav />
      {children}
      <Footer />
    </>
  )
}

export default Layout