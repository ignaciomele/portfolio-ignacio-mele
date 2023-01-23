import React, { useState } from "react";
import './navbar.css'
import logoIM5 from '../../static/logoIM5.png'
import BurgerIcon from "./burgerIcon/BurgerIcon";

export default function Navbar() {
    const [burgerIconClicked, setBurgerIconClicked] = useState(false)

    const handleButtonClick = () => {
        setBurgerIconClicked(!burgerIconClicked)
    }
    return(
        <>
            <div className="div-navbar">
                <div className="div-navbar-logo">
                    <a href="#home">
                        <img className="navbar-logo" src={logoIM5} alt="" />
                    </a>
                </div>
                <div className={`menu-items ${burgerIconClicked ? 'active' : ''}`}>
                {burgerIconClicked === false ? 
                <div className="div-navbar-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#certifications">Certifications</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
            : 
            <div className="menu-items active">
                            <a 
                                onClick={handleButtonClick}
                                className="a-contact-navbar" 
                                href="#gallery"
                            >Home
                            </a>
                            <a 
                                onClick={handleButtonClick} 
                                className="a-contact-navbar" 
                                href="#about"
                            >
                            About
                            </a>
                            <a 
                                onClick={handleButtonClick} 
                                className="a-contact-navbar" 
                                href="#services"
                            >Skills
                            </a>
                            <a 
                                onClick={handleButtonClick} 
                                className="a-contact-navbar" 
                                href="#reviews"
                            >Certifications
                            </a>
                            <a 
                                onClick={handleButtonClick} 
                                className="a-contact-navbar" 
                                href="#contact"
                            >Projects
                            </a>
                            <a 
                                onClick={handleButtonClick} 
                                className="a-contact-navbar" 
                                href="#contact"
                            >Contact
                            </a>
                        </div>}
                </div>
                <div className="burgerIcon">
                    <BurgerIcon burgerIconClicked={burgerIconClicked} handleClick={handleButtonClick}/>
                </div>
                <div className={`initial ${burgerIconClicked ? 'active' : ''}`}>

                </div>
                
            </div>
        </>
    )
}