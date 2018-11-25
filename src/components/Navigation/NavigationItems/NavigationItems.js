import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import Button from '../../../UI/Button/Button'

const navigationItems = (props) => {
  let authItem;
  let myVideosItem;

  if(props.authentication.loggedIn){
    myVideosItem = <NavigationItem link="/MyVideos">Mis Videos</NavigationItem>
    authItem = <Button buttonType="Success" clicked={props.clickedLogout}>Logout</Button>
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