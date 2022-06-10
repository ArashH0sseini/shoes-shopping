/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'

export default function ColorsItem({ color }) {
  const [active, setActive] = useState(false)
  return (
    <div
      onClick={() => setActive(!active)}
      style={{ backgroundColor: color }}
      className={
        active
          ? 'w-10 h-10 rounded-full m-1 cursor-pointer border-2 border-solid border-white'
          : 'w-10 h-10 rounded-full m-1 cursor-pointer'
      }
    />
  )
}
