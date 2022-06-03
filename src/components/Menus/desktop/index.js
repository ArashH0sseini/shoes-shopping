import { Button } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import brandLogo from '../../../assets/images/brandLogo.png'
import CartButton from './CartButton'
import ProfileButton from './ProfileButton'

export default function Desktop() {
  const location = useLocation()
  const path = location.pathname
  return (
    <div className="w-full p-[10px] flex flex-row items-center">
      <div className="w-[200px]">
        <img src={brandLogo} alt="فروشگاه کفش" className="w-1/2 h-1/3 m-auto" />
      </div>
      <div className="flex flex-1 items-center">
        <div
          className={
            path === '/'
              ? 'border-b-[#00c1c9] border-b-2 border-b-solid rounded-lg'
              : null
          }
        >
          <Button
            component={Link}
            to="/"
            className={path === '/' ? 'text-white' : 'text-gray-400'}
          >
            صفحه اصلی
          </Button>
        </div>
        <div
          className={
            path === '/products'
              ? 'border-b-[#00c1c9] border-b-2 border-b-solid rounded-lg'
              : null
          }
        >
          <Button
            component={Link}
            to="/products"
            className={path === '/products' ? 'text-white' : 'text-gray-400'}
          >
            محصولات
          </Button>
        </div>
        <div
          className={
            path === '/faq'
              ? 'border-b-[#00c1c9] border-b-2 border-b-solid rounded-lg'
              : null
          }
        >
          <Button
            component={Link}
            to="/faq"
            className={path === '/faq' ? 'text-white' : 'text-gray-400'}
          >
            سوالات پر تکرار
          </Button>
        </div>
        <div
          className={
            path === '/blog'
              ? 'border-b-[#00c1c9] border-b-2 border-b-solid rounded-lg'
              : null
          }
        >
          <Button
            component={Link}
            to="/blog"
            className={path === '/blog' ? 'text-white' : 'text-gray-400'}
          >
            بلاگ
          </Button>
        </div>
        <div
          className={
            path === '/contact'
              ? 'border-b-[#00c1c9] border-b-2 border-b-solid rounded-lg'
              : null
          }
        >
          <Button
            component={Link}
            to="/contact"
            className={path === '/contact' ? 'text-white' : 'text-gray-400'}
          >
            تماس با ما
          </Button>
        </div>
      </div>
      <div className="h-full pl-10 flex items-center justify-around">
        <ProfileButton />
        <CartButton />
      </div>
    </div>
  )
}
