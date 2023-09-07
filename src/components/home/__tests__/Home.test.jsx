import { render, screen, cleanup, waitFor, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Home from "../Home";
import {BtnDownloadMock} from '../../../mocks/Home.mock'

describe('Home', () => {
    const mockFn = jest.fn(BtnDownloadMock)
    const setup = () => render(<Home mockFn={mockFn}/>)
    afterEach(cleanup)

    it.only('Should show buttons exists at the screen', async () => {
        setup()
        fireEvent.animationEnd(screen.getByTestId("home-title-container"))
        await waitFor(() => {
            expect(screen.getByText("Hello! I'mIgnacio Mele")).toBeInTheDocument()
        })
        const buttonDownload = screen.getByTestId("download-resume-button")
        const buttonContact = screen.getByRole('button', { name: /contact/i })

        expect(buttonDownload).toBeInTheDocument()
        expect(buttonContact).toBeInTheDocument()

        expect(buttonDownload).toHaveValue('')
        expect(buttonContact).toHaveValue('')
    })
    it('Should button download resume', async () => {
        setup()
        const buttonDownload = screen.getByRole('button', { name: /download resume/i })
        userEvent.click(buttonDownload, BtnDownloadMock) 
        await waitFor(() => {
            expect(mockFn).toHaveBeenCalledTimes(1)
        })
    })
})