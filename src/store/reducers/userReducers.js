import {userTypes} from '../types'

let user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  loading: false,
  loggedIn: user ? true : false,
  user: null,
  message: null
}

export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.LOGIN_REQUEST:
      return { 
        ...state,
        loading: true,
        message: 'Login Request' 
      }
    case userTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loading: false,
        user: action.response.data,
        message: 'Login Success'
      }
    case userTypes.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        message: 'Login Failed'
      }  
    case userTypes.LOGOUT:
      return { 
        ...state,
        loggedIn: false,
        user: null
      }
    default:
      return state
  }
}
