import { render, screen, cleanup, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Home from "../components/home/Home";
import {BtnDownloadMock} from '../mocks/Home.mock'

describe('Home', () => {
    const mockFn = jest.fn(BtnDownloadMock)
    const setup = () => render(<Home mockFn={mockFn}/>)
    afterEach(cleanup)

    it('Should show buttons exists at the screen', () => {
        setup()
        const buttonDownload = screen.getByRole('button', { name: /download resume/i })
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