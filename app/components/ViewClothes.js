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
          if (clothesFilter.indexOf(item.item_color) >= 0 ) {
            return true
          }
        });
        console.log("color filter", data)
      }
      // filtering types
      if (clothesFilter[0] == "types" && clothesFilter.length > 1) {
        console.log("RUNNING THIS");
        data = data.filter(function(item) {
          if (clothesFilter.indexOf(item.item_type) >=0) {
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
      this.setState ({
        data: data
      });

      // storing in the state
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

    //calling db
    ajaxHelpers.retrieveClothes(savingClothesData);
    //calling Weather
    ajaxHelpers.retrieveWeather();
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

  wearItToday: function() {
    let itemsPicked = this.state.data.filter(function(item) {
      if (item.image == this.state.top[this.state.currentTop] || item.image == this.state.bottom[this.state.currentBottom] || item.image == this.state.shoes[this.state.currentShoes]) {
        return true
      }
    }.bind(this));
    ajaxHelpers.updateLastWorn(itemsPicked);
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
          <button onClick={this.wearItToday}>Wear it today</button>
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
