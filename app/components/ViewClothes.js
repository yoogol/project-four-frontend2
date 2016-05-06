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
var arrowRight = require("../assets/arrow-right.png");
var arrowLeft = require("../assets/arrow-left.png");
var Button = require('react-bootstrap').Button;
var smileyFace = require("../assets/smiley-face.png");
var FontAwesome = require('react-fontawesome');

const ViewClothes = React.createClass({
  getInitialState: function() {
    return {
      data: [],
      top: [],
      bottom: [],
      shoes: [],
      currentTop: 0,
      currentBottom: 0,
      currentShoes: 0,
      temperature: '',
      weatherIcon: '',
      weatherFilter: false,
      weatherReady: false
    }
  },

  componentWillMount: function() {
    // filtering weather
    if (this.props.params.filter) {
      if (this.props.params.filter == "false") {
        this.setState({weatherFilter: false})
      } else if (this.props.params.filter == "true") {
        this.setState({weatherFilter: true})
      }
    }
  },
  componentDidMount: function() {
    console.log("Backend clothes data is called");
    var savingClothesData = function(data) {

      // FILTERS //

      if (this.props.params.filter) {
        console.log("ATTN", this.props.params.filter);
        var clothesFilter = this.props.params.filter;
        var clothesFilter = clothesFilter.split(',')

        // filtering colors
        if (clothesFilter[0] == "colors" && clothesFilter.length > 1) {
          console.log("RUNNING THIS");
          data = data.filter(function(item) {
            if (clothesFilter.indexOf(item.item_color) >= 0) {
              return true
            }
          });
          console.log("color filter", data)
        }
        // filtering types
        if (clothesFilter[0] == "types" && clothesFilter.length > 1) {
          console.log("RUNNING THIS");
          data = data.filter(function(item) {
            if (clothesFilter.indexOf(item.item_type) >= 0) {
              return true
            }
          });
          console.log("type filter", data)
        }

        // filtering times
        if (clothesFilter[0] == "time" && clothesFilter.length > 1) {
          console.log("RUNNING THIS");
          let today = new Date();
          let worn_before = today;
          if (clothesFilter[1] == "over1month") {
            worn_before = today.setMonth(today.getMonth() - 1);
          } else if (clothesFilter[1] == "over3weeks") {
            worn_before = today.setDate(today.getDate() - (7 * 3));
          } else if (clothesFilter[1] == "over2weeks") {
            worn_before = today.setDate(today.getDate() - (7 * 2));
          } else if (clothesFilter[1] == "over1week") {
            worn_before = today.setDate(today.getDate() - 7);
          } else if (clothesFilter[1] == "over3days") {
            worn_before = today.setDate(today.getDate() - 3);
          } else if (clothesFilter[1] == "not-yesterday") {
            worn_before = today.setDate(today.getDate() - 1);
          };

          data = data.filter(function(item) {
            console.log(worn_before);
            if (item.last_worn < worn_before) {
              return true
            }
          });

          console.log("time filter", data)
        }
      }

      //filtering weather

      if (this.state.weatherFilter == true) {
        let temp = "";
        let clothesForWeather = [];
        if (this.state.temperature < 32) {
          temp = "very cold",
          clothesForWeather = [
            "pants",
            "jeans",
            "leggings",
            "sweatpants",
            "sweater",
            "cardigan",
            "turtle neck",
            "shirt",
            "sweatshirt",
            "jacket",
            "shoes",
            "sneakers",
            "boots"
          ]
        } else if (this.state.temperature < 59) {
          temp = "cold";
          clothesForWeather = [
            "pants",
            "blouse",
            "sweater",
            "cardigan",
            "turtle neck",
            "shirt",
            "sweatshirt",
            "jacket",
            "shoes",
            "sneakers",
            "boots"
          ]
        } else if (this.state.temperature < 68) {
          temp = "comfy";
          clothesForWeather = [
            "pants",
            "blouse",
            "skirt",
            "sweater",
            "cardigan",
            "turtle neck",
            "shirt",
            "t-shirt",
            "sweatshirt",
            "jacket",
            "shoes",
            "sneakers",
            "boots",
            "sandals"
          ]
        } else if (this.state.temperature < 77) {
          temp = "warm";
          clothesForWeather = [
            "pants",
            "blouse",
            "skirt",
            "cardigan",
            "tank-top",
            "t-shirt",
            "shoes",
            "sneakers",
            "sandals",
            "flip-flops"
          ]
        } else if (this.state.temperature > 76) {
          temp = "hot";
          clothesForWeather = [
            "skirt",
            "shorts",
            "tank-top",
            "t-shirt",
            "shoes",
            "sneakers",
            "sandals",
            "flip-flops"
          ]
        };
        data = data.filter(function(item) {
          if (clothesForWeather.indexOf(item.item_type) >= 0) {
            return true
          }
        });
        console.log("weather filter", data)
      }

      //randomizing

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
      this.setState({data: data});

      // storing in the state
      data.forEach(function(item) {
        if (item.item_category == "bottom") {
          let bottomArray = this.state.bottom;
          bottomArray.push(item.image);
          this.setState({bottom: bottomArray})
        } else if (item.item_category == "top") {
          let topArray = this.state.top;
          topArray.push(item.image);
          this.setState({top: topArray})
        } else {
          let shoesArray = this.state.shoes;
          shoesArray.push(item.image);
          this.setState({shoes: shoesArray})
        }
      }.bind(this));
    }.bind(this);

    var savingWeatherData = function(temp, icon) {
      this.setState({temperature: temp, weatherIcon: icon, weatherReady: true})
      //calling db
      ajaxHelpers.retrieveClothes(savingClothesData);
    }.bind(this);
    //calling Weather
    if (this.state.weatherFilter == true) {
      ajaxHelpers.retrieveWeather(savingWeatherData);
    } else {
      ajaxHelpers.retrieveClothes(savingClothesData);
    }
  },

  pickTopNext: function() {
    console.log(this.state.currentTop, this.state.top.length);
    if (this.state.currentTop < this.state.top.length - 1) {
      this.setState({
        currentTop: this.state.currentTop + 1
      })
    }
  },
  pickTopBack: function() {
    console.log(this.state.currentTop);
    if (this.state.currentTop > 0) {
      this.setState({
        currentTop: this.state.currentTop - 1
      })
    }
  },
  pickBottomNext: function() {
    console.log(this.state.currentBottom);
    if (this.state.currentBottom < this.state.bottom.length - 1) {
      this.setState({
        currentBottom: this.state.currentBottom + 1
      })
    }
  },
  pickBottomBack: function() {
    console.log(this.state.currentBottom);
    if (this.state.currentBottom > 0) {
      this.setState({
        currentBottom: this.state.currentBottom - 1
      })
    }

  },
  pickShoesNext: function() {
    console.log(this.state.currentShoes);
    if (this.state.currentShoes < this.state.shoes.length - 1) {
      this.setState({
        currentShoes: this.state.currentShoes + 1
      })
    }

  },
  pickShoesBack: function() {
    console.log(this.state.currentShoes);
    if (this.state.currentShoes > 0) {
      this.setState({
        currentShoes: this.state.currentShoes - 1
      })
    }
  },

  wearItToday: function() {
    let itemsPicked = this.state.data.filter(function(item) {
      if (item.image == this.state.top[this.state.currentTop] || item.image == this.state.bottom[this.state.currentBottom] || item.image == this.state.shoes[this.state.currentShoes]) {
        return true
      }
    }.bind(this));
    ajaxHelpers.updateLastWorn(itemsPicked);
  },

  displayWeather: function() {
    if (this.state.weatherFilter == true && this.state.weatherReady == true) {
      return (
        <div className="weather">
          <img className="weatherIcon" src={this.state.weatherIcon}></img>
          <div className="weatherTemp">{this.state.temperature}
              F
          </div>
        </div>
      )
    } else if (this.state.weatherFilter == true && this.state.weatherReady == false) {
      return (
        <div className="waitingToLoad">
          <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
          <span className="sr-only"> Loading ...</span>
        </div>)
    } else {
      return (
        <div className="weatherMessage">
          Weather forecast is off
        </div>
      )
    }
  },

  render: function() {
    return (
      <div>
        <br></br>
        {this.displayWeather()}
        <div className="container">
          <div className="threeLayers">
            <img className="arrowImage" src={arrowLeft} onClick={() => this.pickTopBack()}/>
            <img className="topPic" src={this.state.top[this.state.currentTop]}></img>
            <img className="arrowImage" src={arrowRight} onClick={() => this.pickTopNext()}/>
          </div>
          <div className="threeLayers">
            <img className="arrowImage" src={arrowLeft} onClick={() => this.pickBottomBack()}/>
            <img className="bottomPic" src={this.state.bottom[this.state.currentBottom]}></img>
            <img className="arrowImage" src={arrowRight} onClick={() => this.pickBottomNext()}/>
          </div>
          <div className="threeLayers">
            <img className="arrowImage" src={arrowLeft} onClick={() => this.pickShoesBack()}/>
            <img className="shoesPic" src={this.state.shoes[this.state.currentShoes]}></img>
            <img className="arrowImage" src={arrowRight} onClick={() => this.pickShoesNext()}/>
          </div>
          <button className="purpleButton" onClick={this.wearItToday}>Wear it today</button>
        </div>

      </div>

    )
  }
})

export default ViewClothes;
