import React from 'react'
import ShoppingBag from '@mui/icons-material/ShoppingBag'
import Typography from '@mui/material/Typography'

export default function CartButton() {
  return (
    <div className="flex mx-2 items-center justify-center rounded-lg p-2 border-[1px] border-[#202d2a] border-solid h-full cursor-pointer transition-all delay-[5ms] hover:opacity-70 relative">
      <ShoppingBag className="text-4xl text-[#00c1c9]" />
      <div className="w-4 h-4 bg-orange-600 flex justify-center items-center rounded-full absolute top-2 right-2">
        <Typography variant="subtitle2" className="text-xs">
          2
        </Typography>
      </div>
    </div>
  )
}
