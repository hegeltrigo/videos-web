import React from 'react'
import classes from './Main.css'

const main = (props) => (
  <div className={classes.Main}>
  
    {props.videos.map((video,index) => {
      return <div className={classes.video}>
      <iframe width="100%" height="100%" src={'https://www.youtube.com/embed/' + video.youtube_video_id}> </iframe>
    </div>
    })} 
  </div>
);

export default main;