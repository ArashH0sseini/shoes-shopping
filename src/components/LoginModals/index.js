import React, { useContext } from 'react'
import CodeModal from './CodeModal'
import ForgetPasswordModal from './ForgetPasswordModal'
import SignInModal from './SignInModal'
import SignUpModal from './SignUpModal'
import ChangePasswordModal from './ChangePasswordModal'
import { LoginContext } from '../../contexts/LoginContext'

export default function Index() {
  const { state } = useContext(LoginContext)
  return (
    <>
      {state.singin ? <SignInModal /> : null}
      {state.signup ? <SignUpModal /> : null}
      {state.code ? <CodeModal /> : null}
      {state.forgetPassword ? <ForgetPasswordModal /> : null}
      {state.changePassword ? <ChangePasswordModal /> : null}
    </>
  )
}
