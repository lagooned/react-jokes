import { render, screen } from '@testing-library/react';
import App from './App';

test('renders 5 jokes', () => {
  render(<App />);
  const jokes = screen.getAllByText(/punchline/i);
  expect(jokes).toHaveLength(5);
});

test('renders 3 questions', () => {
  render(<App />);
  const jokes = screen.getAllByText(/question/i);
  expect(jokes).toHaveLength(3);
});
