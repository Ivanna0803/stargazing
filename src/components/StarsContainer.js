import DropdwonMenu from "./DropdwonMenu.js";
import "../styles/Stars.css";

export default function StarsContainer() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: "url(./stars.jpeg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}>
      <div className="container">
        <h1 className="text-center p-4">
          Did you know that 88 constellations populate the sky?
        </h1>
        <div className="container rounded glass-bg">
        <h4 className="text-center star-description p-4">Some names will sound incredibly
          similar to your Zodiac sign, some will remind you of Greek mithology characters. And don't
          worry if you're not fluent in Greek, we got you covered with English names as well!</h4>
        </div>
      </div>
      <DropdwonMenu />
    </div>
  );
}
