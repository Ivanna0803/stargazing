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
    axios
      .get("https://api.api-ninjas.com/v1/planets", {
        params: {
          name: currentPlanet,
        },
        headers: {
          "X-Api-Key": "NLaSta8xwFUGYDylwCBfoQ==POBmWJqcJZoqBnOE",
        },
      })
      .then(function (response) {
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
    <div className="container text-white pt-3">
      <h2 className="text-center pb-2 planet-text">
        The solar system comprises 8 planets, approximately 170 natural planetary satellites
        (moons), and countless asteroids, meteorites, and comets.
      </h2>
      <h4 className="container rounded glass-bg p-4 planet-text">
        There are eight planets in the solar system. The four inner terrestrial planets are Mercury, 
        Venus, Earth, and Mars, all of which consist mainly of rock. The four outer planets are Jupiter, 
        Saturn, Neptune, and Uranus, giant planets that consist mainly of either gases or ice. Pluto was 
        considered the ninth planet until 2006, when the International Astronomical Union voted to 
        classify Pluto as a dwarf planet instead.
      </h4>
      <div className="container text-center">
      <span  
          onClick={(e) => {
            setCurrentPlanet(e.target.innerText);
          }}
          class="planet" >
          Mercury
        </span>

        <span onClick={(e) => setCurrentPlanet(e.target.innerText)} class="planet">
          Venus
        </span>
    
        <span onClick={(e) => setCurrentPlanet(e.target.innerText)} class="planet">
          Earth
        </span>
      
        <span class="planet" onClick={(e) => setCurrentPlanet(e.target.innerText)}>
          Mars
        </span>
        
        <span onClick={(e) => setCurrentPlanet(e.target.innerText)} class="planet">
          Jupiter
        </span>
      
        <span onClick={(e) => setCurrentPlanet(e.target.innerText)} class="planet">
          Saturn
        </span>
      
        <span class="planet" onClick={(e) => setCurrentPlanet(e.target.innerText)}>
          Neptune
        </span>
    
        <span onClick={(e) => setCurrentPlanet(e.target.innerText)} class="planet bold">
          Uranus
        </span>
      </div>
      <hr />

      <div class="row">
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
