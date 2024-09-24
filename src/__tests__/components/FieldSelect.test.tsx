import { render, screen } from '@testing-library/react';
import FieldSelect, { Option } from '../../components/Select';

describe('FieldSelect Component', () => {
  const items: Option[] = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];

  test('renders select with default disabled option', () => {
    render(<FieldSelect items={items} />);

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();

    const defaultOption = screen.getByText('---');
    expect(defaultOption).toBeInTheDocument();
    expect(defaultOption).toBeDisabled();
  });

  test('renders select with provided options', () => {
    render(<FieldSelect items={items} />);

    const option1 = screen.getByText('Option 1');
    const option2 = screen.getByText('Option 2');
    const option3 = screen.getByText('Option 3');

    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
    expect(option3).toBeInTheDocument();
  });

  test('applies error class when isError is true', () => {
    render(<FieldSelect items={items} isError={true} />);
    
    const selectContainer = screen.getByRole('combobox').parentElement;
    expect(selectContainer).toHaveClass('border-red-500');
  });

  test('does not apply error class when isError is false', () => {
    render(<FieldSelect items={items} isError={false} />);
    
    const selectContainer = screen.getByRole('combobox').parentElement;
    expect(selectContainer).toHaveClass('focus-within:border-purple-500');
  });
});
