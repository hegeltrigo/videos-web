import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const navigationItems = () =>(
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>Home</NavigationItem>
    <NavigationItem link="/">Mis Videos</NavigationItem>
    <NavigationItem link="/">Login</NavigationItem>

  </ul>
);
export default navigationItems;