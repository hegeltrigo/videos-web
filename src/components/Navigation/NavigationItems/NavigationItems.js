import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import Button from '../../../UI/Button/Button'

const navigationItems = (props) => {
  let authItem;
  let myVideosItem;

  if(props.authentication.loggedIn){
    myVideosItem = <NavigationItem link="/MyVideos">Mis Videos</NavigationItem>
    authItem = <NavigationItem link="/Logout">Logout</NavigationItem>
  }
  else{
    myVideosItem = ''
    authItem = <NavigationItem link="/Login">Login</NavigationItem>;
  }

  return(
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>Home</NavigationItem>
      {myVideosItem}
      {authItem}

    </ul>
  );
}
  
export default navigationItems;