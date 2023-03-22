import { useEffect, useState } from "react";
import axios from "axios";
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]

export default function Planets() {
    const [results, setresults] = useState([]);
    useEffect(() => {
        planets.map(p => getResults(p))
    })
    const getResults = (p) => {
        axios.get('https://api.api-ninjas.com/v1/planets', {
            params: {
                planet: p

            },
            headers: {
                'X-Api-Key': 'NLaSta8xwFUGYDylwCBfoQ==POBmWJqcJZoqBnOE'
            }
        })
            .then(function (response) {

                setresults(response.data[0])
                


            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
}