//Import the Todo API 

import { VideosApi } from "../../api/videosApi";
import * as actionTypes from './actionTypes'
 

//Create

//The dispatch and getstate function is provided by the Redux-Thunk middleware, we can dispatch actions with it.

// export function CreateTodo(todo){
//     return (dispatch, getState) => {
//         return TodoApi.createTodo(todo).then(res => {
//             dispatch(CreateTodoSuccess(res.data.data))
//         })
//     }
// }

// export function CreateTodoSuccess(todo){
//     return {
//         type:CREATE_TODO_SUCCESS,
//         todo
//     }
// }


//Read
export const GetAllVideos = () => {
    return (dispatch) => {
        dispatch(isLoadingVideos())
        VideosApi.getAllVideos().then(res => {
            return dispatch(GetAllVideosSuccess(res.data));
        })
    }
}

export function GetAllVideosSuccess(videos){
    return {
        type: actionTypes.GET_ALL_VIDEOS_SUCCESS,
        videos
    }
}

export function isLoadingVideos(){
    return {
      type: actionTypes.IS_LOADING_VIDEOS,
      loadind: true
  }
}


//Update
// export function StartEditing(_id) {
//     return {
//         type: START_EDITING,
//         _id
//     }
// }
// export function CancelEditing(_id) {
//     return {
//         type: CANCEL_EDITING,
//         _id
//     }
// }

// export function UpdateTodo(todo) {
//     return (dispatch, getState) => {
        
//         //Multiple actions can be sent usign the Redux-Thunk middleware

//         dispatch({
//             type: UPDATE_TODO,
//             todo
//         })
//         TodoApi.updateTodo(todo).then(res => {
//             dispatch(UpdateTodoSuccess(res.data.data))
//         })
//     }
// }
// export function UpdateTodoSuccess(todo) {
//     return {
//         type: UPDATE_TODO_SUCCESS,
//         todo,
//         _id: todo._id
//     }
// }


//Delete
// export function DeleteTodo(todo) {
//     return (dispatch, getState) => {
//         dispatch({
//             type: DELETE_TODO,
//             todo
//         })
//         TodoApi.removeTodo(todo).then(res => {
//             if (res.status == 204) {
//                 dispatch(DeleteTodoSuccess(todo))
//             }
//         })
//     }
// }
// export function DeleteTodoSuccess(todo) {
//     return {
//         type: DELETE_TODO_SUCCESS,
//         todo,
//         _id: todo._id
//     }
// }
