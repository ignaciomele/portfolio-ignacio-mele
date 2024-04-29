import React from "react";
import './about.css'
import { AboutProps } from "../../models/database-entities";

const aboutText = {
    intro: "A little about me",
    content: [
      "Technology always was my passion and I'm fully committed to it. I'm open-minded to learning and growing in different environments.",
      "My 12 years as a professional musician gave me the ability to focus and be flexible to new challenges. Also, granted me a high grade of discipline and commitment to any particular task that required responsibilities and hard work.",
      "I enjoy working with people who seek to innovate and grow every day as a team and as a person.",
    ],
  };

  const About: React.FC<AboutProps> = () => {
    return (
        <div className="div-about" id="about" data-testid="about">
            <div data-aos="fade-up" data-aos-duration="1000">
                <h2>A little about me</h2>
                <div className="div-about-content">
                    <div className="div-about-content-text">
                    {aboutText.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;