import React from "react";

export default function PlanetCard(props) {
    const { name, mass, radius, period } = props;

    return <>
        <div class="card star-card m-2" style={{ width: "14rem", background: 'rgba(255, 215, 0, .8)', fontSize: '1.4rem' }}>
            <ul class="list-group list-group-flush m-2 text-white">
                <li class="list-group-item m-2">Name: {name}</li>
                <li class="list-group-item m-2">Mass: {mass}</li>
                <li class="list-group-item m-2">Radius: {radius}</li>
                <li class="list-group-item m-2">Period: {period}</li>
            </ul>
        </div>
    </>
}