/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react'
import ShoppingBag from '@mui/icons-material/ShoppingBag'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import Fade from '@mui/material/Fade'
import CartItem from './CartItem'
import Product from '../../../assets/images/p1.jpg'
import Product2 from '../../../assets/images/p2.jpg'
import useOnClickOutside from '../../Hook/useOnClickOutside'

export default function CartButton() {
  const [open, setOpen] = useState(false)
  const cart = useRef()
  useOnClickOutside(cart, () => setOpen(false))
  return (
    <div
      className="flex mx-2 items-center justify-center rounded-lg p-2 border-[1px] border-[#202d2a] border-solid relative z-10"
      ref={cart}
    >
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer transition-all delay-[5ms] lg:hover:opacity-70"
      >
        <ShoppingBag className="text-4xl" color="primary" />
        <div className="w-4 h-4 bg-orange-600 flex justify-center items-center rounded-full absolute top-2 right-2">
          <Typography variant="subtitle2" className="text-xs">
            2
          </Typography>
        </div>
      </div>
      <Fade in={open}>
        <div className="absolute top-[67px] left-0 border-[1px] border-[#202d2a] border-solid bg-[#011A1D] rounded-lg w-64 p-4">
          <CartItem image={Product} />
          <CartItem image={Product2} />
          <div className="flex justify-between">
            <Typography variant="subtitle2" className="text-center p-2">
              مجموع خرید:
            </Typography>
            <Typography variant="subtitle2" className="text-center p-2">
              540,000
            </Typography>
          </div>
          <Button variant="contained" color="secondary" size="large" fullWidth>
            مشاهده سبد خرید
          </Button>
        </div>
      </Fade>
    </div>
  )
}
