import {HttpClient} from './httpClient' 
import { authHeader } from '../helpers'

// This is the API. The backend root URL can be set from here.

const API = 'http://localhost:3001/api/v1'

//Setting the todos URI

const VIDEOS_API = `${API}/videos`

// The CRUD Operations of the Todo Resource.


//Create
const createVideo = video => {
    return HttpClient.post(VIDEOS_API, video, { headers: authHeader() })
}

//Read
// const getTodo = () => {
//     return HttpClient.get(TODO_API)
// }

const getAllVideos = () => {
  return HttpClient.get(VIDEOS_API)
}

const getAllMyVideos = () => {
  return HttpClient.get(`${VIDEOS_API}/my_videos`, { headers: authHeader() })

}

//Update
// const updateTodo = todo => {
//     return HttpClient.put(TODO_API, todo)
// }

//Delete
const removeVideo = id => {
    return HttpClient.delete(`${VIDEOS_API}/${id}`, { headers: authHeader() })
}


//Encapsulating in a JSON object

// const TodoApi = {createTodo, getTodo, updateTodo, removeTodo}
const VideosApi = { getAllVideos, getAllMyVideos, createVideo, removeVideo }
export {VideosApi}