import React, { Component } from "react";
import "./App.css";
class Mypreferences extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      hikeDistance: "18",
      distanceFromDenver: "400",
      altitude: "14440",
      totalGain: "6300"
    };
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    const preferenceData = {
      [name]: value
    };

    this.setState({
      [name]: value
    });

    this.props.handlerFromParent(preferenceData);
  }

  render() {
    return (
      <div className="preferences">
        <div className="preference hike-distance">
          <label>Hike Distance</label>
          <input
            name="hikeDistance"
            type="range"
            id="hikeDistance"
            min="0"
            max="18"
            onChange={this.handleChange}
            value={this.state.hikeDistance}
          />
          <label>{this.state.hikeDistance} mi.</label>
        </div>
        <br />
        <div className="preference denver-distance">
          <label>Distance From Denver</label>
          <input
            name="distanceFromDenver"
            type="range"
            id="distanceFromDenver"
            min="0"
            max="400"
            onChange={this.handleChange}
            value={this.state.distanceFromDenver}
          />
          <label>{this.state.distanceFromDenver} mi.</label>
        </div>
        <br />
        <div className="preference altitude">
          <label>Altitude</label>
          <input
            name="altitude"
            type="range"
            id="altitude"
            min="14000"
            max="14440"
            onChange={this.handleChange}
            value={this.state.altitude}
          />
          <label>{this.state.altitude} ft.</label>
        </div>
        <br />
        <div className="preference gain">
        <label>Total Gain</label>
        <input
          name="totalGain"
          type="range"
          id="totalGain"
          min="400"
          max="6300"
          onChange={this.handleChange}
          value={this.state.totalGain}
        />
        <label>{this.state.totalGain} ft.</label>
        </div>
      </div>
    );
  }
}

export default Mypreferences;
