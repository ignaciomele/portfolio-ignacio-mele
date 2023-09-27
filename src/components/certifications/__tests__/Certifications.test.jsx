import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Certifications from "../Certifications";
import { certificationsData } from "../Certifications"

describe("Certifications Component", () => {
  it("render the whole component", async () => {
    render(<Certifications />)
    
    await waitFor(() => {
        expect(screen.getByText("Certifications")).toBeInTheDocument()
    })
    const certificationsElement = screen.getByTestId("certifications")
    expect(certificationsElement).toBeInTheDocument()
  })

  it("displays all certifications correctly", async () => {
    render(<Certifications />)
    
    await waitFor(() => {
      const certifications = screen.getAllByTestId("certification-card")
      
      certificationsData?.forEach((certification, index) => {
        expect(certifications[index]).toBeInTheDocument()
        expect(certifications[index]).toHaveTextContent(certification.institution)
        expect(certifications[index]).toHaveTextContent(certification.date)
      })
    })
  })

  it('calls handleViewAllBtn when View All button is clicked', () => {
    render(<Certifications />)

    const viewAllButton = screen.getByTestId("certifications-viewAll-button")
    const expectedUrl = "https://drive.google.com/drive/folders/1j_wPwSTEVSUyw3qXw66DLos3hZOxBYDm"

    const originalOpen = window.open
    window.open = jest.fn()

    fireEvent.click(viewAllButton)

    expect(window.open).toHaveBeenCalledWith(expectedUrl, "_blank")

    window.open = originalOpen


  })
})