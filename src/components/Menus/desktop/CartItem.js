import React from 'react'
import Typography from '@mui/material/Typography'
import Delete from '@mui/icons-material/Delete'

export default function CartItem({ image }) {
  return (
    <div className="flex justify-evenly items-center py-2 mb-[10px] border-[1px] border-[#202d2a] border-solid rounded-md">
      <img
        src={image}
        alt="product"
        className="rounded-full w-11 h-11 ring-2 ring-[#00c1c9] p-1 cursor-pointer"
      />
      <div>
        <Typography variant="subtitle2" className="cursor-pointer">
          کفش زنانه پاشنه بلند
        </Typography>
        <Typography variant="caption" className=" cursor-default">
          260,000
        </Typography>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Typography className="bg-orange-600 rounded-full w-[14px] h-[14px] flex justify-center items-center text-center text-xs cursor-default">
          1
        </Typography>
        <Delete className="text-xl" />
      </div>
    </div>
  )
}
