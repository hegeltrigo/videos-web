import React from 'react'
import classes from './Video.css'
import Button from '../../UI/Button/Button'
import { Link } from 'react-router-dom';


const video = (props) => (
  <div className={classes.Video}>
    <iframe width="100%" height="100%" src={'https://www.youtube.com/embed/' + props.youtube_video_id}> </iframe>
    <div className={classes.Title}>
        { !props.showButtons ? <div><Link to={{
  pathname: '/ShowVideo',
  search: '?id=' + props.videoId
}}>{props.title}</Link></div> : ''  }
        {props.showButtons ? 
          <div className={classes.Buttons}>
            {props.title}
            <div className={classes.Buttons}>
              <Button buttonType="Success" clicked={props.onDelete}>Eliminar</Button>
              <Button buttonType="Primary" clicked={props.onEdit}>Editar</Button>
            </div>  
          </div>        
        : ''}  
        
    </div>
  </div>
)

export default video;