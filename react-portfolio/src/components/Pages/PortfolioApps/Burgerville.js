import React from "react";
import BurgerImg from "./PortfolioAssets/burgerphoto.png";

function Burgerville() {
    return (

        <div className="col-sm-6 project-title mt-5 "> Burgerville App

            <a href="https://tranquil-beach-26448.herokuapp.com/">
                <img src={BurgerImg}
                alt="Burger App" 
                className="img-thumbnail github imageBorder"/>
             </a>
        
                <a href="https://github.com/RandyLofgren/Eat-da-burger">Link to GitHub Repo</a>
                    </div>
  );
}

export default Burgerville;
