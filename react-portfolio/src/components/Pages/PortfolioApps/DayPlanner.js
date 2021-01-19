import React from "react";
import PlannerImg from "./PortfolioAssets/day-planner.png";

function DayPlanner() {
    return (

        <div className="col-sm-6 project-title mt-5 "> Day Planner App

            <a href="https://randylofgren.github.io/day-planner/">
                <img src={PlannerImg}
                alt="Amazing PTI App" 
                className="img-thumbnail github imageBorder"/>
             </a>
        
                <a href="https://github.com/RandyLofgren/day-planner">Link to GitHub Repo</a>
                    </div>
  );
}

export default DayPlanner;
