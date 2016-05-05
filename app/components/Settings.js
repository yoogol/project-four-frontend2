import React from 'react';
import auth from '../utils/auth';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';
require('../style/Styles.css');

const Settings = React.createClass ({
  render: function() {
    return (
      <div className="filterMenu">
        <hr></hr>
        <Link className="linkLightBG" to={'/myhistory/'}>My Outfit History</Link>
        <hr></hr>
        <Link className="linkLightBG" to={'/profile/'}>My Profile</Link>
        <hr></hr>
        <input type="checkbox" onChange={this.handleWeatherFilter} />Weather Filter
        <hr></hr>
        <Link className="linkLightBG" to={'/about/'}>About This App</Link>
        <hr></hr>
        <Link className="linkLightBG" to={'/logout/'}></Link>
      </div>
    )
  }
})



export default Settings;
