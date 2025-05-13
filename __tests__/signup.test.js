import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignupSection from '../src/app/ui/SignupSection.jsx';

describe('SignUpSection Component', () => {
  test('renders some content and a button', () => {
    const mockData = {
      content: 'Sample content',
      buttonLabels: {
        label1: 'Sign Up',
        label2: 'Not Available',
      },
    };

    render(<SignupSection data={mockData} />);

    const content = screen.getAllByRole('paragraph');
    const button = screen.getAllByRole('button');

    expect(content.length).toEqual(1);
    expect(button.length).toEqual(1);
  });
});
