/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Button, Collapse, Typography } from '@mui/material'
import React, { useState } from 'react'
import PriceInput from './PriceInput'

export default function Category() {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex flex-col mt-3 pb-3 border-b-[1px] border-b-solid border-b-[#393c41]">
      <Collapse in={open} collapsedSize={56}>
        <div
          className="bg-[#263943] p-4 cursor-pointer rounded-tr-sm rounded-tl-sm"
          onClick={() => setOpen(!open)}
        >
          <Typography>اعمال محدود قیمت</Typography>
        </div>
        <div className="flex flex-col bg-[#26394391] p-3">
          <PriceInput placeholder="حداقل قیمت" />
          <PriceInput placeholder="حداکثر قیمت" />
          <Button variant="outlined">اعمال قیمت</Button>
        </div>
      </Collapse>
    </div>
  )
}
