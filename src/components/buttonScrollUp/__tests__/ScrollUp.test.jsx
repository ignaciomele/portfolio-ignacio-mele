import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import ScrollUp from "../ScrollUp"

describe("ScrollUp component", () => {
    it("Renders the component initially hidden", () => {
        render(<ScrollUp />)
        const scrollUpButton = screen.queryByTestId("scrollUp")
        expect(scrollUpButton).not.toBeInTheDocument()
      });

      it("renders the component after scrolling down", async () => {
        render(<ScrollUp />)
        
        await waitFor(() => {
            window.scrollY = 300
            window.dispatchEvent(new Event("scroll"))
            const scrollUpButton = screen.getByTestId("scrollUp")
            expect(scrollUpButton).toBeInTheDocument()
        });
      });

    it("scrolls to the top when clicked", async () => {
        render(<ScrollUp />)
        window.scrollY = 300
        await waitFor(() => {
            window.dispatchEvent(new Event("scroll"))
            const scrollUpButton = screen.getByTestId("scrollUp")
            expect(scrollUpButton).toBeInTheDocument()
        });
        const scrollUpButton = screen.getByTestId("scrollUp")
        fireEvent.click(scrollUpButton)
        await waitFor(() => {
            window.scrollY = 0
            expect(window.scrollY).toBe(0);
          });
      });
})