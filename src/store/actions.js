import axios from '../axios.videos'

export const GET_ALL_VIDEOS = "GET_ALL_VIDEOS";


export const getAllVideos = () => {

  axios.get(`videos`)
    .then(res => {
      const videos = res.data;
      // dispatch({type: 'GET_ALL_VIDEOS', payload: videos})
      // this.setState({ videos: videos, loading: false });
    })
    .catch( error => {
      // this.setState({ loading: false });

    });
}

