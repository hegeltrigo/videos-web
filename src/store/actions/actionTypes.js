

// These are the action type constants. Ordered by CRUD order. 
// There is a pattern of Action, Action_Success, Action_Error action types for the Async actions. 

// Authentication
export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const LOGOUT = "LOGOUT"

//Create
// export const CREATE_TODO = '[Todo] CREATE_TODO' 
// export const CREATE_TODO_SUCCESS = '[Todo] CREATE_TODO_SUCCESS' 
// export const CREATE_TODO_ERROR = '[Todo] CREATE_TODO_ERROR' 


//Read
export const GET_ALL_VIDEOS = 'GET_ALL_VIDEOS' 
export const GET_ALL_VIDEOS_SUCCESS = 'GET_ALL_VIDEOS_SUCCESS' 
export const GET_ALL_VIDEOS_ERROR = 'GET_ALL_VIDEOS_ERROR' 
export const IS_LOADING_VIDEOS = 'IS_LOADING_VIDEOS' 



//Update
// export const START_EDITING ='[Todo] START_EDITING'
// export const CANCEL_EDITING = '[Todo] CANCEL_EDITING'

// export const UPDATE_TODO = '[Todo] UPDATE_TODO' 
// export const UPDATE_TODO_SUCCESS = '[Todo] UPDATE_TODO_SUCCESS' 
// export const UPDATE_TODO_ERROR = '[Todo] UPDATE_TODO_ERROR' 

// export const COMPLETE_TODO = 'COMPLETE_TODO'


//Delete
// export const DELETE_TODO = '[Todo] DELETE_TODO' 
// export const DELETE_TODO_SUCCESS = '[Todo] DELETE_TODO_SUCCESS' 
// export const DELETE_TODO_ERROR = '[Todo] DELETE_TODO_ERROR'