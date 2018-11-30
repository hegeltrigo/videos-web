import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createVideo } from '../../../store/actions/videosActions'
import Button from '../../../UI/Button/Button'
import Spinner from '../../../UI/Spinner/Spinner'
import classes from './NewVideo.css'


export class NewVideo extends Component {
  state = {
    token: '',
    form: {}
  }

  onSubmitHandler = (e) =>{
    e.preventDefault()
    const {handleOnSave} = this.props
    handleOnSave(this.state.form)
  }

  render() {
    let content;
    
    if(this.props.creatingVideo){
      content = <Spinner/>;
    }
    else{
      content =(
        <form>
          <input type="text" name="title" className={classes.inputText} placeholder="Titulo" onChange={ev => {
                this.setState({
                  form: { ...this.state.form, title: ev.target.value }
                })
              }} value={this.state.form.title}/><br></br><br></br>
          <input type="text" name="description" className={classes.inputText} placeholder="Descripción" onChange={ev => {
                this.setState({
                  form: { ...this.state.form, description: ev.target.value }
                })
              }} value={this.state.form.description} /><br></br><br></br>
          <input type="text" name="video_url" className={classes.inputText} placeholder="url"onChange={ev => {
                this.setState({
                  form: { ...this.state.form, video_url: ev.target.value }
                })
              }} value={this.state.form.video_url} /><br></br><br></br>
          <br></br>    
          {/* <input type="button" name="myButton" onClick={this.onSubmitHandler} value="Guardar"/> */}
          <Button buttonType='Success' clicked={this.onSubmitHandler}>Guardar</Button><span>&nbsp;&nbsp;</span>
          <Button id="closeButton" buttonType='Danger' clicked={this.props.closeModalOnClickButton}>Cancelar</Button>

        </form>
      )
    }

    return (
      <div className={classes.NewVideo}>
        <div>
          <h1>Nuevo video</h1>
          {content}
        </div>
        
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
      creatingVideo: state.MyVideoList.creatingVideo,
      createdVideoSucces: state.MyVideoList.createdVideoSucces
  }
}

const mapDispatchToProps = dispatch => ({
  handleOnSave (form) {
    dispatch(createVideo(form))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewVideo)
