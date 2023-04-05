import React from "react";


function Project({ project }) {
    const { name, repository, link, description } =project;

    return (
        <div className="project" key={name}>
            {/* <img image goes here /> */}

            <div className="project-info">
                <h2>
                    <a href={link}>{name}</a>
                    <a href={repository}>
                        <i className="fab fa-github"></i>
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Project;