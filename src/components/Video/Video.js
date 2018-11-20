import React from 'react'
import classes from './Video.css'

const video = (props) => (
  <div className={classes.Video}>
    <iframe width="100%" height="100%" src={'https://www.youtube.com/embed/' + props.youtube_video_id}> </iframe>
    <div className={classes.Title}>{props.title}</div>
  </div>
)

export default video;