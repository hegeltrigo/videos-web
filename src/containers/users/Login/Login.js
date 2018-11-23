import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from '../../../store/actions/userActions'
import classes from './Login.css'
import Button from '../../../UI/Button/Button'
import Logo from '../../../components/Logo/Logo'

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
      <div className={classes.Login}>
        <form onSubmit={this.handleSubmit} className={classes.form}>
          <div className={classes.Logo}><Logo/></div>
          <div>
            
            <input
              type='text'
              name='email'
              placeholder="Email"
              onChange={ev => {
                this.setState({
                  form: { ...this.state.form, email: ev.target.value }
                })
              }}
            />
          </div>
          <div>
            
            <input
              type='password'
              name='password'
              placeholder="Password"
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
         
          <Button buttonType="Success" clicked={this.handleSubmit}>Login</Button>
          <div> {authentication.loading && 'Cargando...'} </div>
        </form>          
       
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
