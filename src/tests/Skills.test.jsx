import { render, screen, fireEvent } from '@testing-library/react';
import Skills from '../components/skills/Skills.jsx'

const defaultProps = {
    onclick: jest.fn(),
    text: 'Show more'
}
test('button renders with the correct text', () => {
    render(<Skills {...defaultProps} />)
    expect(screen.getByText("Show more")).toBeTruthy()
})
test('calls the correct function onClick', () => {
    const onClick = jest.fn()
    render(<Skills {...defaultProps} onClick={onClick}/>)
    fireEvent.click(screen.getByText(defaultProps.text))
    onClick()
    expect(onClick).toHaveBeenCalled()
})
