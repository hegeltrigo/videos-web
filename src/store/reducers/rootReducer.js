import {combineReducers} from 'redux'
import { VideoListReducer } from './videosReducers'
import { MyVideoList } from './videosReducers'
import { authentication } from './userReducers'



//One root reducer for the whole app. This is done so that the app will have one single reducer to manage lots of other resources.
// And also communication between the reducers will be easier to maintain.
 
const rootReducer = combineReducers({
    VideoListReducer,
    MyVideoList,
    authentication
})

export default rootReducer;