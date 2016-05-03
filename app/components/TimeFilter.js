import React from 'react';
import auth from '../utils/auth';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';

const TimeFilter = React.createClass ({
  render: function() {
    return (
      <div style={menuStyle}>
        <hr></hr>
        <input type="checkbox">Over a month</input>
        <hr></hr>
        <input type="checkbox">Over 3 weeks</input>
        <hr></hr>
        <input type="checkbox">Over 2 weeks</input>
        <hr></hr>
        <input type="checkbox">Over 1 week</input>
        <hr></hr>
        <input type="checkbox">Over 3 days</input>
        <hr></hr>
        <input type="checkbox">Not yesterday</input>
        <hr></hr>
        <button>Done</button>
      </div>
    )
  }
})


let menuStyle = {
  textAlign: "center",
  fontSize: 15,
  minHeight: 400
}

export default TimeFilter;
