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
                        key={"prroject" + id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;