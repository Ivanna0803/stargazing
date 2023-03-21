
import List from "./List.js"
import { useEffect, useState } from "react";
import Stars from "../Pages/Stars.js";
import axios from 'axios';
import StarsInfo from "./StarsInfo.js";

export default function DropdwonMenu() {
    
    const [search, setSearch] = useState('Virginis');
    const [starInfo, setStarInfo] = useState([]);

   
    const startSearch = event => {
        setSearch(event.target.dataset.constellation);
        
    };

    useEffect(() => {
        getStarInfo()
    }, [search]);

    const getStarInfo = () => {
        axios.get('https://api.api-ninjas.com/v1/stars', {
            params: {
                constellation: search

            },
            headers: {
                'X-Api-Key': 'NLaSta8xwFUGYDylwCBfoQ==POBmWJqcJZoqBnOE'
            }
        })
            .then(function (response) {

                setStarInfo(response.data)
                console.log(response.data);
                console.log(search);


            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    return (<div className="container">
        <div class="row g-3 m-3 align-items-center">
            <div class="col-auto">
                <label for="inputPassword6" class="col-form-label text-white fs-2"></label>
            </div>
            <div class="col-auto">
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle btn-lg" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Select a constellation to start
                    </button>
                    <ul class="dropdown-menu" style={{ maxHeight: "18em", "overflow-y": "auto" }}>
                        <List startSearch={startSearch} />
                    </ul>
                </div>
            </div>

        </div>
        <div className="row justify-content-center p-4">
            <Stars starInfo={starInfo} />
            <StarsInfo results={starInfo} />
            
        </div>
    </div>)
}

