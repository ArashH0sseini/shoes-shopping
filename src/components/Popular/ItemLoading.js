import { Skeleton } from '@mui/material'
import React from 'react'

export default function Item() {
  return (
    <div className="relative w-[230px] h-[270px] bg-[#131a21] border-[1px] border-[#3d495caa] border-solid rounded-md flex flex-col items-center cursor-pointer">
      <Skeleton
        variant="circular"
        width={40}
        height={40}
        className="absolute top-2 left-2"
      />
      <Skeleton
        variant="rectangular"
        width={200}
        height={100}
        className="mt-14 rounded-[10px]"
      />
      <Skeleton variant="text" className="w-[70%] mt-2" />
      <Skeleton variant="text" className="w-[90%] mt-1" />
      <Skeleton variant="text" className="w-[70%] mt-1" />
      {/* <img
        src={P1}
        alt=""
        className="w-[70%] mt-4 transition delay-75 hover:scale-125 hover:transition hover:delay-70"
      />
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
      </div> */}
    </div>
  )
}
