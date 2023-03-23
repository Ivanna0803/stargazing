import constellations from "../utils/constellations.json";
import "../styles/Stars.css";

export default function List(props) {
  return constellations.map((i) => (
    <li className="search-bar">
      <a class="dropdown-item" data-constellation={i.name} onClick={props.startSearch} href=".">
        {i.name} ({i.en})
      </a>
    </li>
  ));
}
