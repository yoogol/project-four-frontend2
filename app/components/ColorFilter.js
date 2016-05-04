import React from 'react';
import auth from '../utils/auth';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';

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
      <div style={menuStyle}>
        <hr></hr>
        <input type="checkbox" value="red" onChange={this.handleSelection} />red
        <hr></hr>
        <input type="checkbox" value="orange" onChange={this.handleSelection} />orange
        <hr></hr>
        <input type="checkbox" value="yellow" onChange={this.handleSelection} />yellow
        <hr></hr>
        <input type="checkbox" value="green" onChange={this.handleSelection} />green
        <hr></hr>
        <input type="checkbox" value="blue" onChange={this.handleSelection}/>blue
        <hr></hr>
        <input type="checkbox" value="purple" onChange={this.handleSelection}/>purple
        <hr></hr>
        <input type="checkbox" value="white" onChange={this.handleSelection}/>white
        <hr></hr>
        <input type="checkbox" value="brown" onChange={this.handleSelection}/>brown
        <hr></hr>
        <input type="checkbox" value="black" onChange={this.handleSelection}/>black
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

export default ColorFilter;
