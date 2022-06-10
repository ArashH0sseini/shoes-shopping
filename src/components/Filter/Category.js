/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Checkbox, Collapse, FormControlLabel, Typography } from '@mui/material'
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
          <Typography>دسته بندی ها</Typography>
        </div>
        <div className="flex flex-col bg-[#26394391]">
          <FormControlLabel
            className="mr-0"
            control={<Checkbox name="checkedB" color="primary" />}
            label="پاشنه بلند"
          />
          <FormControlLabel
            className="mr-0"
            control={<Checkbox name="checkedB" color="primary" />}
            label="اسپورت"
          />
          <FormControlLabel
            className="mr-0"
            control={<Checkbox name="checkedB" color="primary" />}
            label="مجلسی"
          />
        </div>
      </Collapse>
    </div>
  )
}
