import { useEffect, useState } from "react";
import PlanetCard from './../components/PlanetCard.js'
import axios from "axios";
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]

export default function Planets() {
    const [results, setResults] = useState([]);
    useEffect(() => {
        planets.map(p => getResults(p));
        
    }, [results])
    const getResults = async(p) => {
        console.log(p);
        await axios.get('https://api.api-ninjas.com/v1/planets', {
            params: {
                name: p

            },
            headers: {
                'X-Api-Key': 'NLaSta8xwFUGYDylwCBfoQ==POBmWJqcJZoqBnOE'
            }
        })
            .then(function (response) {

                setResults(response.data[0])
                console.log(response.data[0]);
                return <PlanetCard {...results} />


            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
     return <PlanetCard {...results} />
}