import React, { useState } from "react";
import './home.css'
import IMavatar3 from '../../static/IMavatar3.png'
import { HomeProps } from "../../models/database-entities";

const Home: React.FC<HomeProps> = () => {
    const [showDiv, setShowDiv] = useState<boolean>(false)

    const handleAnimationEnd = () => {
        setShowDiv(true);
    }

    const textContent = {
        title: "Hello! I'm Ignacio Mele",
        welcomeMessage: "Welcome to my portfolio",
        avatarAlt: "Avatar of Ignacio Mele",
        aboutMeIntro: "I'm a web developer with a music background.",
        aboutMeDetails: "In others words, I went to Music University and returned a Software Engineer.",
        downloadResume: "Download Resume",
        contactButton: "Contact",
      };

    return(
        <div className="div-home" data-testid="home" id="home">
            <div onAnimationEnd={handleAnimationEnd} className="div-home-title">
                <h1>{textContent.title}</h1>
            </div>
            {showDiv && (
                <div
                className="div-home-text"
                data-aos="zoom-in"
                data-aos-duration="1000"
                >
                <h4>{textContent.welcomeMessage}</h4>
                <img className="home-avatar" src={IMavatar3} alt={textContent.avatarAlt} />
                <p>{textContent.aboutMeIntro}</p>
                <p>{textContent.aboutMeDetails}</p>
                <div>
                    <a href="Resume Ignacio Mele.pdf" download="Resume Ignacio Mele.pdf">
                    <button className="button slide_right" data-testid="download-resume-button">{textContent.downloadResume}</button>
                    </a>
                    <button className="button slide_right" data-testid="contact-button">
                    <a href="#contact">{textContent.contactButton}</a>
                    </button>
                </div>
                </div>
            )}
        </div>
    )
}

export default Home