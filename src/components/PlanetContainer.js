import { useState, useEffect } from "react";
import axios from "axios";
import "./../styles/Planets.css";
import PlanetCard from "./PlanetCard";
import StatsInfo from "./StatsInfo";

export default function PlanetContainer() {
  const [currentPlanet, setCurrentPlanet] = useState("Earth");
  const [results, setResults] = useState([]);

  useEffect(() => {
    getResults();
  }, [currentPlanet]);

  function getResults() {
    const planetData = localStorage.getItem(currentPlanet)
    if (planetData) {
      return setResults(JSON.parse(planetData));
    }
    axios.get("https://api.api-ninjas.com/v1/planets", {
      params: {name: currentPlanet},
      headers: {"X-Api-Key": "NLaSta8xwFUGYDylwCBfoQ==POBmWJqcJZoqBnOE"},
    })
    .then(function (response) {
      localStorage.setItem(currentPlanet, JSON.stringify(response.data[0]));
      setResults(response.data[0]);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {});
  }

  return (
    <div
    className="container-fluid"
    style={{
      backgroundImage: "url(./stars.jpeg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      minHeight: "100vh",
    }}>
    <div className="container text-white">
      <h1 className="text-center p-4">Planets of Solar system</h1>
      <h4 className="container rounded glass-bg p-4 planet-text">
        There are 8 planets in the solar system. The four inner terrestrial planets are Mercury, 
        Venus, Earth, and Mars, all of which consist mainly of rock. The four outer planets are Jupiter, 
        Saturn, Neptune, and Uranus, giant planets that consist mainly of either gases or ice. Pluto was 
        considered the ninth planet until 2006, when the International Astronomical Union voted to 
        classify Pluto as a dwarf planet instead.
      </h4>
      <div className="container text-center">
        <span className="planet" onClick={(e) => setCurrentPlanet(e.target.innerText)}>
          Mercury
        </span>

        <span className="planet" onClick={(e) => setCurrentPlanet(e.target.innerText)}>
          Venus
        </span>
    
        <span className="planet" onClick={(e) => setCurrentPlanet(e.target.innerText)}>
          Earth
        </span>
      
        <span className="planet" onClick={(e) => setCurrentPlanet(e.target.innerText)}>
          Mars
        </span>
        
        <span className="planet" onClick={(e) => setCurrentPlanet(e.target.innerText)}>
          Jupiter
        </span>
      
        <span className="planet" onClick={(e) => setCurrentPlanet(e.target.innerText)}>
          Saturn
        </span>
      
        <span className="planet" onClick={(e) => setCurrentPlanet(e.target.innerText)}>
          Neptune
        </span>
    
        <span className="planet" onClick={(e) => setCurrentPlanet(e.target.innerText)}>
          Uranus
        </span>
      </div>
      <hr className="mt-1"/>

      <div className="row">
        <PlanetCard {...results} />
        <StatsInfo />
      </div>
      <div className="pb-4">
      <h5 className="container rounded glass-bg p-4 planet-text">
        The solar system is situated within the Orion-Cygnus Arm of the Milky Way Galaxy. Alpha
        Centauri, made up of the stars Proxima Centauri, Alpha Centauri A, and Alpha Centauri B, is
        the closest star system to the solar system.
      </h5>
      </div>
    </div>
    </div>
  );
}
