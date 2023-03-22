import StarCard from "../components/StarCard.js";

function Stars(props) {
  // const [imageURL, setImageURL] = useState([]);
  let { starInfo } = props;

  return starInfo.slice(0, 10).map((info) => (
    <StarCard
      // imageURL={imageURL}
      name={info.name}
      distance={info.distance_light_year}
      magnitude={info.apparent_magnitude}
      spectra={info.spectral_class}
    />
  ));
}

export default Stars;
