import React, {Component} from 'react';
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
// import Subheader from '../Navigation/Subheader/Subheader'
import Sidebar from '../Navigation/SideBar/Sidebar'
import {logout} from '../../store/actions/userActions'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'


class Layout extends Component{

  state = {
    showSidebar: false
  }

  sidebarClosedHandler = () => {
    this.setState({showSidebar: false})
  }

  sidebarToogleHandler = () => {
    this.setState((prevState) => {
      return {showSidebar: !this.state.showSidebar}
    });

  }

  clickedLogoutHandler = () => {
    const { handleOnLogout } = this.props
    handleOnLogout()
  }

  render(){
    const { authentication } = this.props
    return(
      <Aux>
        <Toolbar authentication={authentication} clickedLogout={this.clickedLogoutHandler} SidebarToogleClicker={this.sidebarToogleHandler}/>
        <Sidebar authentication={authentication} clickedLogout={this.clickedLogoutHandler} open={this.state.showSidebar} closed={this.sidebarClosedHandler}/>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
} 

const mapStateToProps = ({ authentication }) => ({ authentication })

const mapDispatchToProps = dispatch => ({
  handleOnLogout () {
    dispatch(logout())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)


