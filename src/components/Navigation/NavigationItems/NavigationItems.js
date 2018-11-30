import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import Button from '../../../UI/Button/Button'

const navigationItems = (props) => {
  let authItem;
  let myVideosItem ='';
  let newVideo = '';

  if(props.authentication.loggedIn){
    myVideosItem = <NavigationItem link="/MyVideos">Mis Videos</NavigationItem>
    // newVideo = <NavigationItem link="/NewVideo">Nuevo Video</NavigationItem>
    authItem = <NavigationItem link="/Logout">Logout</NavigationItem>
  }
  else{
    authItem = <NavigationItem link="/Login">Login</NavigationItem>;
  }

  return(
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>Home</NavigationItem>
      {myVideosItem}
      {newVideo}
      {authItem}

    </ul>
  );
}
  
export default navigationItems;