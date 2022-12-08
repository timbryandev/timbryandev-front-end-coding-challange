import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

describe('App', () => {
  it('should render', () => {
    render(<App />)
  })

  it('should increment count on button click', () => {
    // Arrange
    render(<App />)
    const button = screen.getByTestId('increase-clicks')
    expect(button).toHaveTextContent('Click me!')

    // Act
    fireEvent.click(button)

    // Assert
    expect(button).toHaveTextContent('You have clicked me 1 times!')
  })
})
