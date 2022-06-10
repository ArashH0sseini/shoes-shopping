/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  Radio,
  Collapse,
  FormControlLabel,
  Typography,
  RadioGroup
} from '@mui/material'
import React, { useState } from 'react'

export default function Category() {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex flex-col mt-3 pb-3 border-b-[1px] border-b-solid border-b-[#393c41]">
      <Collapse in={open} collapsedSize={56}>
        <div
          className="bg-[#263943] p-4 cursor-pointer rounded-tr-sm rounded-tl-sm"
          onClick={() => setOpen(!open)}
        >
          <Typography>مرتب سازی براساس</Typography>
        </div>
        <div className="flex flex-col bg-[#26394391]">
          <RadioGroup>
            <FormControlLabel
              value="0"
              className="mr-0"
              control={<Radio name="checkedB" color="primary" />}
              label="مجبوب ترین ها"
            />
            <FormControlLabel
              value="1"
              className="mr-0"
              control={<Radio name="checkedB" color="primary" />}
              label="ارزان ترین ها"
            />
            <FormControlLabel
              value="2"
              className="mr-0"
              control={<Radio name="checkedB" color="primary" />}
              label="گران ترین ها"
            />
          </RadioGroup>
        </div>
      </Collapse>
    </div>
  )
}
