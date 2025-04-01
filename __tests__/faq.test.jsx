import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Faq from './faq';

describe('Faq Component', () => {
  test('renders the Faq component with all AccordionTab headers', () => {
    render(<Faq />);

    // Check if all headers are rendered
    expect(
      screen.getByText("I have registered but haven't received a confirmation e-mail yet?")
    ).toBeInTheDocument();
    expect(
      screen.getByText('I have registered but I want to cancel, what now?')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Do I need to be a developer to join?')
    ).toBeInTheDocument();
    expect(
      screen.getByText('I registered solo, what now? to be a developer to join?')
    ).toBeInTheDocument();
    expect(
      screen.getByText('I registered as a team, what now?')
    ).toBeInTheDocument();
  });
});