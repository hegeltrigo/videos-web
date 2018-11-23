import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from '../../../store/actions/userActions'

export class Login extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  state = {
    token: '',
    form: {}
  }

  handleSubmit = event => {
    event.preventDefault()
    const { handleOnLogin } = this.props
    handleOnLogin(this.state.form)
  }



  render() {
    const { authentication } = this.props


    return (
      <div>
        <div className='container-fluid'>
            <div className='row'>
              <div className='col-xs-12 col-sm-6'>
                <div className='title-modal-login'>
                  <h4>Log In</h4>
                </div>
                <form onSubmit={this.handleSubmit}>
                  <div className='FormInput'>
                    
                    <input
                      type='text'
                      className='FormInput-Input'
                      name='email'
                      onChange={ev => {
                        this.setState({
                          form: { ...this.state.form, email: ev.target.value }
                        })
                      }}
                    />
                  </div>
                  <div className='FormInput'>
                    
                    <input
                      type='password'
                      className='FormInput-Input'
                      name='password'
                      onChange={ev => {
                        this.setState({
                          form: {
                            ...this.state.form,
                            password: ev.target.value
                          }
                        })
                      }}
                    />
                  </div>
                  <button onClick={this.handleSubmit} className='button-login'>
                    Login
                  </button>
                  <div> {authentication.loading && 'Cargando...'} </div>
                </form>
                <hr></hr>

                
              </div>
              <div className='hidden-xs col-sm-6'>
                <div className='image-login' />
              </div>
            </div>
          </div>

      </div>
    )
  }
}

const mapStateToProps = ({ authentication }) => ({ authentication })

const mapDispatchToProps = dispatch => ({
  handleOnLogin (form) {
    dispatch(login(form))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
