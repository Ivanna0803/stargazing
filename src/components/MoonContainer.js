import InteractiveMoonPhase from "../components/InteractiveMoonPhase";
import MoonInfo from "../components/MoonInfo";
import "./../styles/Moon.css";

export default function MoonContainer() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: "url(./stars.jpeg)",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}>
      <div className="container">
        <h1 className="text-white text-align-center text-center p-4">Moon Phases</h1>
        <InteractiveMoonPhase />
        <MoonInfo />
      </div>
    </div>
  );
}
