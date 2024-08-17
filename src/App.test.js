import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // Arrange
  render(<App />);

  // Using debug method to give us a sense of what the DOM looks like when our tests are running
  screen.debug();

  // Act
  const linkElement = screen.getByText(/learn react/i);

  // To debug a single element:
  screen.debug(linkElement);

  // Assert
  expect(linkElement).toBeInTheDocument();
});
