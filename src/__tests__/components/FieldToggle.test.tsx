import { render, screen, fireEvent } from '@testing-library/react';
import FieldToggle from '../../components/Toggle';

describe('FieldToggle Component', () => {
  test('renders with initial unchecked state', () => {
    render(<FieldToggle onToggle={jest.fn()} checked={false} />);

    const toggleElement = screen.getByTestId('field-toggle');
    expect(toggleElement).toHaveClass('bg-gray-300'); // Initial unchecked state
  });

  test('renders with initial checked state', () => {
    render(<FieldToggle onToggle={jest.fn()} checked={true} />);

    const toggleElement = screen.getByTestId('field-toggle');
    expect(toggleElement).toHaveClass('bg-blue-300'); // Initial checked state
  });

  test('toggles state on click', () => {
    const onToggleMock = jest.fn();
    render(<FieldToggle onToggle={onToggleMock} checked={false} />);

    const toggleElement = screen.getByTestId('field-toggle');

    // Initially unchecked (gray background)
    expect(toggleElement).toHaveClass('bg-gray-300');

    // Simulate click
    fireEvent.click(toggleElement);

    // Expect background color to change to checked (blue background)
    expect(toggleElement).toHaveClass('bg-blue-300');
    expect(onToggleMock).toHaveBeenCalledTimes(1);

    // Simulate another click
    fireEvent.click(toggleElement);

    // Expect background color to change back to unchecked (gray background)
    expect(toggleElement).toHaveClass('bg-gray-300');
    expect(onToggleMock).toHaveBeenCalledTimes(2);
  });
});
