import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import Button from '../../../UI/Button/Button'

const navigationItems = (props) => {
  let content;
  if(props.authentication.loggedIn){
    content = <Button buttonType="Success" clicked={props.clickedLogout}>Logout</Button>
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