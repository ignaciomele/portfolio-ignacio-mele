import React, { useState, useEffect } from "react";
import './navbar.css';
import logoIM5 from '../../static/logoIM5.png';
import BurgerIcon from "./burgerIcon/BurgerIcon";

interface MenuItem {
    label: string;
    href: string;
}

const Navbar: React.FC = () => {
    const [burgerIconClicked, setBurgerIconClicked] = useState<boolean>(false)
    const [isMobile, setIsMobile] = useState<boolean>(false)

    const menuItems: MenuItem[] = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Certifications", href: "#certifications" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ]

    useEffect(() => {
        const checkIsMobile = () => {
          setIsMobile(window.innerWidth <= 768)
        }
        checkIsMobile()
        window.addEventListener("resize", checkIsMobile)
        return () => {
          window.removeEventListener("resize", checkIsMobile)
        }
      }, [])

      const handleButtonClick = () => {
        if (isMobile) {
          setBurgerIconClicked((prevState) => !prevState)
        }
      }

    return (
        <div className="div-navbar">
            <div className="div-navbar-logo">
                <a href="#home">
                    <img className="navbar-logo" src={logoIM5} alt="" />
                </a>
            </div>
            <div className={`menu-items ${burgerIconClicked ? 'active' : ''}`}>
                <div className="div-navbar-links">
                    {menuItems.map((item, index) => (
                        <a
                            key={index}
                            onClick={handleButtonClick}
                            className="a-contact-navbar"
                            href={item.href}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
            <div className="burgerIcon">
                <BurgerIcon burgerIconClicked={burgerIconClicked} handleClick={handleButtonClick} />
            </div>
            <div className={`initial ${burgerIconClicked ? 'active' : ''}`}></div>
        </div>
    )
}

export default Navbar