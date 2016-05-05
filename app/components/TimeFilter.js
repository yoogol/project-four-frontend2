import React from 'react';
import auth from '../utils/auth';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';
require('../style/Styles.css');
var ScrollArea = require('react-scrollbar');
var Button = require('react-bootstrap').Button;

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
      <ScrollArea
        speed={0.5}
        smoothScrolling={true}
        className="scrollarea">
      <div className="filterMenu">
        <hr className="menuLine"/>
        <input className="checkLine" type="checkbox" value="over1month" onChange={this.handleSelection}/>
        <label>Over a month</label>
        <hr className="menuLine"/>
        <input className="checkLine" type="checkbox" value="over3weeks" onChange={this.handleSelection}/>
        <label>Over 3 weeks</label>
        <hr className="menuLine"/>
        <input className="checkLine" type="checkbox" value="over2weeks" onChange={this.handleSelection}/>
        <label>Over 2 weeks</label>
        <hr className="menuLine"/>
        <input className="checkLine" type="checkbox" value="over1week" onChange={this.handleSelection}/>
        <label>Over 1 week</label>
        <hr className="menuLine"/>
        <input className="checkLine" type="checkbox" value="over3days" onChange={this.handleSelection}/>
        <label>Over 3 days</label>
        <hr className="menuLine"/>
        <input className="checkLine" type="checkbox" value="not-yesterday" onChange={this.handleSelection}/>
        <label>Not yesterday</label>
        <br/>

        <Link className="allSetButton" to={'/viewclothes/' + this.state.filter}><Button active>All Set!</Button></Link>
      </div>
      </ScrollArea>
    )
  }
})

export default TimeFilter;
