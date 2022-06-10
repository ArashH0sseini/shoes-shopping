/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Hidden, Typography } from '@mui/material'
import React from 'react'
import FilterIcon from '@mui/icons-material/Tune'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

export default function Title({ title, onClick, open }) {
  return (
    // eslint-disable-next-line prettier/prettier
    <div
      className="w-full h-10 border-b-2 border-b-solid border-b-[#393c41] flex items-center"
      onClick={onClick}
    >
      <FilterIcon className="ml-3" />
      <Typography variant="h5" className="flex-1">
        {title}
      </Typography>
      <Hidden smUp>
        {open ? (
          <ExpandLessIcon fontSize="large" />
        ) : (
          <ExpandMoreIcon fontSize="large" />
        )}
      </Hidden>
    </div>
  )
}
