import React, { Component } from 'react'
import classes from './Videos.css'
import axios from 'axios';
import Video from '../../components/Video/Video'

// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'

export class Videos extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
  
  state = {
    videos: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/api/v1/videos`)
      .then(res => {
        const videos = res.data;
        console.log(videos)
        this.setState({ videos });
      })
  }

  render() {
    return (
      <div className={classes.Videos}>
        {this.state.videos.map((video,index) => {
        //   return <div className={classes.video}>
        //   <iframe width="100%" height="100%" src={'https://www.youtube.com/embed/' + video.youtube_video_id}> </iframe>
        // </div>
        return <Video youtube_video_id={video.youtube_video_id}/>
        })}
      </div>
    )
  }
}

export default Videos;

// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Videos)
