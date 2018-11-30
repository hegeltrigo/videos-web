// import React from 'react'
// import classes from './Video.css'
// import Button from '../../UI/Button/Button'
// import { Link } from 'react-router-dom';



import React, { Component } from 'react'
//import PropTypes from 'prop-types'
//import { connect } from 'react-redux'
import classes from './Video.css'
import Button from '../../UI/Button/Button'
import { Link } from 'react-router-dom';
import Modal from '../../UI/Modal/Modal'
import NewVideo from '../../containers/profile/NewVideo/NewVideo'
import { create } from 'domain';


export class Video extends Component {
  state = {
    creatingVideo: false,
    closeModal: true,
  }


  clickedOpenNewVideo = (id) => {
    this.setState({creatingVideo: true})
    //aqui hay que obtener el video 
    console.log('ESTE EL ID PARA MODIFICAR', id)
  }

  closeModalOnClickBackdropHandler = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return {creatingVideo: !this.state.creatingVideo}
    });
  } 

  render() {
    return (
      <div className={classes.Video}>
        <iframe width="100%" height="100%" src={'https://www.youtube.com/embed/' + this.props.youtube_video_id}> </iframe>
        <div className={classes.Title}>
            { !this.props.showButtons ? <div><Link to={{
      pathname: '/ShowVideo',
      search: '?id=' + this.props.videoId
    }}>{this.props.title}</Link></div> : ''  }
            {this.props.showButtons ? 
              <div className={classes.Buttons1}>
                {this.props.title}
                <div className={classes.Buttons2}>
                  
                  <Button buttonType="Success" clicked={this.props.onDelete}>Eliminar</Button>
                  <Button buttonType="Primary" clicked={ (e) => this.clickedOpenNewVideo(this.props.videoId)}>Editar</Button>
    
                  <Modal show={this.state.creatingVideo} modalClosed={this.closeModalOnClickBackdropHandler}>
                    <NewVideo new={false} title={'Edit Video'} closeModalOnClickButton={this.closeModalOnClickBackdropHandler}/>
                  </Modal>
                </div>  
              </div>        
            : ''}  
            
        </div>
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Video)


export default Video;