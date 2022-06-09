import { Skeleton } from '@mui/material'
import React from 'react'

export default function Item() {
  return (
    <div className="relative m-1 p-5 sm:m-0 sm:p-0 w-[230px] h-[270px] bg-[#131a21] border-[1px] border-[#3d495caa] border-solid rounded-md flex flex-col items-center cursor-pointer">
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
    </div>
  )
}
