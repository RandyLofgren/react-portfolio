import React from "react";
import Burgerville from "./PortfolioApps/Burgerville";
import Amazing from "./PortfolioApps/AmazingPTI";
import Trail from "./PortfolioApps/Trail";
import DayPlanner from "./PortfolioApps/DayPlanner";
import DevConnect from "./PortfolioApps/DevConnect"

function Portfolio() {
  return (
    <div>

                    <h1 className="text-center">Portfolio</h1>
    <div className="container-sm paddingBottom">
      

        <div className="row">
            <div className="col-md-12">
                <div className="page-header">
                    <div className="my-4"> </div>
                </div>
                <div className="row">
                   <DevConnect />
                   <Amazing />
                </div>
                <div className="row">
                   <Burgerville />
                   <Trail />
                </div>
              

            </div>
        </div>
    </div>
    </div>
  );
}

export default Portfolio;
