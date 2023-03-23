import "./../styles/Planets.css";

export default function StatsInfo() {
    return <div className="col my-5 container glass-bg p-4">
        <ul>
            <li className="planet-info">The mass of a planet is calculated in Jupiters. (1 Jupiter = 1.898 x 10²⁷ kg).</li>
            <li className="planet-info">The temperature here is shown Celsius degress for more clarity.</li>
            <li className="planet-info">In astronomy, the term period refers to how long an object takes to complete one cycle of revolution. Here shown in Earth days.</li>
        </ul>
    </div>
}
