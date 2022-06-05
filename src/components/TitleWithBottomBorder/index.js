import { Typography } from '@mui/material'
import React from 'react'

export default function Index({ title }) {
  return (
    <div className="mb-2 pb-5 relative w-full after:absolute after:w-20 after:h-1 after:bottom-0 after:rounded-sm after:bg-[#00c1c9] before:absolute before:w-32 before:h-1 before:bottom-0 before:rounded-sm before:bg-[#bffcff]">
      <Typography>{title}</Typography>
    </div>
  )
}
