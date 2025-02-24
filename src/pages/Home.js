import axios from "axios";
import { useEffect, useState } from "react";
import "./../styles/Home.css";

export default function Home() {
  const [image, setImage] = useState();
  useEffect(() => {
    getImage();
  });

  const getImage = () => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=Tl0OHAJk8fMxQjBJMSIyfaVe8piIjEeW6lge069A",
        {}
      )
      .then(function (response) {
        console.log(response.data);
        setImage(response.data.url);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  return (
  
    <div className="home" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}>
      <div className="heading">
        <h1 className="logo logo-name text-center">BEYOND EARTH</h1>
        <hr className="mb-2"/>
        <h3 className="scroll-subheader text-center promo">
          Let's start a journey across the universe and its infinite beauty
        </h3>
      </div>
    
    </div>
    
  );
}

