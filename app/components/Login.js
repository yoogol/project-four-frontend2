import React from 'react';
import auth from '../utils/auth';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';

const Login = React.createClass ({
  getInitialState: function() {
    return {
      email: '',
      password: '',
      error: false,
      successMsg: ''
    }
  },

  handleLogin: function(e){
    var callbackAfterLogin = function(success) {
      if (!success) {
        return this.setState({ error: true });
      } else {
        this.setState({successMsg: 'Successfully logged in'});
        const location = this.props.location;
        console.log(location);
        if (location.state && location.state.nextPathname) {
          this.props.history.push(location.state.nextPathname);
        } else {
          this.props.history.push('/');
        }
      }
    }.bind(this);

    auth.login(this.state.email, this.state.password, callbackAfterLogin);
  },

  render: function() {
    return (
      <div>
        <h2>Purple Boom</h2>
        <div>IMAGE GOES HERE</div>
        <div>Login</div>
        <div>
          <input placeholder='email' type='email' name='email' onChange={ e => this.setState({email: e.target.value}) } />
          <input placeholder='password' type='password' name='password' onChange={ e => this.setState({password: e.target.value}) } />
          <button onClick={ () => this.handleLogin() }>Submit</button>
          <p>{"Don't have an account?"}<Link to={'/signup'}>Sign Up</Link></p>
          <p>{this.state.successMsg}</p>
        </div>
      </div>
    )
  }
})

export default Login;
