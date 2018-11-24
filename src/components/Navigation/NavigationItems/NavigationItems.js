import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const navigationItems = (props) => {
  let content;
  if(props.authentication.loggedIn){
    content = <NavigationItem link="/logout">Logout</NavigationItem>;;
  }
  else{
    content = <NavigationItem link="/Login">Login</NavigationItem>;
  }

  return(
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>Home</NavigationItem>
      <NavigationItem link="/MyVideos">Mis Videos</NavigationItem>
      {content}

    </ul>
  );
}
  
export default navigationItems;