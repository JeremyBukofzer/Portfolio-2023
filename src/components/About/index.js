import React from "react";
import portrait from "./images/jb-portrait.png"

function About() {
    return (
        <section className="about-container">
            <div className="about">
                <h1 className="about-title">About Me</h1>

                <img className="portrait" src={portrait} alt="Portrait" />
                
                <p className="about-text">I am a highly skilled web developer with a passion for creative problem solving. With a background in art and a strong customer service orientation, I bring a unique perspective to my development projects, enabling me to overcome challenges with innovative solutions.<br/>
                <br/>
Drawing upon my artistic sensibilities, I approach web development with a creative mindset. I leverage my problem-solving skills to find inventive solutions when faced with complex coding obstacles or design dilemmas. I thrive on pushing the boundaries of what is possible, delivering exceptional results that exceed expectations.<br/>
<br/>
In addition to my technical prowess, my background in customer service equips me with strong communication and interpersonal skills. I actively listen to clients, understand their needs, and collaborate closely with them to ensure their vision is translated into a functional and visually captivating website or app. My ability to effectively communicate technical concepts in a non-technical manner fosters trust and strengthens client relationships.<br/>
<br/>
When you work with me, you can expect a web developer who approaches every project with an open mind and a determination to find creative solutions. My combination of artistic talent, customer service skills, and creative problem-solving abilities makes me the ideal partner to bring your web development aspirations to fruition.

                </p>
            </div>

        </section>
    )
}

export default About;