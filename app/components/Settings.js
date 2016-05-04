import React from 'react';
import auth from '../utils/auth';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';

const Settings = React.createClass ({
  render: function() {
    return (
      <div style={menuStyle}>
        <hr></hr>
        <Link style={linkStyle} to={'/myhistory/'}>My Outfit History</Link>
        <hr></hr>
        <Link style={linkStyle} to={'/profile/'}>My Profile</Link>
        <hr></hr>
        <input type="checkbox" onChange={this.handleWeatherFilter} />Weather Filter
        <hr></hr>
        <Link style={linkStyle} to={'/about/'}>About This App</Link>
        <hr></hr>
        <Link style={linkStyle} to={'/logout/'}></Link>
      </div>
    )
  }
})

let menuStyle = {
textAlign: "center",
fontSize: 15,
minHeight: 400
}

let linkStyle = {
  textDecoration: "none",
  color: "black"
}



export default Settings;
