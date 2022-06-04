/* eslint-disable react/jsx-no-duplicate-props */
import { Button, Modal, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import ReactCodeInput from 'react-code-input'

export default function CodeModal() {
  const [open, setOpen] = useState(true)
  const [timer, setTimer] = useState(10)
  useEffect(() => {
    setInterval(() => {
      setTimer((prevTimer) => (prevTimer === 0 ? 0 : prevTimer - 1))
    }, 1000)
  }, [])
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <div className="w-80 h-auto bg-[#1a222a] m-auto mt-20 p-6 focus:outline-none rounded-md">
        <Typography variant="body2">کد پیامک شده را وارد کنید:</Typography>
        <div
          className="flex flex-col justify-center items-center mt-4"
          dir="ltr"
        >
          <ReactCodeInput
            fields={5}
            inputStyle={{
              backgroundColor: '#2e3e48',
              width: 35,
              margin: 5,
              height: 35,
              border: 'none',
              textAlign: 'center',
              color: '#fff',
              borderRadius: 4
            }}
          />
          {timer !== 0 ? (
            <div className="flex justify-center text-center items-center w-full">
              <Typography
                variant="body2"
                className="mt-4 mx-1 text-xs text-[#b3aeae]"
              >
                ثانیه تا پایان اعتبار کد
              </Typography>
              <Typography
                variant="body2"
                className="mt-4 text-xs text-[#b3aeae]"
              >
                {timer}
              </Typography>
            </div>
          ) : (
            <Button fullWidth variant="text" color="primary" className="mt-4">
              <Typography variant="body2" className="text-xs">
                درخواست مجدد کد
              </Typography>
            </Button>
          )}
        </div>
        <Button
          size="large"
          variant="outlined"
          color="primary"
          className="mt-5"
          fullWidth
        >
          تایید کد
        </Button>
        <Button
          size="large"
          variant="text"
          color="primary"
          className="mt-3 text-xs justify-start"
          fullWidth
        >
          بازگشت به فرم ورود
        </Button>
      </div>
    </Modal>
  )
}
