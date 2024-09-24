import React from 'react';
import Button from '../../components/Button';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Button Component', () => {
  it('renders correctly with primary variant', () => {
    render(<Button variant="primary" text="Click Me" />);
    const button = screen.getByText('Click Me');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-purple-500');
  });

  it('renders correctly with success variant', () => {
    render(<Button variant="success" text="Success" />);
    const button = screen.getByText('Success');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-green-500');
  });

  it('applies disabled styles when isDisabled is true', () => {
    render(<Button variant="primary" text="Click Me" isDisabled={true} />);
    const button = screen.getByText('Click Me');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('bg-black');
  });

  it('should call onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button variant="primary" text="Click Me" onClick={handleClick} />);
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with additional props', () => {
    render(<Button variant="primary" text="Click Me" data-testid="custom-button" />);
    const button = screen.getByTestId('custom-button');
    expect(button).toBeInTheDocument();
  });
});