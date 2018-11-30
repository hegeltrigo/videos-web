import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createVideo } from '../../../store/actions/videosActions'
import Button from '../../../UI/Button/Button'
import Spinner from '../../../UI/Spinner/Spinner'
import classes from './NewVideo.css'


export class NewVideo extends Component {
  

  constructor(props) {
    super(props);
    this.state = { form: {  title: props.video.video.title,
                            description: props.video.video.description,
                            video_url: props.video.video.video_url
                          } 
                  }               
  }

  componentWillReceiveProps(nextProps){
    this.setState({form: nextProps.video.video})   
  }

  onSubmitHandler = (e) =>{
    e.preventDefault()

    if(this.props.new){
      const {handleOnSave} = this.props
      handleOnSave(this.state.form)
    }
    else{
      console.log('AQUI TENDRIAMOS QUE HACER UN UPDATE')
    }
    
  }

  render() {
    let content;
    let {video}  = this.props
    
    if(video.loading){
      content = <Spinner/>;
    }
    else{
      content =(
        <form>
          <input type="text" name="title" className={classes.inputText} placeholder="Titulo" onChange={ev => {
                this.setState({
                  form: { ...this.state.form, title: ev.target.value }
                })
              }} /><br></br><br></br>
          <input type="text" name="description" className={classes.inputText} placeholder="Descripción" onChange={ev => {
                this.setState({
                  form: { ...this.state.form, description: ev.target.value }
                })
              }} /><br></br><br></br>
          <input type="text" name="video_url" className={classes.inputText} placeholder="url"onChange={ev => {
                this.setState({
                  form: { ...this.state.form, video_url: ev.target.value }
                })
              }}  /><br></br><br></br>
          <br></br>    
          <Button buttonType='Success' clicked={this.onSubmitHandler}>Guardar</Button><span>&nbsp;&nbsp;</span>
          <Button id="closeButton" buttonType='Danger' clicked={this.props.closeModalOnClickButton}>Cancelar</Button>
        </form>
      )
    }

    return (
      <div className={classes.NewVideo}>
        <div>
          <h1>{this.props.title}</h1>
          {content}
        </div>
        
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
      video: state.MyVideoList.currentVideo
  }
}

const mapDispatchToProps = dispatch => ({
  handleOnSave (form) {
    dispatch(createVideo(form))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewVideo)
