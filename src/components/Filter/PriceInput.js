/* eslint-disable prefer-template */
import { Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'

export default function PriceInput({ placeholder }) {
  const [value, setValue] = useState('')
  const [valueText, setValueText] = useState('')
  const getPriceText = (val) => {
    let result = ''
    let j = 0
    for (let i = val.length; i > 0; i -= 1) {
      if (j === 3) {
        result = ',' + result
        j = 0
      }
      result = val[i - 1] + result
      j += 1
    }
    return result
  }
  useEffect(() => {
    setValueText(`${value}`)
  }, [value])
  return (
    <div className="flex flex-row justify-between my-3 items-center">
      <div className="p-2 border-2 border-solid border-[#44434a] flex-1 rounded-[10px] flex justify-center items-center">
        <input
          value={valueText}
          onChange={(e) => {
            const val = e.target.value
            setValue(getPriceText(val.replace(/,/g, '')))
          }}
          placeholder={placeholder}
          className="bg-transparent text-center border-0 flex-1 text-white focus:outline-none"
        />
        <Typography variant="body2" className="pr-2">
          تومان
        </Typography>
      </div>
    </div>
  )
}
