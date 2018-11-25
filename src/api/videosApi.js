import {HttpClient} from './httpClient' 
import { authHeader } from '../helpers'

// This is the API. The backend root URL can be set from here.

const API = 'http://localhost:3001/api/v1'

//Setting the todos URI

const VIDEOS_API = `${API}/videos`

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
  return HttpClient.get(VIDEOS_API, { headers: authHeader() })
}

//Update
// const updateTodo = todo => {
//     return HttpClient.put(TODO_API, todo)
// }

//Delete
// const removeTodo = todo => {
//     return HttpClient.delete(`${TODO_API}/${todo._id}`)
// }




//Encapsulating in a JSON object

// const TodoApi = {createTodo, getTodo, updateTodo, removeTodo}
const VideosApi = { getAllVideos}
export {VideosApi}