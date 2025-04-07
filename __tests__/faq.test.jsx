import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Faq from './faq';

describe('Faq Component', () => {
  test('renders all AccordionTab headers', () => {
    render(<Faq />);

    const headers = screen.getAllByRole('heading');
    expect(headers).toHaveLength(5);
    expect(headers.map(header => header.textContent)).toEqual([
      "I have registered but haven't received a confirmation e-mail yet?",
      'I have registered but I want to cancel, what now?',
      'Do I need to be a developer to join?',
      'I registered solo, what now? to be a developer to join?',
      'I registered as a team, what now?',
    ]);
  });

  test('expands and collapses AccordionTab content', () => {
    render(<Faq />);

    const firstHeader = screen.getByText("I have registered but haven't received a confirmation e-mail yet?");
    fireEvent.click(firstHeader); // Simulate a click
    expect(screen.getByText('Our registration form service won\'t mail a confirmation...')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Faq />);
    expect(asFragment()).toMatchSnapshot();
  });
});