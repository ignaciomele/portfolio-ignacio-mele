import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar"


describe("Navbar component", () => {
    const setup = () => render(<Navbar />)

    it("Render the whole component", () => {
        setup()

        const menuItems = [
            "Home",
            "About",
            "Skills",
            "Certifications",
            "Projects",
            "Contact",
          ]
      
          menuItems.forEach((item) => {
            const navbarElement = screen.getByText(item)
            expect(navbarElement).toBeInTheDocument()
          })
        
        const logoElement = screen.getByTestId("navbar-logo")
        expect(logoElement).toBeInTheDocument()
    })

    it("When one menuItems is clicked, the click event should be triggered", () => {
      const handleButtonClick = jest.fn()
      render(<Navbar />);
    
      const menuItems = [
        "Home",
        "About",
        "Skills",
        "Certifications",
        "Projects",
        "Contact",
      ];
    
      menuItems.forEach((item) => {
        const navbarElement = screen.getByText(item)
        expect(navbarElement).toBeInTheDocument()
        fireEvent.click(navbarElement)
        expect(handleButtonClick).toHaveBeenCalledTimes(1)
      });
    });
})