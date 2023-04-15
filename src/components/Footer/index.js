import React from "react";

function Footer() {

    const icons = [
        {
            name: "fab fa-github-square fa-4x",
            link: "https://github.com/JeremyBukofzer"
        },
        {
            name: "fab fa-linkedin fa-4x",
            link: "https://www.linkedin.com/in/jeremy-bukofzer/"
        }
    ]

    return (
        <footer className="footer-icons">
            {icons.map(icon =>
                (
                    <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
                )
                )}
        </footer>
    );
}

export default Footer;