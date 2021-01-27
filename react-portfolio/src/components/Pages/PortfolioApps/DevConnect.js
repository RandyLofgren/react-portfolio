import React from "react";
import DevImg from "./PortfolioAssets/Dev-Connect.png";

function DayPlanner() {
    return (

        <div className="col-sm-6 project-title mt-5 "> Day Planner App

            <a href="https://secret-refuge-67245.herokuapp.com/">
                <img src={DevImg}
                alt="Dev Connect" 
                className="img-thumbnail github imageBorder"/>
             </a>
        
                <a href="https://github.com/diminako/dev-connect">Link to GitHub Repo</a>
                    </div>
  );
}

export default DayPlanner;
