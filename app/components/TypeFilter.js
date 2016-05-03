import React from 'react';
import auth from '../utils/auth';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';

const TypeFilter = React.createClass ({
  getInitialState: function() {
    return {
      types: []
    }
  },
  handleSelection: function(e) {
    console.log(e.target.value);
    var typesArray = this.state.types;
    typesArray.push(e.target.value);
    this.setState ({
      types: typesArray
    })
  },
  render: function() {
    return (
      <div style={menuStyle}>
        <hr></hr>
        <div>TOPS</div>
        <hr></hr>
        <input type="checkbox" value="blouse" onChange={this.handleSelection}>blouse</input>
        <hr></hr>
        <input type="checkbox" value="sweater" onChange={this.handleSelection}>sweater</input>
        <hr></hr>
        <input type="checkbox" value="sweater" onChange={this.handleSelection}>sweater</input>
        <hr></hr>
        <input type="checkbox" value="turtle neck" onChange={this.handleSelection}>turtle neck</input>
        <hr></hr>
        <input type="checkbox" value="tank top" onChange={this.handleSelection}>tank top</input>
        <hr></hr>
        <input type="checkbox" value="shirt" onChange={this.handleSelection}>shirt</input>
        <hr></hr>
        <input type="checkbox" value="t-shirt" onChange={this.handleSelection}>t-shirt</input>
        <hr></hr>
        <input type="checkbox" value="sweatshirt" onChange={this.handleSelection}>sweatshirt</input>
        <hr></hr>
        <input type="checkbox" value="jacket" onChange={this.handleSelection}>jacket</input>
        <hr></hr>
        <div>BOTTOMS</div>
        <hr></hr>
        <input type="checkbox" value="skirt" onChange={this.handleSelection}>skirt</input>
        <hr></hr>
        <input type="checkbox" value="parnts" onChange={this.handleSelection}>parnts</input>
        <hr></hr>
        <input type="checkbox" value="jeans" onChange={this.handleSelection}>jeans</input>
        <hr></hr>
        <input type="checkbox" value="jeans" onChange={this.handleSelection}>jeans</input>
        <hr></hr>
        <input type="checkbox" value="sweatpants" onChange={this.handleSelection}>sweatpants</input>
        <hr></hr>
        <input type="checkbox" value="shorts" onChange={this.handleSelection}>shorts</input>
        <hr></hr>
        <Link to={'/viewclothes/' + this.state.types}><button>Done</button></Link>
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
