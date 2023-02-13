import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {

    const [projects] = useState([
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