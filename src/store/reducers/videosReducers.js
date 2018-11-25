import { videoTypes } from '../types'


const initialStateVideos = {
  videos: [],
  loading: true,
}

export const VideoListReducer = (state = initialStateVideos, action) => {
    switch(action.type){

      case videoTypes.GET_ALL_VIDEOS_SUCCESS:
        return {
          ...state,
          videos: action.videos,
          loading: false
        }

      case videoTypes.IS_LOADING_VIDEOS:
        return{
          ...state,
          loading: true
        }
      default: 
        return state; 
    }
}

const initialStateMyVideos = {
  videos: [],
  loading: true,
}

export const MyVideoList = (state = initialStateMyVideos, action) => {
  switch(action.type){

    case videoTypes.GET_ALL_MY_VIDEOS:
      return {
        ...state,
        videos: action.videos,
        loading: false
      }

    case videoTypes.IS_LOADING_MY_VIDEOS:
      return{
        ...state,
        loading: true
      }
    default: 
      return state; 
  }
}

// //The individual Reducer. It handles only one Todo Object.


// const todo = (state, action) => {

//   // If the mapped todo of the previous state matches with the new ID of the action, 
//   // Only then proceed to the Reducer Switch case

//   if (state._id != (action._id || action.todo._id)) {
//       return state;
//   }

//   switch (action.type) {

//       // Edit/modifies the individual Todos using ES6 spread operator. The cases are self explanatory.

//       case TodoActions.START_EDITING:
//           {
//               return {
//                   ...state,
//                   editing: true
//               }
//           }

//       case TodoActions.CANCEL_EDITING:
//           {
//               return {
//                   ...state,
//                   editing: false
//               }
//           }

//       case TodoActions.UPDATE_TODO:
//           {
//               return {
//                   ...state,
//                   editing: false,
//                   updating: true
//               }
//           }

//       case TodoActions.UPDATE_TODO_SUCCESS:
//           {
//               return {
//                   ...state,
//                   ...action.todo,
//                   updating: false
//               }
//           }

//       case TodoActions.DELETE_TODO:
//           {
//               return {
//                   ...state,
//                   deleting: true
//               }
//           }

//       case TodoActions.DELETE_TODO_SUCCESS:
//           {
//               return false
//           }

//       default:
//           {
//               return state;
//           }
//   }
// }


