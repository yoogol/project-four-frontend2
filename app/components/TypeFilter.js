import React from 'react';
import auth from '../utils/auth';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';

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
      <div style={menuStyle}>
        <hr></hr>
        <div>TOPS</div>
        <hr></hr>
        <input type="checkbox" value="blouse" onChange={this.handleSelection}/>blouse
        <hr></hr>
        <input type="checkbox" value="sweater" onChange={this.handleSelection}/>sweater
        <hr></hr>
        <input type="checkbox" value="sweater" onChange={this.handleSelection}/>sweater
        <hr></hr>
        <input type="checkbox" value="turtle neck" onChange={this.handleSelection}/>turtle neck
        <hr></hr>
        <input type="checkbox" value="tank top" onChange={this.handleSelection}/>tank top
        <hr></hr>
        <input type="checkbox" value="shirt" onChange={this.handleSelection}/>shirt
        <hr></hr>
        <input type="checkbox" value="t-shirt" onChange={this.handleSelection}/>t-shirt
        <hr></hr>
        <input type="checkbox" value="sweatshirt" onChange={this.handleSelection}/>sweatshirt
        <hr></hr>
        <input type="checkbox" value="jacket" onChange={this.handleSelection}/>jacket
        <hr></hr>
        <div>BOTTOMS</div>
        <hr></hr>
        <input type="checkbox" value="skirt" onChange={this.handleSelection}/>skirt
        <hr></hr>
        <input type="checkbox" value="parnts" onChange={this.handleSelection}/>parnts
        <hr></hr>
        <input type="checkbox" value="jeans" onChange={this.handleSelection}/>jeans
        <hr></hr>
        <input type="checkbox" value="jeans" onChange={this.handleSelection}/>jeans
        <hr></hr>
        <input type="checkbox" value="sweatpants" onChange={this.handleSelection}/>sweatpants
        <hr></hr>
        <input type="checkbox" value="shorts" onChange={this.handleSelection}/>shorts
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
export default TypeFilter;
