import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "../Contact"

describe("Contact Component", () => {
  it("Renders the title 'Contact Me'", () => {
    render(<Contact />)
    expect(screen.getByTestId("contact-title")).toBeInTheDocument()
  })

  it("Displays Footer icons", () => {
    render(<Contact />)
    expect(screen.getByTestId("contact-linkedinIcon")).toBeInTheDocument()
    expect(screen.getByTestId("contact-whatsappIcon")).toBeInTheDocument()
    expect(screen.getByTestId("contact-gmailIcon")).toBeInTheDocument()
  })

  it("Opens LinkedIn, WhatsApp, and Gmail Icons links in new tabs", () => {
    render(<Contact />)
    const linkedinIcon = screen.getByTestId("contact-linkedinIcon")
    const whatsappIcon = screen.getByTestId("contact-whatsappIcon")
    const gmailIcon = screen.getByTestId("contact-gmailIcon")

    fireEvent.click(linkedinIcon)
    fireEvent.click(whatsappIcon)
    fireEvent.click(gmailIcon)
  })

  it("contains a ContactForm component", () => {
    render(<Contact />)
    expect(screen.getByTestId("contact-contactForm")).toBeInTheDocument()
  })
})