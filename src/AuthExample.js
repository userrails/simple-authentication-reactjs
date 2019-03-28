import { AuthButton } from './AuthButton';
import React, {Component} from 'react';
import { PrivateRoute } from './PrivateRoute';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Public from './Public'
import Protected from './Protected'
import Login from './Login'

class AuthExample extends Component {
  render () {
    return (
      <Router>
        <div>
        <AuthButton />
        <ul>
          <li><Link to="/public">Public Page</Link></li>
          <li><Link to="/protected">Protected Page</Link></li>
        </ul>
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path='/protected' component={Protected} />
      </div>
    </Router>
      )
  }
}

export default AuthExample;