import { HttpClient } from './httpClient' 

// This is the API. The backend root URL can be set from here.
const API = 'http://localhost:3001/api/v1'

//Setting the todos URI
const USERS_API = `${API}/users`


// Authentication
const login = (email, password) => {
  return HttpClient.post(`${USERS_API}/sign_in`,{
    user: {
      email: email,
      password: password
    }
  })
}

const UserEndpoints = { login }

export { UserEndpoints }