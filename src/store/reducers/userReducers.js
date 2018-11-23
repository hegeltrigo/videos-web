import * as actionTypes from '../actions/actionTypes'


let user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  loading: false,
  loggedIn: user ? true : false,
  user: null,
  message: null
}

export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return { 
        ...state,
        loading: true,
        message: 'Login Request' 
      }
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loading: false,
        user: action.response.data,
        message: 'Login Success'
      }
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        message: 'Login Failed'
      }  
    default:
      return state
  }
}
