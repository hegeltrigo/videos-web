import { UserEndpoints } from "../../api/userEndpoints";
import * as actionTypes from './actionTypes'
import  { history }  from "../../helpers";

export const login = (user) => {
  return (dispatch) => {
      dispatch(loginRequest())
      UserEndpoints.login(user.email, user.password).then(res => {
          let data = res.data;
          data["token"] = res.headers.authorization
          localStorage.setItem('user', JSON.stringify(data));
          return dispatch(loginSuccess(res));
          // history.push('/');


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

