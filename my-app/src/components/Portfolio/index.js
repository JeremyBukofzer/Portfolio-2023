import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {

    const [projects] = useState([
        {
            name: "ArtHub",
            link: "https://ddwk21.github.io/art-hub/",
            repository: "https://github.com/ddwk21/art-hub",
            desciption: "An endless scroll of fine art from some of the worlds top museums."
        },
        {
            name: "Encyclone",
            link: "https://fierce-sands-41595.herokuapp.com/",
            repository: "https://github.com/ddwk21/cyclone",
            desciption: "A clean no-nonsense way to browse yuor favourite topics from Encyclopedia Britanica."
        },
        {
            name: "",
            link: "",
            repository: "",
            desciption: ""
        },
        {
            name: "",
            link: "",
            repository: "",
            desciption: ""
        },
    ])

    return (
        <div>
            <div className="flex-row">
                {projects.map((project, id) => (
                    <Project
                        project={project}
                        key={"project" + id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;