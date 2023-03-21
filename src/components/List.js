import constellations from '../utils/constellations.json';


export default function List(props) {
    
    
    return constellations.map(i => (
        <li><a class="dropdown-item" data-constellation={i.name} onClick={props.startSearch} href='#'>{i.name} ({i.en})</a></li>
        
    ))
}