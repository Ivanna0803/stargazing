import List from "./List.js";
import { useEffect, useState } from "react";
import Stars from "../pages/Stars.js";
import axios from "axios";
import StarsInfo from "./StarsInfo.js";

export default function DropdwonMenu() {
  const [search, setSearch] = useState("Virginis");
  const [starInfo, setStarInfo] = useState([]);

  const startSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.dataset.constellation);
  };

  function getStarInfo(search) {
    const constellationData = localStorage.getItem(search);
    if (constellationData) {
      // If constallationData already exists in local storage then using it instad of calling API
      return setStarInfo(JSON.parse(constellationData));
    }

    axios
      .get("https://api.api-ninjas.com/v1/stars", {
        params: {
          constellation: search,
        },
        headers: {
          "X-Api-Key": "NLaSta8xwFUGYDylwCBfoQ==POBmWJqcJZoqBnOE",
        },
      })
      .then(function (response) {
        // When we get successful response we store in in local storage for caching
        localStorage.setItem(search, JSON.stringify(response.data));
        setStarInfo(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
  useEffect(() => {
    getStarInfo(search);
  }, [search]);

  return (
    <div className="container text-center">
      <div className="row g-3 m-3 align-items-center">
        <div className="col-auto">
          <label for="inputPassword6" className="col-form-label text-white fs-2"></label>
        </div>
        <div className="col-auto">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle btn-lg search-bar"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Select a constellation to start
            </button>
            <ul className="dropdown-menu" style={{ maxHeight: "18em", "overflow-y": "auto" }}>
              <List startSearch={startSearch} />
            </ul>
          </div>
        </div>
      </div>
      <div className="row justify-content-center p-4">
        <Stars starInfo={starInfo} />
        <StarsInfo results={starInfo} />
      </div>
    </div>
  );
}