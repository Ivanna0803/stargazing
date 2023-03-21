import React, { Component } from "react";
import MoonPhase from "./MoonPhase";

export default class InteractiveMoonPhase extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dayOffset: 0,
    };
  }

  handleSliderChange = (e) => {
    this.setState({ dayOffset: parseInt(e.target.value) });
  };

  render() {
    const newDate = new Date(Date.now() + this.state.dayOffset * 24 * 60 * 60 * 1000);
    return (
      <div>
        <input
          type="range"
          min="-30"
          max="30"
          step="1"
          value={this.state.dayOffset}
          onChange={this.handleSliderChange}
        />
        <p>Date: {newDate.toLocaleString()}</p>
        <MoonPhase date={newDate} />
      </div>
    );
  }
}
