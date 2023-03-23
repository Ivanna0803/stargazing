import React from "react";
import axios from "axios";
import MoonPhase from "./MoonPhase";
import "../styles/Moon.css";

export default class MoonInfo extends React.Component {
  constructor(props) {
    super(props);
    this.location = "";
    this.state = {
      moonData: null,
    };
  }

  updateMoonData() {
    const APIKey = "64db444eb991492db1121834231903";
    const url = `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=${APIKey}&q=${this.location}&format=json&num_of_days=6`;
    axios
      .get(url)
      .then((response) => this.setState({ moonData: response.data.data }))
      .catch((error) => console.log(error));
  }

  render() {
    const astronomyDays = this.state.moonData ? this.state.moonData.weather : [];
    return (
      <div className="pb-5">
        <h3 className="text-center pt-5">Find out more about moon in your city:</h3>
        <div class="search-group text-center">
          <input class="search-button rounded" onChange={(e) => (this.location = e.target.value)} />
          <button class="search-button rounded" onClick={() => this.updateMoonData()}>
            Search
          </button>
        </div>
        <div class="container-fluid pt-3">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {astronomyDays.map((d, i) => {
              const city = this.state.moonData.request[0].query;
              const astronomy = d.astronomy[0];

              // Adding current time to the date provided by API response
              const now = new Date();
              const dateWithCurrentTime = new Date(d.date);
              dateWithCurrentTime.setHours(now.getHours(), now.getMinutes(), now.getSeconds());

              return (
                <div class="col text-center">
                  <div class="glass-bg card text-white border-0 rounded-3 shadow-lg moon-card rouded  ">
                    <div class="card-body">
                      <MoonPhase
                        date={dateWithCurrentTime}
                        doNotDisplayInfo={true}
                        style={{ width: "200px", height: "200px" }}
                      />
                      <p className="mb-0">{city}</p>
                      <p className="card-text">{d.date}</p>
                      <p className="card-phase">
                        <strong>{astronomy.moon_phase}</strong>
                      </p>
                      <p className="mb-0">Moon Illumination: {astronomy.moon_illumination}</p>
                      <p className="mb-0">Moonrise: {astronomy.moonrise}</p>
                      <p className="mb-0">Moonset: {astronomy.moonset}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}