import React, { Component } from 'react'
import classes from './MyVideos.css'
import Video from '../../../components/Video/Video'
import Spinner from '../../../UI/Spinner/Spinner'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as videosActions from '../../../store/actions/videosActions'
import { bindActionCreators } from 'redux'


export class MyVideos extends Component {
  constructor(props) {
    super(props)
  }

  // static propTypes = {
  //   prop: PropTypes
  // }
  
  // state = {
  //   //videos: [],
  //   loading: true
  // }

  componentDidMount() {
    // this.props.actions.GetAllMyVideos()
    console.log(this.props.actions)
    // this.setState({loading: false})
  }

  render() {
    let content="";
    if(this.props.loading){
      content = <Spinner/>;
    }
    else{
      // console.log(this.props)
      // content = this.props.vids.map((video,index) => {
      //    return <Video key={video.id} title={video.title} youtube_video_id={video.youtube_video_id}/>
      //  }); 
    }
    return (
      <div className={classes.Videos}>
        {content}
      </div>
    )
  }
}


// Videos.propTypes = {
//   actions: PropTypes.object.isRequired,
//   videos: PropTypes.array.isRequired
// }


// This maps the state to the property of the component

function mapStateToProps(state) {
  return {
      vids: state.VideoListReducer.videos,
      loading: state.VideoListReducer.loading
  }
}

// This maps the dispatch to the property of the component

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(videosActions, dispatch)
  }
}

 export default connect(mapStateToProps, mapDispatchToProps)(MyVideos);
