import React from 'react';
import auth from '../utils/auth';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';

const TimeFilter = React.createClass ({
  getInitialState: function() {
    return {
      filter: ["time"]
    }
  },
  handleSelection: function(e) {
    console.log(e.target.value);
    var timeArray = this.state.filter;
    timeArray.push(e.target.value);
    this.setState ({
      filter: timeArray
    })
  },
  render: function() {
    return (
      <div style={menuStyle}>
        <hr></hr>
        <input type="checkbox" value="over1month" onChange={this.handleSelection}/>Over a month
        <hr></hr>
        <input type="checkbox" value="over3weeks" onChange={this.handleSelection}/>Over 3 weeks
        <hr></hr>
        <input type="checkbox" value="over2weeks" onChange={this.handleSelection}/>Over 2 weeks
        <hr></hr>
        <input type="checkbox" value="over1week" onChange={this.handleSelection}/>Over 1 week
        <hr></hr>
        <input type="checkbox" value="over3days" onChange={this.handleSelection}/>Over 3 days
        <hr></hr>
        <input type="checkbox" value="not-yesterday" onChange={this.handleSelection}/>Not yesterday
        <hr></hr>
        <Link to={'/viewclothes/' + this.state.filter}><button>Done</button></Link>
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
