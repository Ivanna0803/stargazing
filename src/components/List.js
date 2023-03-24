import constellations from "../utils/constellations.json";
import "../styles/Stars.css";

export default function List(props) {
  return constellations.map((i) => {
    let emptyFlag = '';
    // If in local storage we find that constellation data is empty then we add a note
    if (localStorage.getItem(i.name) === '[]') {
      emptyFlag = <p className="inline">(empty)</p>
    }
    return (
      <li className="search-bar">
        <a className="dropdown-item inline" data-constellation={i.name} onClick={props.startSearch} href=".">
          {i.name} ({i.en})
        </a>
        {emptyFlag}
      </li>
    )
  });
}
