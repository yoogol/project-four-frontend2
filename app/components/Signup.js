import React from 'react';
import auth from '../utils/auth';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';

const Signup = React.createClass ({
  getInitialState: function() {
    return {
      email: '',
      password: '',
      passwordConfirmation: '',
      error: false,
      successMsg: ''
    }
  },

  handleSignup: function(e){
    var callbackAfterSignup = function(success) {
      if (!success) {
        console.log('There was an error');
        return this.setState({ error: true });
      } else {
        // successfully signed up
        this.props.history.push('/');
      }
    }.bind(this);

    auth.signup(this.state.email, this.state.password, this.state.passwordConfirmation, callbackAfterSignup);
  },

  render: function() {
    return (
      <div>
        <h2>Purple Boom</h2>
        <div>IMAGE GOES HERE</div>
        <div>Signup</div>
          <div>
            <input placeholder='email' type='email' name='email' onChange={ e => this.setState({email: e.target.value}) } />
            <input placeholder='password' type='password' name='password' onChange={ e => this.setState({password: e.target.value}) } />
            <input placeholder='password confirmation' type='password' name='passwordConf' onChange={ e => this.setState({passwordConfirmation: e.target.value}) } />
            <button onClick={ () => this.handleSignup() }>Submit</button>
            <p>Already have an account?<Link to={'/'}>Sign In</Link></p>
            <p>{this.state.successMsg}</p>
          </div>
      </div>
      )}
  })

export default Signup;
