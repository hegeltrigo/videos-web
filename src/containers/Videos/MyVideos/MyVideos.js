import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'

export class MyVideos extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <h1>My Videos</h1>
      </div>
    )
  }
}

export default MyVideos;

// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MyVideos)
