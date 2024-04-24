import { render, screen, cleanup, waitFor, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Home from "../Home";

describe('Home', () => {
    const mockFn = jest.fn()
    const setup = () => render(<Home mockFn={mockFn}/>)
    afterEach(cleanup)

    it.only('Should show buttons exists at the screen', async () => {
        setup()
        fireEvent.animationEnd(screen.getByTestId("home"))
        await waitFor(() => {
            expect(screen.getByText("Hello! I'm Ignacio Mele")).toBeInTheDocument()
        })

        await waitFor(() => {
            expect(screen.getByTestId("contact-button")).toBeInTheDocument()
        })
        await waitFor(() => {
            expect(screen.getByTestId("download-resume-button")).toBeInTheDocument()
        })
        const buttonContact = screen.getByRole('button', { name: /contact/i })
        const buttonDownload = screen.getByTestId("download-resume-button")
        
        expect(buttonContact).toHaveValue('')
        expect(buttonDownload).toHaveValue('')
    })
    it('Should button download resume', async () => {
        setup()
        const buttonDownload = screen.getByRole('button', { name: /download resume/i })
        userEvent.click(buttonDownload  ) 
        await waitFor(() => {
            expect(mockFn).toHaveBeenCalledTimes(1)
        })
    })
})