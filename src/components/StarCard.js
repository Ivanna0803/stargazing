import { React } from "react";
import "../styles/Stars.css";

function StarCard(props) {
  const { name, distance, magnitude, spectra } = props;

  return (
    <>
      <div
        class="card star-card m-2"
        style={{ width: "14rem", background: "rgba(0, 233, 89, .5)", fontSize: "1.4rem" }}>
        <ul class="list-group list-group-flush m-2 text-white">
          <li class="list-group-item m-2">Name: {name}</li>
          <li class="list-group-item m-2">Distance in light years: {distance}</li>
          <li class="list-group-item m-2">Magnitude: {magnitude}</li>
          <li class="list-group-item m-2">Spectral class: {spectra}</li>
        </ul>
      </div>
    </>
  );
}

export default StarCard;