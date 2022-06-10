import React from 'react'
import BrandItem from './BrandItem'

export default function Brands() {
  const data = ['اسکچرز', 'آدیداس', 'نایکی', 'پوما']
  return (
    <div className="flex flex-row flex-wrap mt-3 pb-3 border-b-[1px] border-b-solid border-b-[#393c41]">
      {data.map((brand) => (
        <BrandItem key={brand} title={brand} />
      ))}
    </div>
  )
}
