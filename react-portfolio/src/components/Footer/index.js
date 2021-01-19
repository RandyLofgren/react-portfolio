import React from "react";
import "./style.css";
import LinkedIn from "./FooterAssets/LinkedIn.png";
import Resume from "./FooterAssets/resume.png";
import GitHub from "./FooterAssets/githublogo.png";


function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footer-holder">
                    <div className="sponsors text-center slabo text-info"> Links to Randy</div>
                    <div className="footer-content container-fluid">
                        <div className="footer-section col-sm-4">

                            <p><a href="https://github.com/RandyLofgren"><img
                                className="logo d-flex justify-content-center img-fluid thumbnail enlarge" src={GitHub}
                                alt={"Github's Logo"} />
                            </a>
                            </p>

                        </div>
                        <div className="footer-section col-sm-4">
                            <p><a href="https://www.linkedin.com/in/randy-lofgren-26a8771b7/">
                                <img className="logo d-flex justify-content-center img-fluid thumbnail enlarge"
                                    src={LinkedIn} alt={"Lnkedin Logo"} />
                            </a>
                            </p>


                        </div>
                        <div className="footer-section contact-form  col-sm-4">
                            <br />

                            <p>
                                <a href="./Assets/Resume-Randy Lofgren-11-20-20.pdf"><img
                                    className="logo d-flex justify-content-center img-fluid thumbnail enlarge"
                                    id="resume-image"
                                    src={Resume} alt={"Resume Logo"} />
                                </a>
                            </p>

                        </div>
                    </div>
                </div>


                <div className="footer-bottom text-center text-info">
              Design by Randy Lofgren
        </div>
            </div>
           
        </div>

    );
}

export default Footer;
