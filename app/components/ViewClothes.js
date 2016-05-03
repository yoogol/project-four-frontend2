import React from 'react';
import auth from '../utils/auth';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';

const ViewClothes = React.createClass ({
  getInitialState: function() {
    return {
      data: [],
      top: [],
      bottom: [],
      shoes: [],
      currentTop: 0,
      currentBottom: 0,
      currentShoes: 0,
    }
  },

  getWeather: function() {
    console.log("Weather api is called");
    return (<div>Rain 45 F</div>)
  },

  componentDidMount: function() {
    console.log("ATTN", this.props.params.colors);
    var colors = this.props.params.colors;
    var types = this.props.params.types;

    console.log("Backend clothes data is called");
    var savingClothesData = function(data) {

      if (colors) {
        console.log("RUNNING THIS");
        data = data.filter(function(item) {
          if (colors.indexOf(item.item_color) >=0) {
            return true
          }
        });
      }

      if (types) {
        console.log("RUNNING THIS");
        data = data.filter(function(item) {
          if (types.indexOf(item.item_type) >=0) {
            return true
          }
        });
      }
      //randomize array here!

      function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }
        return array;
      };

      var data = shuffleArray(data);
      this.setState ({
        data: data
      });
      data.forEach(function(item) {
        if (item.item_category == "bottom") {
          let bottomArray = this.state.bottom;
          bottomArray.push(item.image);
          this.setState ({
            bottom: bottomArray
          })
        } else if (item.item_category == "top") {
          let topArray = this.state.top;
          topArray.push(item.image);
          this.setState ({
            top: topArray
          })
        } else {
          let shoesArray = this.state.shoes;
          shoesArray.push(item.image);
          this.setState ({
            shoes: shoesArray
          })
        }
      }.bind(this));
    }.bind(this);

    ajaxHelpers.retrieveClothes(savingClothesData);
  },

  pickTopNext: function() {
    console.log(this.state.currentTop, this.state.top.length);
    if (this.state.currentTop < this.state.top.length - 1) {
      this.setState ({
        currentTop: this.state.currentTop + 1
      })
    }
  },
  pickTopBack: function() {
    console.log(this.state.currentTop);
    if (this.state.currentTop > 0) {
      this.setState ({
        currentTop: this.state.currentTop - 1
      })
    }
  },
  pickBottomNext: function() {
    console.log(this.state.currentBottom);
    if (this.state.currentBottom < this.state.bottom.length - 1) {
      this.setState ({
        currentBottom: this.state.currentBottom + 1
      })
    }
  },
  pickBottomBack: function() {
    console.log(this.state.currentBottom);
    if (this.state.currentBottom > 0) {
      this.setState ({
        currentBottom: this.state.currentBottom - 1
      })
    }

  },
  pickShoesNext: function() {
    console.log(this.state.currentShoes);
    if (this.state.currentShoes < this.state.shoes.length - 1) {
      this.setState ({
        currentShoes: this.state.currentShoes + 1
      })
    }

  },
  pickShoesBack: function() {
    console.log(this.state.currentShoes);
    if (this.state.currentShoes > 0 ) {
      this.setState ({
        currentShoes: this.state.currentShoes - 1
      })
    }
  },


  render: function() {
    return (
      <div>
        <br></br>

        <div style={bodyStyle}>
          <div>{this.getWeather()}</div>
          <div style={layerStyle}>
            <button onClick={ () => this.pickTopBack() }>Back</button>
            <img style={topStyle} src={this.state.top[this.state.currentTop]}></img>
            <button onClick={ () => this.pickTopNext() }>Next</button>
          </div>
          <div style={layerStyle}>
            <button onClick={ () => this.pickBottomBack() }>Back</button>
            <img style={bottomStyle} src={this.state.bottom[this.state.currentBottom]}></img>
            <button onClick={ () => this.pickBottomNext() }>Next</button>
          </div>
          <div style={layerStyle}>
            <button onClick={ () => this.pickShoesBack() }>Back</button>
            <img style={shoesStyle} src={this.state.shoes[this.state.currentShoes]}></img>
            <button onClick={ () => this.pickShoesNext() }>Next</button>
          </div>
          <button>Wear it today</button>
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

export default ViewClothes;
