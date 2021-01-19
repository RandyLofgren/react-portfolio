import React from "react";
import Burgerville from "./PortfolioApps/Burgerville";
import Amazing from "./PortfolioApps/AmazingPTI";
import Trail from "./PortfolioApps/Trail";
import DayPlanner from "./PortfolioApps/DayPlanner";

function Portfolio() {
  return (
    <div className="container-sm paddingBottom">
      

        <div className="row">
            <div className="col-md-12">
                <div className="page-header">
                    <h1>Portfolio</h1>
                    <div className="my-4"> </div>
                </div>
                <div className="row">
                   <Burgerville />
                   <Amazing />
                </div>
                <div className="row">
                   <Trail />
                   <DayPlanner />
                </div>
              

            </div>
        </div>
    </div>
  );
}

export default Portfolio;
