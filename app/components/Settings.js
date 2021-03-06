import React from 'react';
import auth from '../utils/auth';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';
require('../style/Styles.css');
var Button = require('react-bootstrap').Button;
var FontAwesome = require('react-fontawesome');


const Settings = React.createClass ({
  getInitialState: function() {
    return ({
      weatherToggle: false,
      iconToggle: "off"
    })
  },
  handleWeatherFilter: function() {
    if (this.state.weatherToggle == true) {
      this.setState ({
        weatherToggle: false,
        iconToggle: "on"
      })
    } else {
      this.setState({
        weatherToggle: true,
        iconToggle: "on"
      })
    }
  },
  render: function() {
    return (
      <div className="settingsMenu">
        <hr className="menuLine"/>
        <Link className="settingsMenu linkLightBG" to={'/myhistory/'}>My Outfit History</Link>
        <hr className="menuLine"/>
        <Link className="linkLightBG" to={'/profile/'}>My Profile</Link>
        <hr className="menuLine"/>
        <p>Weather Filter</p>
          <i className={"fa fa-toggle-" + this.state.iconToggle} aria-hidden="true" onClick={this.handleWeatherFilter} ></i>
        <hr className="menuLine"/>
        <Link className="linkLightBG" to={'/about/'}>About This App</Link>
        <hr className="menuLine"/>
        <Link className="linkLightBG" to={'/logout/'}></Link>

        <Link className="allSetButton" to={'/viewclothes/' + this.state.weatherToggle}><button className="purpleButton" onClick={this.wearItToday}>All Set!</button></Link>
      </div>
    )
  }
})



export default Settings;
