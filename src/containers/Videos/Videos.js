import React, { Component } from 'react'
import classes from './Videos.css'
import axios from '../../axios.videos';
import Video from '../../components/Video/Video'
import Spinner from '../../UI/Spinner/Spinner'
// import *  as actionTypes from '../../store/actions';
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'

export class Videos extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
  
  state = {
    videos: [],
    loading: true
  }

  componentDidMount() {
    axios.get(`videos`)
      .then(res => {
        const videos = res.data;
        this.setState({ videos: videos, loading: false });
      })
      .catch( error => {
        this.setState({ loading: false });

      });
  }

  

  render() {
    let content;
    if(this.state.loading){
      content = <Spinner/>;
    }
    else{
      content = this.state.videos.map((video,index) => {
         return <Video key={video.id} title={video.title} youtube_video_id={video.youtube_video_id}/>
       }); 
    }
    return (
      <div className={classes.Videos}>
        {content}
      </div>
    )
  }
}

export default Videos;

// // const mapStateToProps = (state) => ({
//     vids = state.videos
// // })

// // const mapDispatchToProps = {
//     getVideos: () => dispatch({type: actionTypes.A})
// // }

// // export default connect(mapStateToProps, mapDispatchToProps)(Videos)
