import React from "react";
import { render, screen } from "@testing-library/react";
import Projects from "../Projects"


describe("Projects Component", () => {
  const setup = () => render(<Projects />)
    it("renders the whole component", () => {
      setup()
      
      expect(screen.getByTestId("projects-title")).toBeInTheDocument()
    })

    it("Render correctly length projects", () => {
        setup()

        const projectCards = screen.getAllByTestId(/^project-card-\d+$/)
        expect(projectCards).toHaveLength(3) 
    })

    it("Renders individual project cards with correct content", () => {
        setup();
        
        const projectTitles = screen.getAllByText(/Simples Cosas Cabins|Portfolio|Cocktail recipes/);
        const projectDescriptions = screen.getAllByText(/One of my work as a freelancer|My personal web site|Web page to search your favourite cocktails/);
      
        expect(projectTitles).toHaveLength(3);
        expect(projectDescriptions).toHaveLength(3);
      });

  })