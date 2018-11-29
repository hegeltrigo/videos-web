import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createVideo } from '../../../store/actions/videosActions'
import Button from '../../../UI/Button/Button'
import Spinner from '../../../UI/Spinner/Spinner'


export class NewVideo extends Component {
  state = {
    token: '',
    form: {}
  }

  onSubmitHandler = (e) =>{
    e.preventDefault()
    const {handleOnSave} = this.props
    handleOnSave(this.state.form)
    // if(!this.props.videoError){
    //   this.props.closeModalOnClickButton(e);
    // }
  }

  render() {
    let content;
    if(this.props.creatingVideo){
      content = <Spinner/>;
    }
    else{
      content =(
        <form>
          <input type="text" name="title" placeholder="Titulo" onChange={ev => {
                this.setState({
                  form: { ...this.state.form, title: ev.target.value }
                })
              }}/><br></br><br></br>
          <input type="text" name="description" placeholder="Descripción" onChange={ev => {
                this.setState({
                  form: { ...this.state.form, description: ev.target.value }
                })
              }}/><br></br><br></br>
          <input type="text" name="video_url" placeholder="url"onChange={ev => {
                this.setState({
                  form: { ...this.state.form, video_url: ev.target.value }
                })
              }}/><br></br><br></br>

          {/* <input type="button" name="myButton" onClick={this.onSubmitHandler} value="Guardar"/> */}
          <Button buttonType='Success' clicked={this.onSubmitHandler}>Guardar</Button>
          <Button id="closeButton" buttonType='Danger' clicked={this.props.closeModalOnClickButton}>Cancelar</Button>

        </form>
      )
    }

    if(this.props.ErrorVideo){
      //show message error 
    }

    return (
      <div>
        <h1>Nuevo video</h1>
        {content}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
      creatingVideo: state.MyVideoList.creatingVideo,
      ErrorVideo: state.MyVideoList.ErrorVideo
  }
}

const mapDispatchToProps = dispatch => ({
  handleOnSave (form) {
    dispatch(createVideo(form))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewVideo)
