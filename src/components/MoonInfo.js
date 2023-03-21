import React from 'react';
import axios from 'axios';
import MoonPhase from './MoonPhase';

export default class MoonInfo extends React.Component {
  constructor(props) {
    super(props);
    this.location = '';
    this.state = {
      moonData: null
    };
  }

  updateMoonData() {
    const APIKey = '64db444eb991492db1121834231903';
    const url = `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=${APIKey}&q=${this.location}&format=json&num_of_days=6`;
    axios.get(url)
        .then(response => this.setState({ moonData: response.data.data }))
        .catch(error => console.log(error));
  }

  render() {
    const astronomyDays = this.state.moonData ? this.state.moonData.weather : [];
    return (
      <div>
        <input onChange={e => this.location = e.target.value} />
        <button onClick={() => this.updateMoonData()}>Moon Info</button>
        {astronomyDays.map((d, i) => {
          const city = this.state.moonData.request[0].query;
          const astronomy = d.astronomy[0];
          return <div id={"moon-data-" + i} key={i}>
            <MoonPhase date={d.date} doNotDisplayInfo={true} />
            <p>City: {city}</p>
            <p>Date: {d.date}</p>
            <p>Moon Phase: {astronomy.moon_phase}</p>
            <p>Moon Illumination: {astronomy.moon_illumination}</p>
            <p>Moonrise: {astronomy.moonrise}</p>
            <p>Moonset: {astronomy.moonset}</p>
          </div>;
        })}
      </div>
    );
  }
}
