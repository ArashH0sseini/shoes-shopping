/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  Checkbox,
  Collapse,
  FormControlLabel,
  Typography,
  Button
} from '@mui/material'
import React, { useState } from 'react'

export default function Size() {
  const [open, setOpen] = useState(false)
  const [sizes, setSizes] = useState([
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    '+45'
  ])
  return (
    <div className="flex flex-col mt-3 pb-3">
      <Collapse in={open} collapsedSize={56}>
        <div
          className="bg-[#263943] p-4 cursor-pointer rounded-tr-sm rounded-tl-sm"
          onClick={() => setOpen(!open)}
        >
          <Typography>انتخاب سایز</Typography>
        </div>
        <div className="flex flex-row flex-wrap bg-[#26394391] justify-center items-center">
          {sizes.map((s) => (
            <FormControlLabel
              className="m-0 p-2"
              control={
                <Checkbox name="checkedB" color="primary" className="p-0 m-0" />
              }
              label={s}
            />
          ))}
        </div>
        <div className="flex justify-center items-center bg-[#26394391]">
          <Button variant="outlined" className="m-2">
            اعمال فیلتر
          </Button>
          <Button className="m-2">
            <Typography variant="body2" className="p-1">
              همه رنگ ها
            </Typography>
          </Button>
        </div>
      </Collapse>
    </div>
  )
}
