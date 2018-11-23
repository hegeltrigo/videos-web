import {HttpClient} from './httpClient' 

// This is the API. The backend root URL can be set from here.

const API = 'http://localhost:3001/api/v1'

//Setting the todos URI

const VIDEOS_API = `${API}/videos`
const USERS_API = `${API}/users`


// The CRUD Operations of the Todo Resource.


//Create
// const createTodo = todo => {
//     return HttpClient.post(TODO_API, todo)
// }

//Read
// const getTodo = () => {
//     return HttpClient.get(TODO_API)
// }

const getAllVideos = () => {
  return HttpClient.get(VIDEOS_API)
}

//Update
// const updateTodo = todo => {
//     return HttpClient.put(TODO_API, todo)
// }

//Delete
// const removeTodo = todo => {
//     return HttpClient.delete(`${TODO_API}/${todo._id}`)
// }

// Authentication

const login = (email,password) => {
  return HttpClient.post(`${USERS_API}/sign_in`,{
    user: {
      email: email,
      password: password
    }
  })
}


//Encapsulating in a JSON object

// const TodoApi = {createTodo, getTodo, updateTodo, removeTodo}
const VideosApi = { getAllVideos}
export {VideosApi}