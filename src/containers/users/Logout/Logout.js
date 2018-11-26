import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import {logout} from '../../store/../../store/actions/userActions'


export class Logout extends Component {
  
  componentDidMount = () => {
     const { handleOnLogout } = this.props
    handleOnLogout()
  }

  render() {
    return (
      <div>
        <Redirect to='/' />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  handleOnLogout () {
    dispatch(logout())
  }
})

export default connect(null, mapDispatchToProps)(Logout)
