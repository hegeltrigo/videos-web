import React from 'react'
import classes from './Video.css'
import Button from '../../UI/Button/Button'

const video = (props) => (
  <div className={classes.Video}>
    <iframe width="100%" height="100%" src={'https://www.youtube.com/embed/' + props.youtube_video_id}> </iframe>
    <div className={classes.Title}>{props.title} <Button buttonType="Success" clicked={props.onDelete}>Eliminar</Button><Button buttonType="Primary" clicked={props.onEdit}>Editar</Button></div>
  </div>
)

export default video;