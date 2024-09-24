import { render, screen } from '@testing-library/react';
import FieldInput, { FieldTextarea } from '../../components/Input';

describe('FieldInput Component', () => {
  test('renders input with correct placeholder', () => {
    render(<FieldInput type="text" placeholder="Enter your name" />);
    
    const inputElement = screen.getByPlaceholderText(/enter your name/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('applies error class when isError is true', () => {
    render(<FieldInput type="text" placeholder="Enter your name" isError={true} />);
    
    const inputContainer = screen.getByPlaceholderText(/enter your name/i).parentElement;
    expect(inputContainer).toHaveClass('border-red-500');
  });

  test('does not apply error class when isError is false', () => {
    render(<FieldInput type="text" placeholder="Enter your name" isError={false} />);
    
    const inputContainer = screen.getByPlaceholderText(/enter your name/i).parentElement;
    expect(inputContainer).toHaveClass('focus-within:border-purple-500');
  });
});

describe('FieldTextarea Component', () => {
  test('renders textarea with correct placeholder', () => {
    render(<FieldTextarea placeholder="Enter your message" />);
    
    const textareaElement = screen.getByPlaceholderText(/enter your message/i);
    expect(textareaElement).toBeInTheDocument();
  });

  test('applies error class when isError is true', () => {
    render(<FieldTextarea placeholder="Enter your message" isError={true} />);
    
    const textareaContainer = screen.getByPlaceholderText(/enter your message/i).parentElement;
    expect(textareaContainer).toHaveClass('border-red-500');
  });

  test('does not apply error class when isError is false', () => {
    render(<FieldTextarea placeholder="Enter your message" isError={false} />);
    
    const textareaContainer = screen.getByPlaceholderText(/enter your message/i).parentElement;
    expect(textareaContainer).toHaveClass('focus-within:border-purple-500');
  });
});
