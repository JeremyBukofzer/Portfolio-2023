import React from "react";

function Home() {
    return (
        <div className="intro-container">
            <h1 className="intro">Hello, I'm <span className="intro-name">Jeremy</span>.</h1>
            <h2 className="intro-subtext">I am a full stack web developer.</h2>
            <button className="view-work-btn">View my work</button>
        </div>
    )
}

export default Home;