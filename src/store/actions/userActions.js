import { UserEndpoints } from "../../api/userEndpoints";
import { userTypes } from '../types'

export const login = (user) => {
  return (dispatch) => {
      dispatch(loginRequest())
      UserEndpoints.login(user.email, user.password).then(res => {
          let data = res.data;
          data["token"] = res.headers.authorization
          localStorage.setItem('user', JSON.stringify(data));
          return dispatch(loginSuccess(res));
      }).catch((e) => {
        console.log(e);
      })
  }

  const loginRequest = () => { return { type: userTypes.LOGIN_REQUEST }}
  const loginSuccess = (response) => { return { type: userTypes.LOGIN_SUCCESS, response } }
  const loginFailure = ()=> { return { type: userTypes.LOGIN_FAILURE } }
}

export const logout = () => {
  // userService.logout();
  return { type: userTypes.LOGOUT };
}



