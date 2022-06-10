/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Typography } from '@mui/material'
import React, { useState } from 'react'

export default function BrandItem({ title }) {
  const [active, setActive] = useState(false)
  return (
    <div
      onClick={() => setActive(!active)}
      className={
        active
          ? 'p-3 m-1 cursor-pointer rounded-md bg-[#263943] border-2 border-solid border-[#263943]'
          : 'p-3 m-1 cursor-pointer rounded-md bg-transparent border-2 border-solid border-[#263943]'
      }
    >
      <Typography variant="body2">{title}</Typography>
    </div>
  )
}
