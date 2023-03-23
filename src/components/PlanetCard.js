import { React } from "react";


export default function PlanetCard(props) {
  const { name, mass, temperature, period } = props;

  return (
    <div class="card text-dark my-5 col" style={{ width: "22rem" }}>
      <h5 class="card-header">{name}</h5>
      <div class="card-body">
        <p class="card-text text-dark">Mass: {mass} in Jupiters</p>
        <p class="card-text text-dark">Temperature: {Math.floor(temperature - 273.15)} (°C)</p>
        <p class="card-text text-dark">Period: {period} Earth days</p>
      </div>
    </div>
  );

  // return <>
  //     <div class="card star-card m-2" style={{ width: "14rem", background: 'rgba(255, 215, 0, 0.7)', fontSize: '1.4rem' }}>
  //         <ul class="list-group list-group-flush m-2 text-white">
  //             <li class="list-group-item m-2">Name: {name}</li>
  //             <li class="list-group-item m-2">Mass: {mass}</li>
  //             <li class="list-group-item m-2">Temperature: {temperature}</li>
  //             <li class="list-group-item m-2">Period: {period}</li>
  //         </ul>
  //     </div>
  // </>
}
