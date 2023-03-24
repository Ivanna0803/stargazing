import { React } from "react";
import "../styles/Stars.css";

function StarCard(props) {
  const { name, distance, magnitude, spectra } = props;

  return (
    <>
      <div
        className="card star-card m-2" 
        style={{ width: "18rem", background: "rgba(255, 215, 0, 0.8)", fontSize: "1.4rem" }}>
        <ul className="list-group list-group-flush m-2 text-white">
          <li className="list-group-item m-2">Name: {name}</li>
          <li className="list-group-item m-2">Distance in light years: {distance}</li>
          <li className="list-group-item m-2">Magnitude: {magnitude}</li>
          <li className="list-group-item m-2">Spectral class: {spectra}</li>
        </ul>
      </div>
    </>
  );
}

export default StarCard;