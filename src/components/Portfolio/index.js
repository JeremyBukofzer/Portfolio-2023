import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {

    const [projects] = useState([
        {
            name: "ArtHub",
            link: "https://ddwk21.github.io/art-hub/",
            repository: "https://github.com/ddwk21/art-hub",
            description: "An endless scroll of fine art from some of the worlds top museums."
        },
        {
            name: "Encyclone",
            link: "https://fierce-sands-41595.herokuapp.com/",
            repository: "https://github.com/ddwk21/cyclone",
            description: "A clean no-nonsense way to browse yuor favourite topics from Encyclopedia Britanica."
        },
        
    ])

    return (
        <div>
            <div className="">
                {projects.map((project, idx) => (
                    <Project
                        project={project}
                        key={"project" + idx}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;