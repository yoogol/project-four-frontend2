import React from 'react';
import auth from '../utils/auth';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';

const App = React.createClass ({
  render: function() {
    return (
      <div style={appStyle}>
        <div style={headerStyle}>
          <div style={elementStyle}><Link style={linkStyle} to={'/settings'}>Menu</Link></div>
          <div style={elementStyle}><Link style={linkStyle} to={'/'}>PB</Link></div>
          <div style={elementStyle}><Link style={linkStyle} to={'/addnew'}>Add</Link></div>
        </div>
        {this.props.children}
        <div style={footerStyle}>
          <div style={elementStyle}><Link style={linkStyle} to={'/type-filter'}>Type</Link></div>
          <div style={elementStyle}><Link style={linkStyle} to={'/color-filter'}>Color</Link></div>
          <div style={elementStyle}><Link style={linkStyle} to={'/time-filter'}>Time</Link></div>
        </div>
      </div>
    )}
})

let headerStyle = {
  display: "flex",
  justifyContent: "space-around",
  height: 50,
  background: "indigo",
  color: "white"
}

let bodyStyle = {
  minHeight: 400,
  padding: "auto",
  margin: "auto",
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "column",
  alignItems: "center"
}

let footerStyle = {
  display: "flex",
  justifyContent: "space-around",
  minHeight: 30,
  background: "indigo",
  color: "white"
}

let linkStyle = {
  textDecoration: "none",
  color: "white"
}

let elementStyle = {
  paddingTop: "1%"
}

let appStyle = {
  width: "70%",
  margin: "auto"
}

let topStyle = {
  height: 100,
  position: "relative"
}
let bottomStyle = {
  height: 150,
  position: "relative",
  bottom: 30
}
let shoesStyle = {
  height: 50,
  position: "relative"
}

let layerStyle = {
  margin: "auto",
  color: "red",
  width: 300,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}


export default App;
