import React from 'react'
import hamburguer from '../../../../assets/images/hamburguer.png'
import classes  from './SidebarToogle.css'
const sidebarToogle = (props) => (
  <div className={classes.SidebarToogle} onClick={props.clicked}>
      <img height="30" width="30" src={hamburguer} alt="Menu"/>
  </div>
);

export default sidebarToogle;