import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const navigationItems = () =>(
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>Home</NavigationItem>
    <NavigationItem link="/MyVideos">Mis Videos</NavigationItem>
    <NavigationItem link="/Login">Login</NavigationItem>

  </ul>
);
export default navigationItems;