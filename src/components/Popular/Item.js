import { Typography } from '@mui/material'
import React from 'react'

export default function Item({ image }) {
  return (
    <div className="relative m-1 p-5 sm:m-0 sm:p-0 w-[230px] h-[270px] bg-[#131a21] border-[1px] border-[#3d495caa] border-solid rounded-md flex flex-col items-center cursor-pointer">
      <div className="w-[230px] flex justify-center items-center">
        <img
          src={image}
          alt=""
          className="w-[150px] sm:w-[70%] mt-4 transition delay-75 hover:scale-125 hover:transition hover:delay-70"
        />
      </div>
      <Typography variant="h5" className="mt-4">
        کفش اول
      </Typography>
      <Typography variant="body2" className="mt-2 text-[#00c1c9]">
        زیر عنوان کفش است
      </Typography>
      <Typography variant="body2" className="mt-2 text-[#00c1c9]">
        70,000 تومان
      </Typography>
      <div>
        <Typography
          variant="body2"
          className="absolute top-2 left-2 w-9 h-9 flex justify-center items-center bg-[#811C6B] rounded-full"
        >
          4.9
        </Typography>
      </div>
    </div>
  )
}
