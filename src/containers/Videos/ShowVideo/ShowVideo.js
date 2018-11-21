import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'

export class ShowVideo extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <h1>Show Video</h1>
      </div>
    )
  }
}

export default ShowVideo;

// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ShowVideo)
