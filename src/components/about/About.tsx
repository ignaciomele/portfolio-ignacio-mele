import React from "react";
import './about.css'

const About: React.FC = () => {
    return (
        <div className="div-about" id="about">
            <div data-aos="fade-up" data-aos-duration="1000">
                <h2>A little about me</h2>
                <div className="div-about-content">
                    <div className="div-about-content-text">
                        <p>Technology always was my passion and I'm fully committed to it. I'm open-minded to learning and growing in different environments.</p>
                        <p>My 12 years as a professional musician gave me the ability to focus and be flexible to new challenges. Also, granted me a high grade of discipline and commitment to any particular task that required responsibilities and hard work.</p>
                        <p>I enjoy working with people who seek to innovate and grow every day as a team and as a person.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;