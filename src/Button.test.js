import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './components/Buttons/Button';


test('renders the button with correct text and className', () => {
  const { getByText } = render(<Button text="Click Me" className="test-class" />);
  
  const button = getByText('Click Me');
  
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass('bg-black text-white px-20 py-3 test-class');
});

test('calls onClick handler when clicked', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button text="Click Me" onClick={handleClick} />);
  
  const button = getByText('Click Me');
  fireEvent.click(button);
  
  expect(handleClick).toHaveBeenCalledTimes(1);
});
