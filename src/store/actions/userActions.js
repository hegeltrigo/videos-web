import { UserEndpoints } from "../../api/userEndpoints";
import * as actionTypes from './actionTypes'

export const login = (user) => {
  return (dispatch) => {
      dispatch(loginRequest())
      UserEndpoints.login(user.email, user.password).then(res => {
          localStorage.setItem('user', JSON.stringify(res.data));
          return dispatch(loginSuccess(res));
      }).catch( (e) => {
        console.log(e);
      })
  }
}

export const loginRequest = () => {
  return {
    type: actionTypes.LOGIN_REQUEST
  }
}

export const loginSuccess = (response)=> {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    response
  }
}

export const loginFailure = ()=> {
  return {
    type: actionTypes.LOGIN_FAILURE,
  }
}

