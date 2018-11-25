import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import SidebarToogle from '../SideBar/SidebarToogle/SidebarToogle'

const toolbar = (props) => {
  return(
    <header className={classes.Toolbar}>
      <SidebarToogle clicked={props.SidebarToogleClicker}/>
      <Logo></Logo>
      <nav>
        <NavigationItems authentication={props.authentication} clickedLogout={props.clickedLogout}/>
      </nav>
    </header>
  );
}
export default toolbar;