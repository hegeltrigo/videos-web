import * as actionTypes from './actions'

const initialState = {
  videos: [],
}

const reducer = (state=initialState, action) => {
    switch(action.type){
      case actionTypes.GET_ALL_VIDEOS:
        return {
          videos: action.payload
        };
      default: 
        return state; 
    }
}

export default reducer;