/* eslint-disable react/jsx-no-duplicate-props */
import { Button, Modal, TextField, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { LoginContext } from '../../contexts/LoginContext'
import { SIGNIN, CODE } from '../../constants/ActionTypes'

export default function SignUpModal() {
  const { state, dispatch } = useContext(LoginContext)
  const singUp = () => {
    localStorage.setItem('loginCodeType', 'signUp')
    dispatch({ type: CODE })
  }

  return (
    <Modal open={state.signup} onClose={() => dispatch({ type: 'closeAll' })}>
      <div className="w-80 h-auto bg-[#1a222a] m-auto mt-20 p-6 focus:outline-none rounded-md">
        <Typography variant="body2">تلفن همراه:</Typography>
        <TextField
          variant="filled"
          size="medium"
          fullWidth
          inputProps={{
            className:
              'bg-[#2a3a48] rounded-md hover:border-none my-3 p-2 text-left transition-all dalay-150 focus:ring-[1px] focus:ring-[#00c1c9] ring-[1px] ring-[#203d75]'
          }}
          InputProps={{
            className:
              'bg-[#1a222a] after:border-none before:border-none hover:outline-none'
          }}
        />
        <Typography variant="body2" className="mt-3">
          نام و نام خانوادگی:
        </Typography>
        <TextField
          classes={{ className: '' }}
          variant="filled"
          size="medium"
          fullWidth
          inputProps={{
            className:
              'bg-[#2a3a48] rounded-md hover:border-none my-3 p-2 text-left transition-all dalay-150 focus:ring-[1px] focus:ring-[#00c1c9] ring-[1px] ring-[#203d75]'
          }}
          InputProps={{
            className:
              'bg-[#1a222a] after:border-none before:border-none hover:outline-none'
          }}
        />
        <Typography variant="body2" className="mt-3">
          رمز عبور:
        </Typography>
        <TextField
          classes={{ className: '' }}
          variant="filled"
          size="medium"
          fullWidth
          inputProps={{
            className:
              'bg-[#2a3a48] rounded-md hover:border-none my-3 p-2 text-left transition-all dalay-150 focus:ring-[1px] focus:ring-[#00c1c9] ring-[1px] ring-[#203d75]'
          }}
          InputProps={{
            className:
              'bg-[#1a222a] after:border-none before:border-none hover:outline-none'
          }}
        />
        <Typography variant="body2" className="mt-3">
          تکرار رمز عبور:
        </Typography>
        <TextField
          classes={{ className: '' }}
          variant="filled"
          size="medium"
          fullWidth
          inputProps={{
            className:
              'bg-[#2a3a48] rounded-md hover:border-none my-3 p-2 text-left transition-all dalay-150 focus:ring-[1px] focus:ring-[#00c1c9] ring-[1px] ring-[#203d75]'
          }}
          InputProps={{
            className:
              'bg-[#1a222a] after:border-none before:border-none hover:outline-none'
          }}
        />
        <Button
          size="large"
          variant="outlined"
          color="primary"
          className="mt-5"
          fullWidth
          onClick={singUp}
        >
          ثبت نام
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
          قبلا ثبت نام کرده اید؟
        </Button>
      </div>
    </Modal>
  )
}
