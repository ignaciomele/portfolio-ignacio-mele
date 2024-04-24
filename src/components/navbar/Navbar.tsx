import React, { useState, useEffect } from "react";
import './navbar.css';
import BurgerIcon from "./burgerIcon/BurgerIcon";
import Logo from "./logo/Logo";
import MenuItem from "./menuItem/MenuItem";
import { NavbarMenuItemData } from "../../models/database-entities";

const Navbar: React.FC = () => {
    const [burgerIconClicked, setBurgerIconClicked] = useState<boolean>(false)
    const [isMobile, setIsMobile] = useState<boolean>(false)

    const menuItems: NavbarMenuItemData[] = [
        { id: 1, label: "Home", href: "#home" },
        { id: 2, label: "About", href: "#about" },
        { id: 3, label: "Skills", href: "#skills" },
        { id: 4, label: "Certifications", href: "#certifications" },
        { id: 5, label: "Projects", href: "#projects" },
        { id: 6, label: "Contact", href: "#contact" },
      ];

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
            <Logo />
            <div className={`menu-items ${burgerIconClicked ? 'active' : ''}`}>
                <div className="div-navbar-links">
                {menuItems.map((item) => (
                    <MenuItem
                        key={item.id}
                        label={item.label}
                        href={item.href}
                        onClick={handleButtonClick} id={0}
                        />
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