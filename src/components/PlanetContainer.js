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

  // function getCard() {
  //     console.log('executed');
  //     console.log(currentPlanet);
  // }

  return (
    <div className="container text-white pt-3">
      <h4>
        The solar system comprises 8 planets, approximately 170 natural planetary satellites
        (moons), and countless asteroids, meteorites, and comets.
      </h4>
      <h5>
        There are eight planets in the solar system. The four inner terrestrial planets are{" "}
        <span  
          onClick={(e) => {
            setCurrentPlanet(e.target.innerText);
          }}
          class="planet">
          Mercury
        </span>
        ,{" "}
        <span onClick={(e) => setCurrentPlanet(e.target.innerText)} class="planet">
          Venus
        </span>
        ,{" "}
        <span onClick={(e) => setCurrentPlanet(e.target.innerText)} class="planet">
          Earth
        </span>
        , and{" "}
        <span class="planet" onClick={(e) => setCurrentPlanet(e.target.innerText)}>
          Mars
        </span>
        , all of which consist mainly of rock. The four outer planets are{" "}
        <span onClick={(e) => setCurrentPlanet(e.target.innerText)} class="planet">
          Jupiter
        </span>
        ,{" "}
        <span onClick={(e) => setCurrentPlanet(e.target.innerText)} class="planet">
          Saturn
        </span>
        ,{" "}
        <span class="planet" onClick={(e) => setCurrentPlanet(e.target.innerText)}>
          Neptune
        </span>
        , and{" "}
        <span onClick={(e) => setCurrentPlanet(e.target.innerText)} class="planet">
          Uranus
        </span>
        , giant planets that consist mainly of either gases or ice. Pluto was considered the ninth
        planet until 2006, when the International Astronomical Union voted to classify Pluto as a
        dwarf planet instead.
      </h5>
      <hr />
      <h5>Click on one of the planets above to see some stats for each one of them.</h5>

      <div class="row">
        <PlanetCard {...results} />
        <StatsInfo />
      </div>
      <h5>
        The solar system is situated within the Orion-Cygnus Arm of the Milky Way Galaxy. Alpha
        Centauri, made up of the stars Proxima Centauri, Alpha Centauri A, and Alpha Centauri B, is
        the closest star system to the solar system.
      </h5>
    </div>
  );
}
