import React from 'react';
import auth from '../utils/auth';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';
require('../style/Styles.css');
var purpleBackground = require("../assets/purple-background.jpg");
var typeIcon = require("../assets/white-dress.png");
var colorIcon = require("../assets/color-flower.png");
var timeIcon = require("../assets/hourglass.png");


const App = React.createClass ({
  render: function() {
    return (
      <div className="app">
        <div className="header">
          <div className="menuIcon"><Link className="linkDarkBG" to={'/settings'}><hr/><hr/><hr/></Link></div>
          <div><Link className="linkDarkBG title" to={'/'}>PB</Link></div>
          <div className="addIcon"><Link className="linkDarkBG" to={'/addnew'}>+</Link></div>
        </div>

        <div className="appbody">
          {this.props.children}
        </div>

        <div className="footer">
          <div className="typeIcon"><Link className="linkLightBG" to={'/type-filter'}><img src={typeIcon} className="typeIconImage"/></Link></div>

          <div className="typeIcon"><Link className="linkLightBG" to={'/color-filter'}><img src={colorIcon} className="colorIconImage"/></Link></div>

          <div className="typeIcon"><Link className="linkLightBG" to={'/time-filter'}><img src={timeIcon} className="timeIconImage"/></Link></div>
        </div>
      </div>
    )}
})


export default App;
