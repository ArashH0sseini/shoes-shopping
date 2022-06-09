/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext } from 'react'
import ArrowDropDown from '@mui/icons-material/ArrowDropDown'
import { Button } from '@mui/material'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import Avarar from '../../../assets/images/avatar.jpg'
import { LoginContext } from '../../../contexts/LoginContext'
import { SIGNIN, SIGNUP } from '../../../constants/ActionTypes'

export default function ProfileButton() {
  const { dispatch } = useContext(LoginContext)
  const [open, setOpen] = useState(false)
  return (
    <div className="flex items-center justify-center relative rounded-lg p-2 border-[1px] border-[#202d2a] border-solid w-[90px] h-full z-10">
      <div
        onClick={() => setOpen(!open)}
        className="flex cursor-pointer transition-all delay-[5ms] hover:opacity-70"
      >
        <ArrowDropDown className="text-4xl text-[#00c1c9]" />
        <img
          src={Avarar}
          alt="avatar"
          className="rounded-full w-9 ring-2 ring-[#00c1c9] p-1"
        />
      </div>

      <Fade in={open}>
        <div className="absolute p-4 top-[67px] left-0 border-[1px] border-[#202d2a] border-solid rounded-lg w-48 bg-[#011A1D]">
          {localStorage.token ? (
            <>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                fullWidth
              >
                <Typography variant="subtitle2">پروفایل کاربری</Typography>
              </Button>
              <Button
                variant="textPrimary"
                color="secondary"
                size="small"
                fullWidth
              >
                خروج
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                fullWidth
                onClick={() => {
                  setOpen(false)
                  dispatch({ type: SIGNIN })
                }}
              >
                ورود
              </Button>
              <Button
                variant="textPrimary"
                color="secondary"
                size="large"
                fullWidth
                onClick={() => {
                  setOpen(false)
                  dispatch({ type: SIGNUP })
                }}
              >
                ثبت نام
              </Button>
            </>
          )}
        </div>
      </Fade>
    </div>
  )
}
