import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  screen.getByText('This is a sample container for testing');
  screen.getByText('This should turn grey');
});
