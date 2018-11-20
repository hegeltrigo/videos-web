import React from 'react';
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Subheader from '../Navigation/Subheader/Subheader'
import Sidebar from '../Navigation/SideBar/Sidebar'

const layout = (props) => (
  <Aux>
    <Toolbar/>
    <Sidebar/>
    {/* <Subheader></Subheader> */}
    <main className={classes.Content}>{props.children}</main>
  </Aux>
  
);

export default layout;