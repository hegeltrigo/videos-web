import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'

export class Login extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <h1>Login View</h1>
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login)
export default Login;