import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import queryString from 'query-string'
import {getVideo} from '../../../store/actions/videosActions'
import Video from '../../../components/Video/Video'
import classes from './ShowVideo.css'

export class ShowVideo extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  componentDidMount () {
    //console.log(values.id) // "top"    
    const values = queryString.parse(this.props.location.search)
    const { GetVideo} = this.props
    GetVideo(values.id)
  }

  render() {
    let content;
    let video = this.props.getVideo.video
    if(this.props.getVideo.video){
      content = (
        <div className={classes.ShowVideo}>
          <Video videoId={video.id} showButtons={false} key={video.id} title={video.title} youtube_video_id={video.youtube_video_id}/>
        </div>
      )
    }else{
      content = <h3>Error al cargar el video</h3>
    }
    return (
      <div>
        <h1>Show Video</h1>
        {content}
      </div>
    )
  }
}


function mapStateToProps(state, ownProps) {
  return {
      authentication: state.authentication,
      getVideo: state.MyVideoList.getVideo
  }
}

const mapDispatchToProps = dispatch => ({
  GetVideo(id) {
    dispatch(getVideo(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowVideo)
