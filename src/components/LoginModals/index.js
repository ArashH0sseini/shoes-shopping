import React from 'react'
import CodeModal from './CodeModal'
import ForgetPasswordModal from './ForgetPasswordModal'
import SignModal from './SignModal'
import SignUpModal from './SignUpModal'
import ChangePasswordModal from './ChangePasswordModal'

export default function index() {
  return (
    <>
      <SignModal />
      <SignUpModal />
      <ForgetPasswordModal />
      <ChangePasswordModal />
      <CodeModal />
    </>
  )
}
