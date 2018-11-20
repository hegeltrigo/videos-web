import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import SidebarToogle from '../SideBar/SidebarToogle/SidebarToogle'

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <SidebarToogle clicked={props.SidebarToogleClicker}/>
    <Logo></Logo>
    <nav>
      <NavigationItems/>
    </nav>
  </header>
);

export default toolbar;