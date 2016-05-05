import React from 'react';
import auth from '../utils/auth';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';
var Dropzone = require('react-dropzone');
require('../style/Styles.css');
var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem;


const AddNewForm = React.createClass ({
  getInitialState: function() {
    return {
      category: 'select',
      image: '',
      type: 'select',
      color: 'select',
      files: '',
      data_uri: null
    }
  },
  onDrop: function (files) {
    console.log(files);
    this.setState({
      files: files[0]
    });
    var file = files[0];
    var self = this;
    var reader = new FileReader();
    reader.onload = function(upload) {
      self.setState({
        data_uri: upload.target.result,
      });
    };
    reader.readAsDataURL(file);
  },

  onOpenClick: function () {
    this.refs.dropzone.open();
  },

  handleAdd: function(e) {
    var callbackAfterSubmit = function(success) {
      if (!success) {
        return this.setState({ error: true })
      } else {
        this.setState({successMsg: "Succesfully added new item"});
        const location = this.props.location;
        console.log(location);
        if (location.state && location.state.nextPathname) {
          this.props.history.push(location.state.nextPathname);
        } else {
          this.props.history.push('/viewclothes')
        }
      }
      this.setState ({
        category: "",
        type: "",
        color: ""
      })
    }.bind(this);
//I LEFT IT HERE - add logic for ajaxcall
  // let newClothesToAdd = {
  //   image: this.state.data_uri,
  //   type: this.state.type,
  //   color: this.state.color,
  // }
  ajaxHelpers.addNew(this.state.image, this.state.type, this.state.color, callbackAfterSubmit)
  },
  handleCategory: function(e) {
    console.log(e.target.value);
    this.setState ({
      category: e.target.value
    })
  },
  handleType: function(e) {
    console.log(e.target.value);
    this.setState ({
      type: e.target.value
    })
  },

  handleColor: function(e) {
    console.log(e.target.value);
    this.setState ({
      color: e.target.value
    })
  },
  displayTypeDropdown: function() {
    console.log("RERENDERING")
    if (this.state.category == "top") {
      return (
      <select className="dropdown"
        title="Item Type"
        onChange={this.handleType} value={this.state.type}
        >
        <option selected>Type</option>
        <option value={"blouse"}>blouse</option>
        <option value={"sweater"}>sweater</option>
        <option value={"cardigan"}>cardigan</option>
        <option value={"turtle neck"}>turtle neck</option>
        <option value={"tank top"}>tank top</option>
        <option value={"shirt"}>shirt</option>
        <option value={"t-shirt"}>t-shirt</option>
        <option value={"sweatshirt"}>sweatshirt</option>
        <option value={"jacket"}>jacket</option>
      </select>
    )
    } else if (this.state.category == "bottom") {
      return (
        <select className="dropdown"
          title="Item Type"
          onChange={this.handleType} value={this.state.type}
          >
          <option selected>Type</option>
          <option value={"skirt"}>skirt</option>
          <option value={"pants"}>pants</option>
          <option value={"jeans"}>jeans</option>
          <option value={"sweatpants"}>sweatpants</option>
          <option value={"shorts"}>shorts</option>
        </select>
      )
    } else if (this.state.category == "shoes") {
      return (
        <select className="dropdown"
          title="Item Type"
          onChange={this.handleType} value={this.state.type}
          >
          <option selected>Type</option>
          <option value={"skirt"}>skirt</option>
          <option value={"pants"}>pants</option>
          <option value={"jeans"}>jeans</option>
          <option value={"sweatpants"}>sweatpants</option>
          <option eventKey={"shorts"}>shorts</option>
        </select>
      )
    }
  },

  displayImage: function() {
    if (this.state.image) {
      return(
        <img className="previewImage" src={this.state.image}/>
      )
    }
  },
  render: function() {
    return (
      <div>
          <div className="appbody">
            {/* <div>
             <Dropzone ref="dropzone" onDrop={this.onDrop} >
                <div>Try dropping some files here, or click to select files to upload.</div>
              </Dropzone>
              <button type="button" onClick={this.onOpenClick}>
                  Open Dropzone
              </button>
            </div>
            <img className="previewImage" src={this.state.files.preview} />
            */}


            <input placeholder='Image link' name='image' onChange={ e => this.setState({image:e.target.value})} />
            {this.displayImage()}
            <select className="dropdown"
              onChange={this.handleCategory} value={this.state.category}
              >Category
              <option value={"category"} selected>Category</option>
              <option value={"top"}>top</option>
              <option value={"bottom"}>bottom</option>
              <option value={"shoes"}>shoes</option>
            </select>
            {this.displayTypeDropdown()}
            <select className="dropdown"
              onChange={this.handleColor} value={this.state.color}
              >Color
              <option selected>Color</option>
              <option value={"red"} selected>red</option>
              <option value={"blue"}>blue</option>
              <option value={"yellow"}>yellow</option>
              <option value={"purple"}>purple</option>
            </select>

            <button className="purpleButton" onClick={ () => this.handleAdd() }>Save</button>
          </div>
        </div>


      )}
  })


export default AddNewForm;
