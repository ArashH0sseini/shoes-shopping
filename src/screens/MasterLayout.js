import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Hidden } from '@mui/material'
import DesktopMenu from '../components/Menus/desktop'
import MobileMenu from '../components/Menus/mobile'
import Footer from '../components/Footer'
import LoginModals from '../components/LoginModals'

export default function MasterLayout() {
  return (
    <BrowserRouter>
      <div className="w-full min-h-screen">
        <Hidden smDown>
          <DesktopMenu />
        </Hidden>
        <Hidden smUp>
          <MobileMenu />
        </Hidden>
        <Footer />
      </div>
      <LoginModals />
    </BrowserRouter>
  )
}
