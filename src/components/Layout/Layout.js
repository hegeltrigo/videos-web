import React from 'react';
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Subheader from '../Navigation/Subheader/Subheader'

const layout = (props) => (
  <Aux>
    <Toolbar></Toolbar>
    <Subheader></Subheader>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
  
);

export default layout;