import React from 'react';
import auth from '../utils/auth';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';
var Dropzone = require('react-dropzone');
require('../style/Styles.css');

const AddNewForm = React.createClass ({
  getInitialState: function() {
    return {
      image: '',
      type: '',
      color: '',
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
          this.props.history.push('/')
        }
      }
    }.bind(this);
//I LEFT IT HERE - add logic for ajaxcall
  // let newClothesToAdd = {
  //   image: this.state.data_uri,
  //   type: this.state.type,
  //   color: this.state.color,
  // }
  ajaxHelpers.addNew(this.state.image, this.state.type, this.state.color, callbackAfterSubmit)
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
            </div>*/}
            <img className="imagePreview" src={this.state.files.preview} />
            <input placeholder='Image link' name='image' onChange={ e => this.setState({image:e.target.value})} />
            <input placeholder='Select Type' name='type' onChange={ e => this.setState({type: e.target.value})}/>
            <input placeholder='Select Color' name='color' onChange={e => this.setState({color: e.target.value})}/>
            <button onClick={ () => this.handleAdd() }>Submit</button>
          </div>
        </div>


      )}
  })


export default AddNewForm;
