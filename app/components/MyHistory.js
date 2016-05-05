import React from 'react';
import auth from '../utils/auth';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';
require('../style/Styles.css');

const MyHistory = React.createClass ({
  render: function() {
    return (
      <div>MyHistory</div>
      )}
  })

export default MyHistory;
