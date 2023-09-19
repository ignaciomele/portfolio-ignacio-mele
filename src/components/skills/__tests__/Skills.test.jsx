import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Skills from "../Skills"


describe("Skills component", () => {
    const setup = () => render(<Skills />)
    it("render the whole component", async () => {
        setup()

        await waitFor(() => { 
            expect(screen.getByText("Skills")).toBeInTheDocument() 
        })
        
        const skillsElement = screen.getByTestId("skills")
        expect(skillsElement).toBeInTheDocument()
    })

    it("calls handleMoreIcons when Show All button is clicked", () => {
        setup()

        const handleMoreIcons = screen.getByTestId("skills-show-more-button")
        fireEvent.click(handleMoreIcons)
        
        expect(screen.getByTestId("skills-next")).toHaveAttribute("data-testid", "skills-next");
    })
})