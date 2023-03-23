import "../styles/Stars.css";

export default function StarsInfo(props) {
  const { results } = props;
  if (results.length > 0) {
    return (
      <div className="container text-white mt-3 glass-bg p-4 stars-info" style={{ fontSize: "1.2rem" }}>
        <ul style={{ listStyle: "none" }} className="stars-info">
          <li>
            - The distance from the Earth is measured in{" "}
            <span className="bold-text">light years</span> . A light year equals to 5.88 trillion
            miles 🤯
          </li>
          <li>
            - The <span className="bold-text">magnitude</span> is used to measure the brightness of
            a star 🌟
          </li>
          <li>
            - Stars can also be classified by their spectra (the elements that they absorb). The 7{" "}
            <span className="bold-text">spectral classes</span> are OBAFGKM where O stars are the
            hottest and each successive class is cooler with M being the coolest stars.
          </li>
        </ul>
      </div>
    );
  } else
    return (
      <div className="container text-white mt-3" style={{ fontSize: "1.5rem" }}>
        Oops, sorry, we don't have any data regarding this constellation yet. Please select a
        different one.
      </div>
    );
}
