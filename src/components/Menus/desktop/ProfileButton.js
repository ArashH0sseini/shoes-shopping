import React from 'react'
import ArrowDropDown from '@mui/icons-material/ArrowDropDown'
import Avarar from '../../../assets/images/avatar.jpg'

export default function ProfileButton() {
  return (
    <div className="flex items-center justify-center rounded-lg p-2 border-[1px] border-[#202d2a] border-solid w-[90px] h-full cursor-pointer transition-all delay-[5ms] hover:opacity-70">
      <ArrowDropDown className="text-4xl text-[#00c1c9]" />
      <img
        src={Avarar}
        alt="avatar"
        className="rounded-full w-9 ring-2 ring-[#00c1c9] p-1"
      />
    </div>
  )
}
