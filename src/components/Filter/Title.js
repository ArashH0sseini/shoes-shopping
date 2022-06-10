import { Typography } from '@mui/material'
import React from 'react'
import FilterIcon from '@mui/icons-material/Tune'

export default function Title({ title }) {
  return (
    <div className="w-full h-10 border-b-2 border-b-solid border-b-[#393c41] flex items-center">
      <FilterIcon className="ml-3" />
      <Typography variant="h5">{title}</Typography>
    </div>
  )
}
