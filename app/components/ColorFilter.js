import React from 'react';
import auth from '../utils/auth';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';
require('../style/Styles.css');
var ScrollArea = require('react-scrollbar');
var Button = require('react-bootstrap').Button;

const ColorFilter = React.createClass ({
  getInitialState: function() {
    return {
      filter: ["colors"]
    }
  },
  handleSelection: function(e) {
    console.log(e.target.value);
    var colorArray = this.state.filter;
    colorArray.push(e.target.value);
    this.setState ({
      filter: colorArray
    })
  },
  render: function() {
    return (
      <ScrollArea
        speed={0.8}
        smoothScrolling={true}
        className="scrollarea">
      <div className="filterMenu">
        <hr className="menuLine"/>
        <label className="red">red</label>
        <input className="checkLine" type="checkbox" value="red" onChange={this.handleSelection} />


        <hr className="menuLine"/>
        <label className="orange">orange</label>
        <input className="checkLine" type="checkbox" value="orange" onChange={this.handleSelection} />
        <hr className="menuLine"/>
        <label className="yellow">yellow</label>
        <input className="checkLine" type="checkbox" value="yellow" onChange={this.handleSelection} />
        <hr className="menuLine"/>
        <label className="green">green</label>
        <input className="checkLine" type="checkbox" value="green" onChange={this.handleSelection} />
        <hr className="menuLine"/>
        <label className="blue">blue</label>
        <input className="checkLine" type="checkbox" value="blue" onChange={this.handleSelection}/>
        <hr className="menuLine"/>
        <label className="purple">purple</label>
        <input className="checkLine" type="checkbox" value="purple" onChange={this.handleSelection}/>

        <hr className="menuLine"/>
        <label className="brown">brown</label>
        <input className="checkLine" type="checkbox" value="brown" onChange={this.handleSelection}/>

        <hr className="menuLine"/>
        <label className="black">black</label>
        <input className="checkLine" type="checkbox" value="black" onChange={this.handleSelection}/>


        <hr className="menuLine"/>
        <label className="grey">grey</label>
        <input className="checkLine" type="checkbox" value="black" onChange={this.handleSelection}/>

        <hr className="menuLine"/>
        <label className="white">white</label>
        <input className="checkLine" type="checkbox" value="white" onChange={this.handleSelection}/>
        <br/>


        <Link className="allSetButton" to={'/viewclothes/' + this.state.filter}><Button  onClick={this.wearItToday} active>All Set!</Button></Link>

      </div>
      </ScrollArea>
    )
  }
})


export default ColorFilter;
