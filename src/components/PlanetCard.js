import { React } from "react";

export default function PlanetCard(props) {
  const { name, mass, temperature, period } = props;

  return (
    <div className="card my-5 col glass-bg p-4" style={{ width: "22rem" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={`../../assets/images/planets/${name}.jpeg`}
            className="img-fluid rounded-start rounded"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <h4 className="card-header ">{name}</h4>
          <div className="card-body">
            <p className="card-text">Mass: {mass} in Jupiters</p>
            <p className="card-text">Temperature: {Math.floor(temperature - 273.15)} (°C)</p>
            <p className="card-text">Period: {period} Earth days</p>
          </div>
        </div>
      </div>
    </div>
  );
}