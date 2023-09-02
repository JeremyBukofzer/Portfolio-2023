import React from "react";
import arthubLogo from "./Images/art-hub-logo-ticket.png"
import encycloneLogo from "./Images/encyclone-logo.png"


function Projects() {

    return (
        <div>
            <h1 className="project-title">My Projects</h1>
            <div className="project-container">
                <div className="card">
                    <img className="logo" src={arthubLogo} alt="arthub-logo" />
                    <div className="card-content">
                        <h2>
                            Art Hub
                        </h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                        </p>
                        <a href="https://ddwk21.github.io/art-hub/" className="button">
                            Find out more
                        </a>
                    </div>
                </div>
                <div className="card">
                    <img className="logo" src={encycloneLogo} alt="encyclone-logo" />
                    <div className="card-content">
                        <h2>
                            Card Heading
                        </h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                        </p>
                        <a href="https://fierce-sands-41595.herokuapp.com/" className="button">
                            Find out more
                        </a>
                    </div>
                </div>
                <div className="card">
                    <img className="logo" src={encycloneLogo} alt="weather-logo" />
                    <div className="card-content">
                        <h2>
                            Card Heading
                        </h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                        </p>
                        <a href="https://fierce-sands-41595.herokuapp.com/" className="button">
                            Find out more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;