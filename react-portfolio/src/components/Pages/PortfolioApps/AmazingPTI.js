import React from "react";
import AmazingImg from "./PortfolioAssets/amazing-pti.png";

function Amazing() {
    return (

        <div className="col-sm-6 project-title mt-5 "> Amazing-PTI League

            <a href="https://randylofgren.github.io/AmazingPTI/">
                <img src={AmazingImg}
                alt="Amazing PTI App" 
                className="img-thumbnail github imageBorder"/>
             </a>
        
                <a href="https://github.com/RandyLofgren/AmazingPTI">Link to GitHub Repo</a>
                    </div>
  );
}

export default Amazing;
