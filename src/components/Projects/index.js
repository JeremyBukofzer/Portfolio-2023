import React from "react";
import arthubLogo from "/Users/jeremybukofzer/Desktop/Jeremy-Bukofzer-Portfolio/my-app/src/assets/Images/art-hub-logo-ticket.png"
import encyclonLogo from "/Users/jeremybukofzer/Desktop/Jeremy-Bukofzer-Portfolio/my-app/src/assets/Images/encyclone-logo.png"


function Projects() {

    // const [projects] = useState([
    //     {
    //         name: "ArtHub",
    //         link: "https://ddwk21.github.io/art-hub/",
    //         repository: "https://github.com/ddwk21/art-hub",
    //         description: "An endless scroll of fine art from some of the worlds top museums."
    //     },
    //     {
    //         name: "Encyclone",
    //         link: "https://fierce-sands-41595.herokuapp.com/",
    //         repository: "https://github.com/ddwk21/cyclone",
    //         description: "A clean no-nonsense way to browse yuor favourite topics from Encyclopedia Britanica."
    //     },

    // ])

    return (
        <div className="project-container">
            <div class="arthub-card">
                <img src={arthubLogo} alt="arthub-logo" />
                <div className="card-content">
                    <h2>
                        Card Heading
                    </h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                    </p>
                    <a href="https://ddwk21.github.io/art-hub/" className="button">
                        Find out more
                        <span class="material-symbols-outlined">
                            arrow_right_alt
                        </span>
                    </a>
                </div>
            </div>
            <div className="encyclone-card">
                <img src={encyclonLogo} alt="encyclone-logo" />
                <div className="card-content">
                    <h2>
                        Card Heading
                    </h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                    </p>
                    <a href="https://fierce-sands-41595.herokuapp.com/" className="button">
                        Find out more
                        <span className="material-symbols-outlined">
                            arrow_right_alt
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects;