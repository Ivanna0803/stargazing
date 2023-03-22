import React
    from "react";

import { useEffect, useState } from "react";
import PlanetCard from './../components/PlanetCard.js'
import axios from "axios";
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]

export default function Planets() {
    const [results, setResults] = useState([]);
    // const [currentPlanet, setCurrentPlanet] = useState([]);

    
    

    useEffect(() => {
        const getResults = (p) => {
            axios.get('https://api.api-ninjas.com/v1/planets', {
                params: {
                    name: p

                },
                headers: {
                    'X-Api-Key': 'NLaSta8xwFUGYDylwCBfoQ==POBmWJqcJZoqBnOE'
                }
            })
                .then(function (response) {

                    // setResults(response.data[0])
                    // console.log(response.data);
                    // console.log(results);
                    console.log(Promise.all(findPlanets));
                    return response.data[0];


                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        }
        const findPlanets = planets.map(p => getResults(p));
        console.log(findPlanets);

    }, []);

    
    return <PlanetCard {...results} />
    
    
}