import React from 'react'
import classes from './Sidebar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'

const sidebar = (props) => {
  let attachedClass = [classes.Sidebar, classes.Close];
  if(props.open){
    attachedClass = [classes.Sidebar, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClass.join(' ')}>
        <Logo/>
        <nav>
          <NavigationItems authentication={props.authentication} clickedLogout={props.clickedLogout}/>
        </nav>
      </div>
    </Aux>
    
  );
}

export default sidebar;