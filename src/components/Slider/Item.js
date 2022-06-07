import { Button, Typography } from '@mui/material'
import React from 'react'

export default function Item({ item }) {
  return (
    <div className="relative h-[320px] w-full bg-[#011a1d] border-solid border-[1px] border-[#6e7f9daa] flex justify-center items-center">
      <div className="w-64">
        <img src={item.image} alt={item.title} className="w-52" />
      </div>
      <div className="flex-1">
        <Typography variant="h4">{item.title}</Typography>
        <Typography variant="subtitle2" className="mt-4">
          {item.subtitle}
        </Typography>
        <Typography variant="body2" className="mt-4">
          {item.price}
        </Typography>
      </div>
      <div>
        <Typography
          variant="subtitle2"
          className="absolute top-0 right-0 bg-[#811c6b] p-3 w-28 rounded-bl-full"
        >
          {item.discount}% تخفیف
        </Typography>
      </div>
      <div className="absolute bottom-0 left-0 p-3">
        <Button variant="outlined">مشاهده جزئیات</Button>
      </div>
    </div>
  )
}
