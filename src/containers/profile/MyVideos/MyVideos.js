import React, { Component } from 'react'
import classes from './MyVideos.css'
import Video from '../../../components/Video/Video'
import Spinner from '../../../UI/Spinner/Spinner'
import { connect } from 'react-redux'
// import * as videosActions from '../../store/actions/videosActions'
// import { bindActionCreators } from 'redux'

import { GetAllMyVideos } from '../../../store/actions/videosActions'

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
    const {HandleGetAllMyVideos} = this.props
    console.log("PROPIEDADES", this.props)

    HandleGetAllMyVideos()

    // this.setState({loading: false})
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
      <div className={classes.MyVideos}>
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

function mapStateToProps(state, ownProps) {
  return {
      vids: state.MyVideoList.videos,
      loading: state.MyVideoList.loading
  }
}

// This maps the dispatch to the property of the component

const mapDispatchToProps = dispatch => ({
  HandleGetAllMyVideos () {
    dispatch(GetAllMyVideos())
  }
})

 export default connect(mapStateToProps, mapDispatchToProps)(MyVideos);
