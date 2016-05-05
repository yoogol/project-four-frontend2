import React from 'react';
import auth from '../utils/auth';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';
require('../style/Styles.css');
var ScrollArea = require('react-scrollbar');
var Button = require('react-bootstrap').Button;

const TypeFilter = React.createClass ({
  getInitialState: function() {
    return {
      filter: ["types"]
    }
  },
  handleSelection: function(e) {
    console.log(e.target.value);
    if (this.state.filter.indexOf(e.target.value) < 0) {
      var typesArray = this.state.filter;
      typesArray.push(e.target.value);
      this.setState ({
        filter: typesArray
      })
    } else {
      var typesArray = this.state.filter;
      typesArray.split(e.target.value).join();
      console.log(typesArray);
      this.setState ({
        filter: typesArray
      })
    }

  },
  render: function() {
    return (
      <ScrollArea
        speed={0.5}>
      <div className="filterMenu">
        <hr/>
        <div>TOPS</div>
        <hr/>
        <label>blouse</label>
        <input className="checkLine" className="checkLine" type="checkbox" value="blouse" onChange={this.handleSelection}/>
        <hr/><label>sweater</label>
        <input className="checkLine" type="checkbox" value="sweater" onChange={this.handleSelection}/>
        <hr/><label>cardigan</label>
        <input className="checkLine" type="checkbox" value="sweater" onChange={this.handleSelection}/>
        <hr/><label>turtle neck</label>
        <input className="checkLine" type="checkbox" value="turtle neck" onChange={this.handleSelection}/>
        <hr/><label>tank top</label>
        <input className="checkLine" type="checkbox" value="tank top" onChange={this.handleSelection}/>
        <hr/><label>shirt</label>
        <input className="checkLine" type="checkbox" value="shirt" onChange={this.handleSelection}/>
        <hr/><label>t-shirt</label>
        <input className="checkLine" type="checkbox" value="t-shirt" onChange={this.handleSelection}/>
        <hr/><label>sweatshirt</label>
        <input className="checkLine" type="checkbox" value="sweatshirt" onChange={this.handleSelection}/>
        <hr/><label>jacket</label>
        <input className="checkLine" type="checkbox" value="jacket" onChange={this.handleSelection}/>
        <hr/>
        <div>BOTTOMS</div>
        <hr/>
        skirt
        <input className="checkLine" type="checkbox" value="skirt" onChange={this.handleSelection}/>
        <hr/>pants
        <input className="checkLine" type="checkbox" value="parnts" onChange={this.handleSelection}/>
        <hr/>jeans
        <input className="checkLine" type="checkbox" value="jeans" onChange={this.handleSelection}/>
        <hr/>sweatpants
        <input className="checkLine" type="checkbox" value="sweatpants" onChange={this.handleSelection}/>
        <hr/>shorts
        <input className="checkLine" type="checkbox" value="shorts" onChange={this.handleSelection}/>
        <hr/>
        <Link to={'/viewclothes/' + this.state.filter}><Button onClick={this.wearItToday} active>Wear it today</Button></Link>
      </div>
      </ScrollArea>
    )
  }
})

export default TypeFilter;
