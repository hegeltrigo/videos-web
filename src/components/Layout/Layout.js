import React, {Component} from 'react';
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
// import Subheader from '../Navigation/Subheader/Subheader'
import Sidebar from '../Navigation/SideBar/Sidebar'

class Layout extends Component{
  state = {
    showSidebar: true
  }

  sidebarClosedHandler = () =>{
    this.setState({showSidebar: false})
  }

  render(){
    return(
      <Aux>
        <Toolbar/>
        <Sidebar open={this.state.showSidebar} closed={this.sidebarClosedHandler}/>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
} 

export default Layout;