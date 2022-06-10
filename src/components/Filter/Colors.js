/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Button, Collapse, Typography } from '@mui/material'
import React, { useState } from 'react'
import ColorsItem from './ColorsItem'

export default function Colors() {
  const [open, setOpen] = useState(false)
  const data = [
    { id: 0, color: '#1976D2' },
    { id: 1, color: '#FF8A65' },
    { id: 2, color: '#7CB342' },
    { id: 3, color: '#0277BD' },
    { id: 4, color: '#5E35B1' },
    { id: 5, color: '#BA68C8' },
    { id: 6, color: '#76FF03' },
    { id: 7, color: '#FFF59D' },
    { id: 8, color: '#FF6F00' },
    { id: 9, color: '#3E2723' },
    { id: 10, color: '#37474F' },
    { id: 11, color: '#4A148C' },
    { id: 12, color: '#006064' },
    { id: 13, color: '#FFEB3B' },
    { id: 14, color: '#009688' }
  ]
  return (
    <div className="flex flex-col mt-3 pb-3 border-b-[1px] border-b-solid border-b-[#393c41]">
      <Collapse in={open} collapsedSize={56}>
        <div
          className="bg-[#263943] p-4 cursor-pointer rounded-tr-sm rounded-tl-sm"
          onClick={() => setOpen(!open)}
        >
          <Typography>فیلتر براساس رنگ</Typography>
        </div>
        <div className="flex flex-row flex-wrap bg-[#26394391] justify-center items-center py-4">
          {data.map((item) => (
            <ColorsItem key={item.id} color={item.color} />
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
