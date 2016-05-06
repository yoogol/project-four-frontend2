import React from 'react';
import auth from '../utils/auth';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';
require('../style/Styles.css');

const AboutApp = React.createClass ({
  render: function() {
    console.log(process.env.WeatherUndergroundAPIKey);
    return (
      <div className="aboutText"><p>Purple Boom is one girl's dream come true.</p><p>Since the age of 15 I dreamt about a tool that would help me easily see and manage all of my clothes that were sadly trapped in my tiny, crowded closet. More than that, I dreamt about building such a tool myself.</p>
      <p>This app was designed as part of my final project at General Assembly immersive fullstack development program where I learned web programming from scratch in 3 months.</p>
      <p><a className="linkLightBG" href="https://www.linkedin.com/in/yuliashea">Yulia Shea</a></p>
      </div>
      )}
  })

export default AboutApp;
