import React from 'react';
import auth from '../utils/auth';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';

const AboutApp = React.createClass ({
  render: function() {
    return (
      <div>About App</div>
      )}
  })

export default AboutApp;
