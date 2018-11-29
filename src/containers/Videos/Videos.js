import React, { Component } from 'react'
import classes from './Videos.css'
import Video from '../../components/Video/Video'
import Spinner from '../../UI/Spinner/Spinner'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as videosActions from '../../store/actions/videosActions'
import { bindActionCreators } from 'redux'

// import { GetAllVideos } from '../../store/actions/videosActions'

export class Videos extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.actions.GetAllVideos()
  }

  render() {
    let content;
    if(this.props.loading){
      content = <Spinner/>;
    }
    else{
      content = this.props.vids.map((video,index) => {
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


function mapStateToProps(state, ownProps) {
  return {
      vids: state.VideoListReducer.videos,
      loading: state.VideoListReducer.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(videosActions, dispatch)
  }
}

 export default connect(mapStateToProps, mapDispatchToProps)(Videos);
