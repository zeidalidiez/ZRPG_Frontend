import { render, screen } from '@testing-library/react';
import App from './App';

test('renders database', () => {
  render(<App />);
  const linkElement = screen.getByText(/readnext/i);
  expect(linkElement).toBeInTheDocument();
});
