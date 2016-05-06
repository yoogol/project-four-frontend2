import React from 'react';
import auth from '../utils/auth';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  Link,
  browserHistory,
  IndexRoute,
  withRouter
} from 'react-router';
require('../style/Styles.css');
var ScrollArea = require('react-scrollbar');
var Button = require('react-bootstrap').Button;

const TypeFilter = React.createClass({
  getInitialState: function() {
    return {filter: ["types"]}
  },
  handleSelection: function(e) {
    console.log(e.target.value);
    if (this.state.filter.indexOf(e.target.value) < 0) {
      var typesArray = this.state.filter;
      typesArray.push(e.target.value);
      this.setState({filter: typesArray})
    } else {
      var typesArray = this.state.filter;
      typesArray.split(e.target.value).join();
      console.log(typesArray);
      this.setState({filter: typesArray})
    }

  },
  render: function() {
    return (
      <ScrollArea speed={0.5} smoothScrolling={true} className="scrollarea">
        <div className="filterMenu">
          <p className="menuTitle">select clothes types</p>
          <div className="category">TOPS</div>

          <hr className="menuLine"/>
          <label>blouse</label>
          <input className="checkLine" type="checkbox" value="blouse" onChange={this.handleSelection}/>
          <hr className="menuLine"/>
          <label>cardigan</label>
          <input className="checkLine" type="checkbox" value="sweater" onChange={this.handleSelection}/>
          <hr className="menuLine"/>
          <label>jacket</label>
          <input className="checkLine" type="checkbox" value="jacket" onChange={this.handleSelection}/>
          <hr className="menuLine"/>
          <label>tank top</label>
          <input className="checkLine" type="checkbox" value="tank top" onChange={this.handleSelection}/>
          <hr className="menuLine"/>
          <label>t-shirt</label>
          <input className="checkLine" type="checkbox" value="t-shirt" onChange={this.handleSelection}/>
          <hr className="menuLine"/>
          <label>turtle neck</label>
          <input className="checkLine" type="checkbox" value="turtle neck" onChange={this.handleSelection}/>
          <hr className="menuLine"/>
          <label>shirt</label>
          <input className="checkLine" type="checkbox" value="shirt" onChange={this.handleSelection}/>
          <hr className="menuLine"/>
          <label>sweater</label>
          <input className="checkLine" type="checkbox" value="sweater" onChange={this.handleSelection}/>
          <hr className="menuLine"/>
          <label>sweatshirt</label>
          <input className="checkLine" type="checkbox" value="sweatshirt" onChange={this.handleSelection}/>
          <hr className="menuLine"/>

          <div className="category">BOTTOMS</div>
          <hr className="menuLine"/>
          <label>jeans</label>
          <input className="checkLine" type="checkbox" value="jeans" onChange={this.handleSelection}/>
          <hr className="menuLine"/>
          <label>pants</label>
          <input className="checkLine" type="checkbox" value="pants" onChange={this.handleSelection}/>
          <hr className="menuLine"/>
          <label>shorts</label>
          <input className="checkLine" type="checkbox" value="shorts" onChange={this.handleSelection}/>
          <hr className="menuLine"/>
          <label>skirt</label>
          <input className="checkLine" type="checkbox" value="skirt" onChange={this.handleSelection}/>
          <hr className="menuLine"/>
          <label>sweatpants</label>
          <input className="checkLine" type="checkbox" value="sweatpants" onChange={this.handleSelection}/>
          <hr className="menuLine"/>

          <div className="category">SHOES</div>
          <hr className="menuLine"/>
          <label>boots</label>
          <input className="checkLine" type="checkbox" value="boots" onChange={this.handleSelection}/>
          <hr className="menuLine"/>
          <label>flip-flops</label>
          <input className="checkLine" type="checkbox" value="flip-flops" onChange={this.handleSelection}/>
          <hr className="menuLine"/>
          <label>sandals</label>
          <input className="checkLine" type="checkbox" value="sandals" onChange={this.handleSelection}/>
          <hr className="menuLine"/>
          <label>shoes</label>
          <input className="checkLine" type="checkbox" value="shoes" onChange={this.handleSelection}/>
          <hr className="menuLine"/>
          <label>sneakers</label>
          <input className="checkLine" type="checkbox" value="sneakers" onChange={this.handleSelection}/>
          <hr className="menuLine"/>

          <br/>

          <Link className="allSetButton" to={'/viewclothes/' + this.state.filter}>
            <button className="purpleButton" onClick={this.wearItToday}>All Set!</button>
          </Link>
        </div>
      </ScrollArea>
    )
  }
})

export default TypeFilter;
