import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import fakeAuth from './fakeAuth';

class Login extends Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }

  render () {
    const { from } = this.props.location.state || { from: { path: '/' }}
    const { redirectToReferrer } = this.state
    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }
    return (
      <div>
        <p>You must login to view the page</p>
        <button onClick={this.login}>Login</button>
      </div>
      )
  }
}

export default Login;