import React from 'react';
import auth from '../utils/auth';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';
require('../style/Styles.css');
import {Form, Input, Icon} from 'react-materialize';
var Button = require('react-bootstrap').Button;
var sun = require("../assets/sun.png");
var rain = require("../assets/rain.png");
var skirt = require("../assets/skirt.png");
var pants = require("../assets/pants.png");
var tanktop = require("../assets/tanktop.png");

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
      <div className="login">
        <h2 className="titleMain">Purple Boom</h2>
        <div className="jumbotrone">
          <div className="jumbotronIconCont">
            <img className="jumbotroneIcon" src={pants}/>
            <img className="jumbotroneIcon" src={rain}/>
            <img className="jumbotroneIcon" src={tanktop}/>
            <img className="jumbotroneIcon" src={sun}/>
            <img className="jumbotroneIcon" src={skirt}/>
          </div>

          <p className="jumbotroneText">Your wardrobe. Awesome. Any weather</p></div>
        <div className="loginform">
          <div>Sign Up</div>
          <br/>
          <div>
            <input className="loginfield" placeholder='email' label="email" type='email' name='email' onChange={ e => this.setState({email: e.target.value}) }/>
            <br/><br/>
            <input className="loginfield" placeholder='password' label="password" type='password' name='password' onChange={ e => this.setState({password: e.target.value}) }/>
            <br/><br/>
            <input className="loginfield" placeholder='confirm password' label="password" type='password' name='password' onChange={ e => this.setState({passwordConfirmation: e.target.value}) }/>
            <br/><br/>

            <Link to={'/viewclothes'}>
            <Button>Enter</Button></Link>
            <br/><br/>
            <Link className="signUpLink" to={'/signin'}>Log In</Link>

          </div>
        </div>

      </div>
    )
  }
})

export default Signup;
