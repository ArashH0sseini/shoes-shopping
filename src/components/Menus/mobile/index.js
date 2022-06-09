/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import MenuButton from '@mui/icons-material/ClearAll'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import brandLogoMobile from '../../../assets/images/brandLogoMobile.png'
import CartButton from '../desktop/CartButton'
import MenuItems from './MenuItems'

export default function Mobile() {
  const [open, setOpen] = useState(false)
  const toggleOpenMenu = () => {
    setOpen(!open)
  }
  return (
    <div className="w-full h-20 p-[5px] flex flex-row items-stretch bg-[#131a21] shadow-custom">
      <div className="flex justify-center items-center p-2">
        <div
          onClick={toggleOpenMenu}
          className="border-[1px] border-[#202d2a] border-solid rounded-lg w-full h-full"
        >
          <MenuButton className="text-5xl" color="primary" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={brandLogoMobile} alt="logo" className="w-3/4 sm:w-1/2" />
      </div>
      <div className="flex justify-center items-center">
        <CartButton />
      </div>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={toggleOpenMenu}
        onClose={toggleOpenMenu}
      >
        <MenuItems />
      </SwipeableDrawer>
    </div>
  )
}
