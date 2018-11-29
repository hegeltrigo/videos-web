import React, { Component } from 'react'
import classes from './MyVideos.css'
import Video from '../../../components/Video/Video'
import Spinner from '../../../UI/Spinner/Spinner'
import { connect } from 'react-redux'
import NewVideo from '../NewVideo/NewVideo'
import Modal from '../../../UI/Modal/Modal'
import Button from '../../../UI/Button/Button'

// import * as videosActions from '../../store/actions/videosActions'
// import { bindActionCreators } from 'redux'

import { GetAllMyVideos } from '../../../store/actions/videosActions'

export class MyVideos extends Component {

  constructor(props) {
    super(props)
  }

  state = {
    creatingVideo: false,
    closeModal: true,
  }

  componentDidMount() {
    const {HandleGetAllMyVideos} = this.props
    HandleGetAllMyVideos()
  }

  componentWillReceiveProps =(newProps) =>{

    if(newProps.createdVideoSucces){
      console.log('SE CREO BIEN');
      let id = document.getElementById("backdrop");
      if(id){
        id.click();
      }
    }
  }

  clickedOpenNewVideo = () => {
    this.setState({creatingVideo: true})
  }

  closeModalOnClickBackdropHandler = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return {creatingVideo: !this.state.creatingVideo}
    });
  } 

  // closeModalOnClickButton = (e) =>{
  //   e.preventDefault();
  //   this.closeModalOnClickBackdropHandler()
  // }

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

    // if(this.props.createdVideoSucces){
    //   console.log('AQUI EN ESTA ACCION SE TIENE OCULTAR EL MODAL');
    //   this.closeModalOnClickBackdropHandler.bind(this)
    // }
    
    return (
      <div>

         <Button buttonType='Success' clicked={this.clickedOpenNewVideo}>Nuevo Video</Button>
         <Modal show={this.state.creatingVideo} modalClosed={this.closeModalOnClickBackdropHandler}>
            <NewVideo closeModalOnClickButton={this.closeModalOnClickBackdropHandler}/>
         </Modal>
         <div className={classes.MyVideos}>
          {content}
        </div>
      </div>
     
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
      authentication: state.authentication,
      vids: state.MyVideoList.videos,
      loading: state.MyVideoList.loading,
      creatingVideo: state.MyVideoList.creatingVideo, 
      createdVideoSucces: state.MyVideoList.createdVideoSucces
  }
}

const mapDispatchToProps = dispatch => ({
  HandleGetAllMyVideos () {
    dispatch(GetAllMyVideos())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MyVideos);
