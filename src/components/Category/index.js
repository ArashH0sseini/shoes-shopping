import React from 'react'
import { Button, Typography } from '@mui/material'
import P1 from '../../assets/images/p1.png'
import P2 from '../../assets/images/p2.png'
import P3 from '../../assets/images/p3.png'

export default function Index() {
  return (
    <div>
      <div className="relative flex items-center w-full p-3 border-[1px] border-solid border-[#3d495caa] bg-[#131a21] rounded-[5px] mb-3">
        <img src={P1} alt="" className="w-[82px] h-[82px] ml-[10px]" />
        <Typography variant="h5">کفش زنانه</Typography>
        <div className="absolute bottom-1 left-1">
          <Button variant="text" color="primary">
            <Typography variant="subtitle2" className="text-xs">
              مشاهده همه
            </Typography>
          </Button>
        </div>
      </div>
      <div className="relative flex items-center w-full p-3 border-[1px] border-solid border-[#3d495caa] bg-[#131a21] rounded-[5px] mb-3">
        <img src={P2} alt="" className="w-[82px] h-[82px] ml-[10px]" />
        <Typography variant="h5">کفش زنانه</Typography>
        <div className="absolute bottom-1 left-1">
          <Button variant="text" color="primary">
            <Typography variant="subtitle2" className="text-xs">
              مشاهده همه
            </Typography>
          </Button>
        </div>
      </div>
      <div className="relative flex items-center w-full p-3 border-[1px] border-solid border-[#3d495caa] bg-[#131a21] rounded-[5px] mb-3">
        <img src={P3} alt="" className="w-[82px] h-[82px] ml-[10px]" />
        <Typography variant="h5">کفش زنانه</Typography>
        <div className="absolute bottom-1 left-1">
          <Button variant="text" color="primary">
            <Typography variant="subtitle2" className="text-xs">
              مشاهده همه
            </Typography>
          </Button>
        </div>
      </div>
      <div className="relative flex items-center w-full p-3 border-[1px] border-solid border-[#3d495caa] bg-[#131a21] rounded-[5px] mb-3">
        <img src={P1} alt="" className="w-[82px] h-[82px] ml-[10px]" />
        <Typography variant="h5">کفش زنانه</Typography>
        <div className="absolute bottom-1 left-1">
          <Button variant="text" color="primary">
            <Typography variant="subtitle2" className="text-xs">
              مشاهده همه
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  )
}
