import React, {Component} from 'react';
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
// import Subheader from '../Navigation/Subheader/Subheader'
import Sidebar from '../Navigation/SideBar/Sidebar'
import { connect } from 'react-redux'


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

  render(){
    const { authentication } = this.props

    return(
      <Aux>
        <Toolbar authentication={authentication} SidebarToogleClicker={this.sidebarToogleHandler}/>
        <Sidebar authentication={authentication} open={this.state.showSidebar} closed={this.sidebarClosedHandler}/>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
} 

const mapStateToProps = ({ authentication }) => ({ authentication })

const mapDispatchToProps = dispatch => ({
  // handleOnLogin (form) {
  //   dispatch(login(form))
  // }
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)


