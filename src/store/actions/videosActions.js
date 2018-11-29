//Import the Todo API 

import { VideosApi } from "../../api/videosApi";
import { videoTypes} from '../types'

export const GetAllVideos = () => {
    return (dispatch) => {
        dispatch(isLoadingVideos())
        VideosApi.getAllVideos().then(res => {
            return dispatch(GetAllVideosSuccess(res.data));
        })
    }
}

const GetAllVideosSuccess = (videos) => {return { type: videoTypes.GET_ALL_VIDEOS_SUCCESS, videos }}
const isLoadingVideos = () =>{ return { type: videoTypes.IS_LOADING_VIDEOS, loading: true } }


export const GetAllMyVideos = () => {
  return (dispatch) => {
      dispatch(isLoadingMyVideos())
      VideosApi.getAllMyVideos().then(res => {
          return dispatch(GetAllMyVideosSuccess(res.data));
      })
  }
}

const GetAllMyVideosSuccess = (videos) => {return { type: videoTypes.GET_ALL_MY_VIDEOS_SUCCESS, videos }}
const isLoadingMyVideos = () =>{ return { type: videoTypes.IS_LOADING_MY_VIDEOS, loading: true } }


export const createVideo = (video) => {
  return (dispatch) => {
    dispatch(createVideoRequest())
    VideosApi.createVideo(video).then(res => {
        return dispatch(createVideoSuccess(res));
    }).catch((e) => {
      return dispatch(createVideoFailure(e));
    })
  }
}

const createVideoRequest = () => { return { type: videoTypes.CREATE_VIDEO_REQUEST }}
const createVideoSuccess = (response) => { return { type: videoTypes.CREATE_VIDEO_SUCCESS, response }}
const createVideoFailure = (errorMessage) => { return { type: videoTypes.CREATE_VIDEO_FAILURE, errorMessage }}