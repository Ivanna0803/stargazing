import { React } from "react";

export default function PlanetCard(props) {
  const { name, mass, temperature, period } = props;

  return (
    <div class="card my-5 col glass-bg p-4" style={{ width: "22rem" }}>
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src={`../../assets/images/planets/${name}.jpeg`}
            class="img-fluid rounded-start rounded"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <h4 class="card-header ">{name}</h4>
          <div class="card-body">
            <p class="card-text">Mass: {mass} in Jupiters</p>
            <p class="card-text">Temperature: {Math.floor(temperature - 273.15)} (°C)</p>
            <p class="card-text">Period: {period} Earth days</p>
          </div>
        </div>
      </div>
    </div>
  );
}