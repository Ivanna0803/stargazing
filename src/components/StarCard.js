import { React } from "react";
import "../styles/Stars.css";

function StarCard(props) {
  const { name, distance, magnitude, spectra } = props;

  return (
    <>
      <div
        className="card star-card m-2 " 
        style={{ width: "18rem", background: "rgba(255, 215, 0, 0.8)", fontSize: "1.4rem" }}>
        <ul className="list-group list-group-flush m-1">
          <li className="list-group-item m-2 glass-bg bold-text text-white">Name: {name}</li>
          <li className="list-group-item m-2 glass-bg text-white">Distance in light years: {distance}</li>
          <li className="list-group-item m-2 glass-bg text-white">Magnitude: {magnitude}</li>
          <li className="list-group-item m-2 glass-bg text-white">Spectral class: {spectra}</li>
        </ul>
      </div>
    </>
  );
}

export default StarCard;