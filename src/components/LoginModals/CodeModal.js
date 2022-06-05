/* eslint-disable react/jsx-no-duplicate-props */
import { Button, Modal, Typography } from '@mui/material'
import React, { useState, useEffect, useContext } from 'react'
import ReactCodeInput from 'react-code-input'
import { LoginContext } from '../../contexts/LoginContext'
import {
  SIGNIN,
  SIGNUP,
  FORGET_PASSWORD,
  CHANGE_PASSWORD
} from '../../constants/ActionTypes'

export default function CodeModal() {
  const codeType = localStorage.getItem('loginCodeType')
  const { state, dispatch } = useContext(LoginContext)
  const [timer, setTimer] = useState(50)
  useEffect(() => {
    setInterval(() => {
      setTimer((prevTimer) => (prevTimer === 0 ? 0 : prevTimer - 1))
    }, 1000)
  }, [])
  const checkCode = () => {
    if (codeType === 'signUp') {
      //
    } else {
      dispatch({ type: CHANGE_PASSWORD })
    }
  }
  const sendCodeAgain = () => {
    setTimer(50)
  }

  return (
    <Modal open={state.code} onClose={() => dispatch({ type: 'closeAll' })}>
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
            <Button
              fullWidth
              variant="text"
              color="primary"
              className="mt-4"
              onClick={sendCodeAgain}
            >
              <Typography variant="body2" className="text-xs">
                درخواست مجدد کد
              </Typography>
            </Button>
          )}
        </div>
        <Button
          disabled={timer === 0}
          size="large"
          variant="outlined"
          color="primary"
          className="mt-5"
          fullWidth
          onClick={checkCode}
        >
          تایید کد
        </Button>
        <Button
          size="large"
          variant="text"
          color="primary"
          className="mt-3 text-xs justify-start"
          fullWidth
          onClick={() => {
            dispatch({
              type: codeType === 'signUp' ? SIGNUP : FORGET_PASSWORD
            })
          }}
        >
          اصلاح شماره موبایل
        </Button>
        <Button
          size="large"
          variant="text"
          color="primary"
          className="mt-3 text-xs justify-start"
          fullWidth
          onClick={() => {
            dispatch({ type: SIGNIN })
          }}
        >
          بازگشت به فرم ورود
        </Button>
      </div>
    </Modal>
  )
}
