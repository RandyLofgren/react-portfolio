import React from "react";
import RandyFancy from "./PagesAssets/RandyFancy.jpg";
import RandyPlat from "./PagesAssets/Platform.jpg"

function Home() {
  return (
    <div>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="page-header">
                    <h1 className="text-center">Randy Lofgren</h1>
                    <div className="my-4"> </div>
                </div>

            </div>

            <div className="container-sm contain">
                <div className="row">
                    <div className="col-md-6">
                        <div></div>
                        <img className="image imageone" src={RandyFancy} alt="Randy Picture" />
                        <p> <strong>Randy Lofgren</strong> is a Full-Stack Developer from the UNC-Charlotte Coding
                            Bootcamp Course.
                            He is currently searching for a  Junior Dev Position on a development team
                            where he can put his push himself and imrpove his coding abilities.
                            

                            
                        </p>
                        He has experience using HTML, CSS, JS, Jquery, React, APIs, and is very interested in backend development.
                        
                        <p>

                        </p>
                    </div>
                    <div className="col-md-6 col-border">
                        <div></div>
                        <img className="image imagetwo" src={RandyPlat} alt="Platform Picture" />
                        <p>
                            He is orginally from
                            Cincinnati, OH and now lives in Charlotte, NC with his wife Alyce, daughter Julia, two cats,
                            Monty and Katniss, and two dogs, Luna and Pheobe. His hobbies include playing Platform Tennis, Hiking, and
                            Grilling!
                          
                        </p>
                        <p>
                            He is currently the Chair of the APTA Men's Players Committee and Chair of the APTA Super
                            Tournament Committee. These positions involve an enourmous amount of communication, organization, leadership, and  customer/member feedback interactions.
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </div>
  );
}

export default Home;
