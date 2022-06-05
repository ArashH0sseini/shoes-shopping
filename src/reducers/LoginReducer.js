import {
  SIGNIN,
  SIGNUP,
  CODE,
  CHANGE_PASSWORD,
  FORGET_PASSWORD
} from '../constants/ActionTypes'

function reducer(state, action) {
  switch (action.type) {
    case SIGNIN:
      return {
        singin: true,
        signup: false,
        code: false,
        forgetPassword: false,
        changePassword: false
      }
    case SIGNUP:
      return {
        singin: false,
        signup: true,
        code: false,
        forgetPassword: false,
        changePassword: false
      }
    case CODE:
      return {
        singin: false,
        signup: false,
        code: true,
        forgetPassword: false,
        changePassword: false
      }
    case FORGET_PASSWORD:
      return {
        singin: false,
        signup: false,
        code: false,
        forgetPassword: true,
        changePassword: false
      }
    case CHANGE_PASSWORD:
      return {
        singin: false,
        signup: false,
        code: false,
        forgetPassword: false,
        changePassword: true
      }

    default:
      return {
        singin: false,
        signup: false,
        code: false,
        forgetPassword: false,
        changePassword: false
      }
  }
}

export default reducer
