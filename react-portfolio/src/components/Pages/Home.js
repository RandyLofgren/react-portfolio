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
                        <>  As a Junior Developer I am interested in refining and improving my skills through experience. My education includes a BA in Economics from Denison University as well as a Full Stack Web Development Coding Certificate from UNC Charlotte Coding Bootcamp. I love problem solving and finding solutions to tricky problems as well as improving by analyzing an outcome and developing a strategy to exceed my previous result. I thrive in a team environment, I was an All-American Tennis player in college, and have gone on to be a Top 10 Platform Tennis player, a game that involves an immense amount of strategy and discipline while working with a partner. With my skill set, I would be a great addition to any team as a Junior Developer.
                            

                            
                        </>
                        
                        
                    </div>
                    <div className="col-md-6 col-border">
                        <div></div>
                        <img className="image imagetwo" src={RandyPlat} alt="Platform Picture" />
                        <>
                        I have experience using HTML, CSS, JS, Jquery, React, APIs, and am very interested in backend development.
                            I am orginally from
                            Cincinnati, OH and now live in Charlotte, NC with my wife Alyce, daughter Julia, two cats,
                            Monty and Katniss, and two dogs, Luna and Pheobe. My hobbies include playing Platform Tennis, Hiking, and
                            Grilling!
                          
                        </>
                        <>
                        I am currently the Chair of the APTA Men's Players Committee and Chair of the APTA National
                            Tournament Committee. These positions involve an enourmous amount of communication, organization, leadership, and  customer/member feedback interactions.
                            
                        </>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </div>
  );
}

export default Home;
