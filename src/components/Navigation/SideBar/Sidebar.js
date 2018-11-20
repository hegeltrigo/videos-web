import React from 'react'
import classes from './Sidebar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const sidebar = () => {
  return (
    <div className={classes.Sidebar}>
      <Logo/>
      <nav>
        <NavigationItems/>
      </nav>
    </div>
  );
}

export default sidebar;