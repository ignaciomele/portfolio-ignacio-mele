import React, { useState } from "react";
import './home.css'
import IMavatar3 from '../../static/IMavatar3.png'

const Home: React.FC = () => {
    const [showDiv, setShowDiv] = useState<boolean>(false)

    const handleAnimationEnd = () => {
        setShowDiv(true);
    }
    return(
        <div className="div-home" data-testid="home" id="home">
            <div onAnimationEnd={handleAnimationEnd} className="div-home-title">
                <h1>Hello! I'm Ignacio Mele</h1>
            </div>
            {showDiv && 
                <div 
                    className="div-home-text" 
                    data-aos="zoom-in" 
                    data-aos-duration="1000"
                    >
                        <h4>Welcome to my portfolio</h4>
                        <img className="home-avatar" src={IMavatar3} alt="" />
                        <p>I'm a web developer with a music background.</p>
                        <p>In others words, I went to Music University and returned a Software Engineer.</p>
                        <div>
                            <a href="Resume Ignacio Mele.pdf" download="Resume Ignacio Mele.pdf">
                                <button className="button slide_right" data-testid="download-resume-button">Download Resume</button>
                            </a>
                            <button className="button slide_right" data-testid="contact-button">
                                <a href="#contact">Contact</a>
                            </button>
                    </div> 
                </div> 
            }                
        </div>
    )
}

export default Home