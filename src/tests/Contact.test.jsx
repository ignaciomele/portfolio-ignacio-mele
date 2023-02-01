import { render, screen, cleanup, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Contact from "../components/contact/Contact"
import { ContactMock } from '../mocks/Contact.mock'

describe('Contact', () => {
    const mockFn = jest.fn(ContactMock)
    const setup = () => render(<Contact mockFn={mockFn}/>)
    afterEach(cleanup)
    afterEach(jest.clearAllMocks)

    it('Should four input exists at the screeen', async () => {
        setup()
        const nameInput = screen.getByPlaceholderText(/name & surname/i)
        const emailInput = screen.getByPlaceholderText(/email/i)
        const subjectInput = screen.getByPlaceholderText(/subject/i)
        const messageInput = screen.getByPlaceholderText(/message/i)
        const buttonSend = screen.getByRole('button', {name: /send/i})

        expect(nameInput).toBeInTheDocument()
        expect(emailInput).toBeInTheDocument()
        expect(subjectInput).toBeInTheDocument()
        expect(messageInput).toBeInTheDocument()
        expect(buttonSend).toBeInTheDocument()

        expect(nameInput).toHaveValue('')
        expect(emailInput).toHaveValue('')
        expect(subjectInput).toHaveValue('')
        expect(messageInput).toHaveValue('')
        expect(buttonSend).toHaveValue('')
    })

    it('Should correct mock data', async () => {
        setup()
        const nameInput = screen.getByPlaceholderText(/name & surname/i)
        const emailInput = screen.getByPlaceholderText(/email/i)
        const subjectInput = screen.getByPlaceholderText(/subject/i)
        const messageInput = screen.getByPlaceholderText(/message/i)

        userEvent.type(nameInput, ContactMock.name)
        userEvent.type(emailInput, ContactMock.email)
        userEvent.type(subjectInput, ContactMock.subject)
        userEvent.type(messageInput, ContactMock.message)

        await waitFor(() => {
            expect(nameInput).toHaveValue(ContactMock.name)
        })
        await waitFor(() => {
            expect(emailInput).toHaveValue(ContactMock.email)
        })
        await waitFor(() => {
            expect(subjectInput).toHaveValue(ContactMock.subject)
        })
        await waitFor(() => {
            expect(messageInput).toHaveValue(ContactMock.message)
        })
    })

    it('Should call the onSubmit function when the submit button is clicked', async () => {
        setup()
        const nameInput = screen.getByPlaceholderText(/name & surname/i)
        const emailInput = screen.getByPlaceholderText(/email/i)
        const subjectInput = screen.getByPlaceholderText(/subject/i)
        const messageInput = screen.getByPlaceholderText(/message/i)
        const buttonSend = screen.getByRole('button', {name: /send/i})

        userEvent.clear(nameInput)
        userEvent.type(nameInput, ContactMock.name)
        userEvent.clear(emailInput)
        userEvent.type(emailInput, ContactMock.email)
        userEvent.clear(subjectInput)
        userEvent.type(subjectInput, ContactMock.subject)
        userEvent.clear(messageInput)
        userEvent.type(messageInput, ContactMock.message)

        userEvent.click(buttonSend)
        await waitFor(() => {
            expect(mockFn).toHaveBeenCalledTimes(1)
        })
    })
})

