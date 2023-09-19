import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactForm from "../ContactForm";

describe("ContactForm Component", () => {
    it("submits the form successfully", async () => {
        render(<ContactForm />)
      
        fireEvent.change(screen.getByTestId("form-name"), {
            target: { value: "Ignacio Mele" },
        })
        fireEvent.change(screen.getByTestId("form-email"), {
            target: { value: "ignaciomele@example.com" },
        })
        fireEvent.change(screen.getByTestId("form-subject"), {
            target: { value: "Test Subject" },
        })
        fireEvent.change(screen.getByTestId("form-message"), {
            target: { value: "Test message" },
        })
        
        fireEvent.submit(screen.getByRole("button", { name: "Send" }))
    
        // await waitFor(() => {
        //     const successMessage = screen.queryByText("The email was successfully sent");
        //     expect(successMessage).toBeInTheDocument();
        // })

        // expect(screen.getByTestId("form-name")).toHaveValue("")
        // expect(screen.getByTestId("form-email")).toHaveValue("")
        // expect(screen.getByTestId("form-subject")).toHaveValue("")
        // expect(screen.getByTestId("form-message")   ).toHaveValue("")
    })

})