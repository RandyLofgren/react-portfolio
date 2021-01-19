import React from "react";
import TrailImg from "./PortfolioAssets/trail-weather.png";

function Trail() {
    return (

        <div className="col-sm-6 project-title mt-5 "> Trail Weather Tracker App

            <a href="https://randylofgren.github.io/trail-weather-tracker/">
                <img src={TrailImg}
                alt="Trail App" 
                className="img-thumbnail github imageBorder"/>
             </a>
        
                <a href="https://github.com/RandyLofgren/trail-weather-tracker">Link to GitHub Repo</a>
                    </div>
  );
}

export default Trail;
